import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/Logo-transparent.png";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  
  const isActive = (path) => (location.pathname === path ? "active" : "");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Scroll locking logic
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    
    // Cleanup on unmount
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  return (

    <header className="glass">
      <nav className="container navbar">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img src={logo} alt="fluei.xia logo" className="logo-img" />
          <span className="brand-name">@fluei.xia</span>
        </Link>

        {/* Hamburger Menu Toggle */}
        <button 
          className={`nav-toggle ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="hamburger"></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
          <li>
            <Link to="/" className={isActive("/")} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" className={isActive("/gallery")} onClick={closeMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/patterns" className={isActive("/patterns")} onClick={closeMenu}>
              Patterns
            </Link>
          </li>
        </ul>

        <div className="nav-badge desktop-only">
          <span>121%</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
