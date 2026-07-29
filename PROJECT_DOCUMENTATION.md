# Synergy Bravo ERP - Technical Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Site Architecture](#site-architecture)
5. [Page Documentation](#page-documentation)
6. [Design System](#design-system)
7. [Backend API](#backend-api)
8. [Database Schema](#database-schema)
9. [Environment Configuration](#environment-configuration)
10. [Deployment](#deployment)
11. [Development Guide](#development-guide)

---

## 🎯 Project Overview

### What is Synergy Bravo ERP?

**Synergy Bravo ERP** (also known as **Synergy Sugar**) is a comprehensive Enterprise Resource Planning platform specifically designed for the **sugar farming industry in Kenya**. The platform provides an integrated suite of applications to manage the entire sugar value chain - from farmer recruitment to final product sales.

### Purpose

This project serves as:
1. **Marketing Website** - Showcases the ERP platform features, pricing, and value proposition
2. **Product Branding Vehicle** - Establishes visual identity for product rollout
3. **Client Interface** - Provides easy access to system information and demo booking
4. **Community Hub** - Includes forum and help center for user support

### Target Market

- **Primary**: Sugar mills and sugar farming companies in Kenya
- **Secondary**: East African sugar industry (Uganda, Tanzania)
- **Currency**: Kenya Shillings (KSH)

### Core Modules (10 Applications)

| Module | Description |
|--------|-------------|
| **Farmers Recruitment & Cane** | Farmer registration, contracts, and cane management |
| **Nucleus & Farm Operations** | Core farm management and operations |
| **Harvesting & Transport** | Harvest scheduling and logistics coordination |
| **Weighbridge** | Weight measurement and cargo tracking |
| **Fleet Management** | Vehicle tracking and GPS management |
| **MRP & Inventory** | Materials and inventory control |
| **Production** | Sugar production and manufacturing |
| **Sales & Invoicing** | Billing, payments, and revenue management |
| **Financial Management** | Accounting and budgeting |
| **HR & Payroll** | Human resources and employee management |

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.0.0 | Core UI framework |
| **React Router DOM** | 7.5.1 | Client-side routing |
| **Tailwind CSS** | 3.4.17 | Utility-first CSS framework |
| **Radix UI** | Various | Headless UI components |
| **Axios** | 1.8.4 | HTTP client |
| **Lucide React** | 0.507.0 | Icon library |
| **date-fns** | 4.1.0 | Date manipulation |
| **React Hook Form** | 7.56.2 | Form management |
| **Zod** | 3.24.4 | Schema validation |
| **CRACO** | 7.1.0 | Create React App Configuration Override |
| **Embla Carousel** | 8.6.0 | Carousel/slider component |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| **FastAPI** | 0.110.1 | Python web framework |
| **Uvicorn** | 0.25.0 | ASGI server |
| **Motor** | 3.3.1 | Async MongoDB driver |
| **PyMongo** | 4.5.0 | MongoDB driver |
| **Pydantic** | 2.6.4+ | Data validation |
| **Python-dotenv** | 1.0.1+ | Environment management |
| **bcrypt** | 4.1.3 | Password hashing |
| **PyJWT** | 2.10.1+ | JSON Web Tokens |
| **Pandas** | 2.2.0+ | Data analysis |
| **NumPy** | 1.26.0+ | Numerical computing |

### Database

| Technology | Purpose |
|------------|---------|
| **MongoDB** | Primary database (NoSQL) |

### Development Tools

| Tool | Purpose |
|------|---------|
| **ESLint** | JavaScript/TypeScript linting |
| **PostCSS** | CSS processing |
| **Autoprefixer** | CSS vendor prefixing |
| **Black** | Python code formatting |
| **Pytest** | Python testing |
| **Flake8** | Python linting |
| **MyPy** | Python type checking |

### External Services

| Service | Purpose |
|---------|---------|
| **Bootstrap 5.2.3** | CSS framework (landing pages) |
| **Google Fonts** | Typography (Roboto, Sansation) |
| **CDN Fonts** | Custom fonts |

---

## 📁 Project Structure

```
/app/
├── backend/                          # FastAPI Backend
│   ├── server.py                     # Main application entry point
│   ├── requirements.txt              # Python dependencies
│   └── .env                          # Backend environment variables
│
├── frontend/                         # React Frontend
│   ├── src/
│   │   ├── App.js                    # Main React application
│   │   ├── App.css                   # Global styles
│   │   ├── index.js                  # Entry point
│   │   ├── index.css                 # Base styles
│   │   ├── components/
│   │   │   └── ui/                   # Shadcn/Radix UI components
│   │   ├── hooks/
│   │   │   └── use-toast.js          # Toast notifications hook
│   │   └── lib/
│   │       └── utils.js              # Utility functions
│   │
│   ├── public/                       # Static Files & HTML Pages
│   │   ├── index.html                # React mount point
│   │   ├── favicon.png               # Site favicon
│   │   ├── parallax-bg.jpg           # Background image
│   │   │
│   │   ├── landing_enhanced.html     # Main landing page
│   │   ├── pricing.html              # Pricing plans page
│   │   ├── help.html                 # Help center
│   │   ├── appointment.html          # Demo booking system
│   │   ├── signup.html               # User registration (Step 1)
│   │   ├── signup2.html              # User registration (Step 2)
│   │   ├── buy1.html                 # Purchase flow (Configuration)
│   │   ├── buy2.html                 # Purchase flow (Payment)
│   │   │
│   │   ├── privacy-policy.html       # Privacy policy
│   │   ├── terms-of-service.html     # Terms of service
│   │   ├── security.html             # Security information
│   │   │
│   │   ├── ai-traceability-diagram.html    # AI diagram page
│   │   ├── ai-traceability-network.svg     # Network diagram
│   │   ├── download-diagram.html           # Diagram download
│   │   │
│   │   ├── forum/                    # Community Forum
│   │   │   ├── index.html            # Forum home
│   │   │   ├── ask-question.html     # Submit question
│   │   │   ├── question-detail.html  # Question view
│   │   │   ├── tags.html             # Tag listing
│   │   │   ├── users.html            # User listing
│   │   │   ├── css/
│   │   │   │   └── styles.css        # Forum styles
│   │   │   ├── js/                   # Forum JavaScript
│   │   │   └── assets/               # Forum assets
│   │   │
│   │   └── assets/
│   │       └── images/
│   │           ├── Synergy-logo-sugar-web-white.png
│   │           ├── Synergy-logo-sugar-web-black.png
│   │           ├── connected.png
│   │           └── slides/
│   │               ├── home-bg-1.jpg
│   │               ├── home-bg-2.jpg
│   │               └── home-bg-3.jpg
│   │
│   ├── package.json                  # Node.js dependencies
│   ├── tailwind.config.js            # Tailwind configuration
│   ├── postcss.config.js             # PostCSS configuration
│   ├── craco.config.js               # CRACO configuration
│   ├── jsconfig.json                 # JavaScript configuration
│   ├── components.json               # Shadcn UI configuration
│   └── .env                          # Frontend environment variables
│
├── tests/                            # Test files
│   └── __init__.py
│
├── scripts/                          # Utility scripts
│
├── README.md                         # Project readme
├── test_result.md                    # Testing documentation
├── linkedin_strategy.md              # Marketing strategy
├── linkedin_captions.md              # Social media content
├── integration_summary_final.md      # Integration notes
├── site_navigation_map.md            # Site navigation reference
├── pages_integration_summary.md      # Pages integration notes
└── responsive_menu_summary.md        # Responsive design notes
```

---

## 🏗️ Site Architecture

### Navigation Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         MAIN NAVIGATION                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐       │
│  │   Landing    │───▶│   Pricing    │───▶│    Buy 1     │       │
│  │   Page       │    │   Page       │    │  Configure   │       │
│  └──────────────┘    └──────────────┘    └──────────────┘       │
│         │                   │                   │                │
│         │                   │                   ▼                │
│         │                   │            ┌──────────────┐        │
│         │                   │            │    Buy 2     │        │
│         │                   │            │   Payment    │        │
│         │                   │            └──────────────┘        │
│         │                   │                                    │
│         ▼                   ▼                                    │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐       │
│  │    Help      │    │ Appointment  │    │   Sign Up    │       │
│  │   Center     │    │   Booking    │    │   Flow       │       │
│  └──────────────┘    └──────────────┘    └──────────────┘       │
│         │                                       │                │
│         │                                       ▼                │
│         │                                ┌──────────────┐        │
│         │                                │  Sign Up 2   │        │
│         │                                │  (Details)   │        │
│         │                                └──────────────┘        │
│         ▼                                                        │
│  ┌──────────────────────────────────────────────────────┐       │
│  │                  COMMUNITY FORUM                       │       │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  │       │
│  │  │  Home   │  │Questions│  │  Tags   │  │  Users  │  │       │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘  │       │
│  └──────────────────────────────────────────────────────┘       │
│                                                                  │
│  ┌──────────────────────────────────────────────────────┐       │
│  │                    LEGAL PAGES                         │       │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │       │
│  │  │Privacy Policy│ │Terms of     │  │  Security   │   │       │
│  │  │             │  │Service      │  │             │   │       │
│  │  └─────────────┘  └─────────────┘  └─────────────┘   │       │
│  └──────────────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────────────┘
```

### Header Navigation Links

| Link | Destination | Notes |
|------|-------------|-------|
| Home | `landing_enhanced.html` | Main landing page |
| Features | `landing_enhanced.html#features` | Features section |
| Pricing | `pricing.html` | Pricing plans |
| Help | `help.html` | Help center |
| Community | `forum/index.html` | Community forum |
| Request Demo | `appointment.html` | Demo booking |
| Sign In | `signup.html` | Authentication |

### Footer Links

| Section | Links |
|---------|-------|
| **Company** | About Us, Careers, Blog (→ Forum) |
| **Support** | Help Center, Contact, Documentation |
| **Legal** | Privacy Policy, Terms of Service, Security |
| **Social** | Facebook, Twitter/X, YouTube, Instagram, TikTok |

---

## 📄 Page Documentation

### 1. Landing Page (`landing_enhanced.html`)

**Purpose**: Main homepage showcasing the ERP platform

**Sections**:
| Section | Content |
|---------|---------|
| Hero | Full-screen slideshow with animated titles |
| Features | Carousel of platform features |
| Apps Grid | 3x3 grid of 10 ERP modules with hover effects |
| Testimonials | Customer quotes carousel |
| AI Traceability | Network diagram visualization |
| Access Devices | Multi-device compatibility showcase |
| Enterprise | Enterprise features grid |
| Footer | Navigation, social links |

**Key Features**:
- Parallax hero with 3 rotating background images
- Animated text sliding in from right
- Interactive app cards with hover buttons
- Responsive design with mobile menu

---

### 2. Pricing Page (`pricing.html`)

**Purpose**: Display subscription tiers and pricing

**Plans**:
| Plan | Price | Features |
|------|-------|----------|
| Free | KSH 0 | Basic features, 1 user |
| Professional | KSH 25/user/month | Full features, priority support |
| Enterprise | Custom | Dedicated support, custom integrations |

**CTAs**:
- Free: "Start Now" → `appointment.html`
- Professional: "Buy Now" → `buy1.html`
- Enterprise: "Contact Sales" → `appointment.html`

---

### 3. Help Center (`help.html`)

**Purpose**: Customer support and documentation hub

**Sections**:
- Search functionality
- App-specific help cards (one per module)
- Quick links to documentation
- Community forum button
- Contact support options

---

### 4. Appointment Booking (`appointment.html`)

**Purpose**: Multi-step demo scheduling system

**Features**:
- Appointment type selection
- Calendar date picker
- Time slot selection
- Booking summary sidebar
- Form validation
- Confirmation flow

**Appointment Types**:
- Product Demo
- Technical Consultation
- Sales Inquiry
- Training Session

---

### 5. Purchase Flow (`buy1.html` & `buy2.html`)

**Purpose**: Product configuration and checkout

**buy1.html (Configuration)**:
- User count selection
- Plan options
- Add-on features
- Billing frequency
- Price calculator

**buy2.html (Payment)**:
- Order summary
- Payment method selection
- Billing information form
- Order confirmation

---

### 6. Sign Up Flow (`signup.html` & `signup2.html`)

**Purpose**: User registration

**signup.html (Step 1)**:
- Email address
- Password creation
- Terms acceptance

**signup2.html (Step 2)**:
- Company information
- Contact details
- Industry selection

---

### 7. Community Forum (`forum/`)

**Purpose**: Q&A community for users

**Pages**:
| Page | Purpose |
|------|---------|
| `index.html` | Forum home, question listing |
| `ask-question.html` | Submit new question |
| `question-detail.html` | View question and answers |
| `tags.html` | Browse by tags |
| `users.html` | Community members |

**Features**:
- Question voting
- Answer system
- Tag categorization
- User profiles
- Search functionality

---

### 8. Legal Pages

| Page | Purpose |
|------|---------|
| `privacy-policy.html` | Data privacy information |
| `terms-of-service.html` | Service terms and conditions |
| `security.html` | Security practices |

---

## 🎨 Design System

### Color Palette

| Color | Hex Code | CSS Variable | Usage |
|-------|----------|--------------|-------|
| **Primary (Gold)** | `#f6dd0d` | `--primary` | CTAs, highlights, accents |
| **Secondary (Purple)** | `#686fb4` | `--secondary` | Buttons, links, hover states |
| **Text Gray** | `#5a5a5a` | `--text` | Body text |
| **Text Dark** | `#3b3b3b` | `--text-dark` | Headings |
| **Background** | `#fafafa` | `--bg` | Page background |
| **Border** | `#ddd` | `--border` | Borders, dividers |
| **Footer** | `#2f2f2f` | `--footer-bg` | Footer background |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| **Headings** | Sansation | 700 | Varies |
| **Body** | Roboto | 400 | 16px |
| **Navigation** | System UI | 500 | 0.95rem |
| **Buttons** | System UI | 600 | 0.9rem |

### Component Patterns

**Buttons**:
```css
/* Primary Button */
.btn {
  background: #f6dd0d;
  color: #3b3b3b;
  border-radius: 3px;
  padding: 9px 18px;
  font-weight: 600;
}

/* Primary Button Hover */
.btn:hover {
  background: #686fb4;
  color: #fff;
}
```

**Cards**:
```css
.card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  padding: 18px;
}
```

### Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile | < 720px | Phones |
| Tablet | 720px - 960px | Tablets |
| Desktop | > 960px | Desktops |

### Logo Usage

| Context | Logo File | Height |
|---------|-----------|--------|
| Light Background | `Synergy-logo-sugar-web-black.png` | 54-66px |
| Dark Background | `Synergy-logo-sugar-web-white.png` | 54px |
| Scrolled Header | Black logo | 32px |
| Footer | White logo | 54px |

---

## 🔌 Backend API

### Base URL

```
Development: http://localhost:8001/api
Production: https://[domain]/api
```

### Endpoints

#### Health Check

```http
GET /api/
```

**Response**:
```json
{
  "message": "Hello World"
}
```

#### Status Checks

```http
POST /api/status
```

**Request Body**:
```json
{
  "client_name": "string"
}
```

**Response**:
```json
{
  "id": "uuid",
  "client_name": "string",
  "timestamp": "ISO 8601 datetime"
}
```

```http
GET /api/status
```

**Response**:
```json
[
  {
    "id": "uuid",
    "client_name": "string",
    "timestamp": "ISO 8601 datetime"
  }
]
```

### Models

```python
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str
```

---

## 💾 Database Schema

### MongoDB Collections

#### `status_checks`

| Field | Type | Description |
|-------|------|-------------|
| `id` | String (UUID) | Unique identifier |
| `client_name` | String | Client name |
| `timestamp` | String (ISO) | Creation timestamp |

### Connection

```python
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
```

---

## ⚙️ Environment Configuration

### Backend (`/app/backend/.env`)

```env
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"
```

| Variable | Description |
|----------|-------------|
| `MONGO_URL` | MongoDB connection string |
| `DB_NAME` | Database name |
| `CORS_ORIGINS` | Allowed CORS origins |

### Frontend (`/app/frontend/.env`)

```env
REACT_APP_BACKEND_URL=https://[domain]
WDS_SOCKET_PORT=443
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

| Variable | Description |
|----------|-------------|
| `REACT_APP_BACKEND_URL` | Backend API URL |
| `WDS_SOCKET_PORT` | WebSocket port for dev server |

---

## 🚀 Deployment

### Service Management

```bash
# Restart all services
sudo supervisorctl restart all

# Restart frontend only
sudo supervisorctl restart frontend

# Restart backend only
sudo supervisorctl restart backend
```

### Port Configuration

| Service | Internal Port | Notes |
|---------|---------------|-------|
| Frontend | 3000 | React development server |
| Backend | 8001 | FastAPI/Uvicorn |
| MongoDB | 27017 | Database |

### Build Commands

```bash
# Frontend
cd frontend
yarn install
yarn build

# Backend
cd backend
pip install -r requirements.txt
```

---

## 👨‍💻 Development Guide

### Getting Started

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   # Frontend
   cd frontend && yarn install
   
   # Backend
   cd backend && pip install -r requirements.txt
   ```

3. **Set up environment variables** (copy from examples above)

4. **Start development servers**:
   ```bash
   sudo supervisorctl restart all
   ```

### Code Standards

**Frontend**:
- Use functional components with hooks
- Follow Tailwind CSS conventions
- Keep components small and reusable
- Use TypeScript types where possible

**Backend**:
- Follow PEP 8 style guide
- Use async/await for database operations
- Validate all inputs with Pydantic
- Use UUIDs instead of MongoDB ObjectIDs

### Testing

```bash
# Backend tests
cd backend && pytest

# Frontend linting
cd frontend && yarn lint
```

### Adding New Pages

1. Create HTML file in `/frontend/public/`
2. Follow existing design system
3. Include header and footer
4. Update navigation links
5. Add favicon references
6. Test responsive design

---

## 📞 Social Media & Contact

| Platform | Handle |
|----------|--------|
| Facebook | [@synergysugar](http://facebook.com/synergysugar) |
| Twitter/X | [@synergysugar](http://twitter.com/synergysugar) |
| YouTube | [@synergysugar](http://youtube.com/@synergysugar) |
| Instagram | [@synergysugar](http://instagram.com/synergysugar) |
| TikTok | [@synergysugar](http://tiktok.com/@synergysugar) |

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Initial | Core landing page, pricing, help |
| 1.1 | - | Added appointment booking system |
| 1.2 | - | Added purchase flow (buy pages) |
| 1.3 | - | Integrated community forum |
| 1.4 | - | Added legal pages |
| 1.5 | - | Currency changed to KSH |

---

*Documentation created for Synergy Bravo ERP - Kenya's Sugar Industry Digital Transformation Partner*
 