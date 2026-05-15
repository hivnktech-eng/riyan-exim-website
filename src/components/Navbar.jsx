import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdDarkMode, MdLightMode, MdLanguage } from 'react-icons/md';
import logo from '../assets/logo.png';

const Navbar = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className={`nav-glass ${isScrolled ? 'scrolled' : ''}`} style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      zIndex: 1000, 
      height: isScrolled ? '70px' : '90px',
      display: 'flex',
      alignItems: 'center',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src={logo} alt="Riyan Exim Logo" style={{ height: '45px', width: 'auto' }} />
          <h1 style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '3px', margin: 0 }}>
            RIYAN <span className="gradient-text">EXIM</span>
          </h1>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                style={{ 
                  textDecoration: 'none', 
                  color: 'inherit', 
                  fontSize: '0.9rem', 
                  fontWeight: '600', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px',
                  opacity: location.pathname === link.path ? 1 : 0.7,
                  transition: '0.3s'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '1px solid var(--glass-border)', paddingLeft: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}>
              <MdLanguage size={18} />
              <select 
                onChange={(e) => changeLanguage(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', fontWeight: '600', outline: 'none', fontSize: '0.8rem' }}
              >
                <option value="en">EN</option>
                <option value="hi">हि</option>
                <option value="gu">ગુ</option>
              </select>
            </div>
            
            <button 
              onClick={toggleTheme} 
              className="btn-glass" 
              style={{ padding: '8px', borderRadius: '12px', border: 'none', cursor: 'pointer', display: 'flex' }}
            >
              {theme === 'light' ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link:hover { opacity: 1 !important; color: var(--secondary); }
        .nav-link.active { color: var(--secondary) !important; position: relative; }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--secondary);
        }
        select option { background: var(--bg-main); color: var(--text-main); }
      `}</style>
    </nav>
  );
};

export default Navbar;
