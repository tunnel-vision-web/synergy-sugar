#!/usr/bin/env python3
"""
Script to add captions to Synergy Sugar screenshots and create a PDF portfolio.
Improved golden section detection.
"""

from PIL import Image, ImageDraw, ImageFont
from reportlab.lib.pagesizes import letter, A4
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
import os
import io

# Configuration
IMAGE_DIR = "/app/pdf_project"
OUTPUT_DIR = "/app/pdf_project/output"
PDF_OUTPUT = "/app/pdf_project/Synergy_Bravo_ERP_Portfolio.pdf"

# Captions for each image (1-indexed to match filenames)
CAPTIONS = {
    1: "Hero section on landing page",
    2: "App selection feature - links to appointment system",
    3: "Appointment system",
    4: "Community Forum",
    5: "Pricing page - linked to purchasing/billing system",
    6: "Fully AI integrated"
}

# Brand colors - the actual gold from screenshots appears to be around (206, 198, 114) or similar olive-gold
GOLD_COLOR = (246, 221, 13)  # #f6dd0d (target)
TEXT_COLOR = (59, 59, 59)    # #3b3b3b (dark gray for readability on gold)

def is_gold_pixel(r, g, b):
    """
    Check if a pixel is in the gold/olive-gold range.
    The screenshots show a muted gold that looks like #cec672 or similar.
    """
    # Check for gold/yellow-ish colors (allowing wide range for the muted gold)
    # Gold characteristics: high R, high G, low-medium B
    is_gold = (
        (180 <= r <= 255) and  # Red is high
        (160 <= g <= 230) and  # Green is medium-high
        (0 <= b <= 150) and    # Blue is low-medium
        (r > b) and            # Red > Blue
        (g > b) and            # Green > Blue
        abs(r - g) < 80        # Red and Green are close
    )
    return is_gold

def find_golden_section(image):
    """
    Find the golden/yellow section at the bottom of the image.
    Returns the y-coordinate where the golden section starts.
    """
    width, height = image.size
    pixels = image.load()
    
    # Sample some pixels to understand the golden color in this image
    print("  Sampling bottom pixels for color detection...")
    bottom_y = height - 50
    sample_colors = []
    for x in [width//4, width//2, 3*width//4]:
        if 0 <= x < width and 0 <= bottom_y < height:
            sample_colors.append(pixels[x, bottom_y][:3])
    print(f"  Bottom sample colors: {sample_colors}")
    
    # Start from bottom and scan upward to find where gold section starts
    golden_start = height
    consecutive_non_gold = 0
    
    for y in range(height - 10, 0, -1):
        # Sample multiple points across the width
        gold_count = 0
        total_samples = 10
        
        for i in range(total_samples):
            x = int(width * (i + 1) / (total_samples + 1))
            try:
                r, g, b = pixels[x, y][:3]
                if is_gold_pixel(r, g, b):
                    gold_count += 1
            except:
                continue
        
        # If majority of samples are gold, we're in the golden section
        if gold_count >= total_samples * 0.6:
            golden_start = y
            consecutive_non_gold = 0
        else:
            consecutive_non_gold += 1
            # If we've had several non-gold rows after finding gold, stop
            if golden_start < height - 50 and consecutive_non_gold > 10:
                break
    
    return golden_start

def add_caption_to_image(image_path, caption, output_path):
    """
    Add a caption to the golden section of an image.
    """
    # Open image
    img = Image.open(image_path).convert('RGB')
    width, height = img.size
    
    # Find the golden section
    golden_start = find_golden_section(img)
    golden_height = height - golden_start
    
    print(f"  Image size: {width}x{height}")
    print(f"  Golden section starts at y={golden_start}, height={golden_height}px")
    
    # If golden section is too small or not found, place text in bottom portion
    if golden_height < 100:
        print(f"  Golden section too small, using bottom 40% of image")
        golden_start = int(height * 0.6)
        golden_height = height - golden_start
    
    # Create drawing context
    draw = ImageDraw.Draw(img)
    
    # Calculate font size - responsive but readable
    font_size = min(52, int(golden_height * 0.15))
    font_size = max(36, font_size)
    
    # Try different font options
    font_paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/usr/share/fonts/truetype/freefont/FreeSansBold.ttf",
        "/usr/share/fonts/TTF/DejaVuSans-Bold.ttf",
    ]
    
    font = None
    for font_path in font_paths:
        if os.path.exists(font_path):
            try:
                font = ImageFont.truetype(font_path, font_size)
                print(f"  Using font: {os.path.basename(font_path)} at size {font_size}")
                break
            except:
                continue
    
    if font is None:
        font = ImageFont.load_default()
        print(f"  Using default font")
    
    # Calculate text position (centered in golden section)
    bbox = draw.textbbox((0, 0), caption, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Center horizontally
    x = (width - text_width) // 2
    
    # Center vertically in the golden section
    y = golden_start + (golden_height - text_height) // 2
    
    # Draw the text with the dark color for contrast on gold
    draw.text((x, y), caption, fill=TEXT_COLOR, font=font)
    
    # Save the modified image
    img.save(output_path, 'JPEG', quality=95)
    print(f"  ✓ Saved: {output_path}")
    
    return output_path

def create_pdf(image_paths, output_pdf):
    """
    Create a PDF from a list of images.
    """
    if not image_paths:
        print("No images to create PDF from!")
        return
    
    # Get the size from the first image to determine PDF page size
    first_img = Image.open(image_paths[0])
    img_width, img_height = first_img.size
    
    # Create PDF with custom page size matching image aspect ratio
    page_width = 11 * inch
    page_height = (img_height / img_width) * page_width
    
    c = canvas.Canvas(output_pdf, pagesize=(page_width, page_height))
    
    for i, img_path in enumerate(image_paths):
        print(f"  Adding page {i+1}: {os.path.basename(img_path)}")
        c.drawImage(img_path, 0, 0, width=page_width, height=page_height)
        if i < len(image_paths) - 1:
            c.showPage()
    
    c.save()
    print(f"\n✓ PDF created: {output_pdf}")

def main():
    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    print("=" * 60)
    print("SYNERGY BRAVO ERP - Portfolio PDF Generator")
    print("=" * 60)
    
    # Process each image
    processed_images = []
    
    for i in range(1, 7):
        image_path = os.path.join(IMAGE_DIR, f"{i}.jpg")
        
        if not os.path.exists(image_path):
            print(f"\n⚠ Image {i}.jpg not found, skipping...")
            continue
        
        print(f"\n[{i}/6] Processing: {CAPTIONS.get(i, 'No caption')}")
        print("-" * 40)
        
        output_path = os.path.join(OUTPUT_DIR, f"captioned_{i}.jpg")
        caption = CAPTIONS.get(i, f"Page {i}")
        
        add_caption_to_image(image_path, caption, output_path)
        processed_images.append(output_path)
    
    # Create PDF from processed images
    if processed_images:
        print(f"\n{'=' * 60}")
        print("Creating PDF from captioned images...")
        print("-" * 40)
        create_pdf(processed_images, PDF_OUTPUT)
        print("=" * 60)
        print(f"\n🎉 SUCCESS!")
        print(f"   PDF saved to: {PDF_OUTPUT}")
        print(f"   Total pages: {len(processed_images)}")
        print(f"\nNote: Image 6 was not provided. Upload it to include 'Fully AI integrated' page.")
    else:
        print("\n❌ No images were processed!")

if __name__ == "__main__":
    main()
