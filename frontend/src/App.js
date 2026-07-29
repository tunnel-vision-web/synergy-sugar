import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
      window.location.replace("/landing_enhanced.html");
    }
  }, []);

  return null;
}

export default App;