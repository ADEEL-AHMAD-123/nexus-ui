import './Header.scss';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services, industries } from './navData';
import PrimaryButton from '../../common/PrimaryButton';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const dropdownRef = useRef(null);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMegaMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">NEXUS</Link>
        </div>

        <div className={`nav-wrapper ${mobileMenuOpen ? 'mobile-active' : ''}`}>

          <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            <div className="dropdown-container" ref={dropdownRef}>
              <div className="dropdown" onClick={() => setShowMegaMenu(prev => !prev)}>
                <span className="dropdown-toggle">
                  Services
                  <span className="toggle-icon">
                    {showMegaMenu ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </span>
              </div>

              {showMegaMenu && (
                <div className="mega-menu">
                  <div className="mega-menu-inner">
                    <div className="columns">
                      <div className="services">
                        {services.map((service) => (
                          <Link
                            to={`/${service.name.toLowerCase().replace(/\s+/g, '-')}-service`}
                            key={service.name}
                            className="service-item"
                          >
                            <div className="icon">{service.icon}</div>
                            <div className="text">
                              <h4>{service.name}</h4>
                              <p>{service.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="industries column">
                        <h4>Industries</h4>
                        {industries.map((ind) => (
                          <span key={ind}>{ind}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/case-studies">Case Studies</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <div className="social-icons">
              <a href="www.facebook.com"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </nav>
        </div>

        <PrimaryButton className="header-btn" />


        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
