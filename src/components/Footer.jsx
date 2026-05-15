import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="glass" style={{ padding: '60px 0 20px', marginTop: '100px', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <img src={logo} alt="Riyan Exim Logo" style={{ height: '40px', width: 'auto' }} />
              <h3 style={{ margin: 0 }}>RIYAN <span className="gradient-text">EXIM</span></h3>
            </div>
            <p style={{ opacity: 0.8 }}>
              Leading the way in global trade and logistics solutions. Quality, Trust, and Excellence.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul style={{ listStyle: 'none', marginTop: '20px', display: 'grid', gap: '10px' }}>
              <li>{t('nav.home')}</li>
              <li>{t('nav.about')}</li>
              <li>{t('nav.portfolio')}</li>
              <li>{t('nav.contact')}</li>
            </ul>
          </div>
          <div>
            <h4>Social Media</h4>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <FaFacebook size={24} style={{ cursor: 'pointer' }} />
              <FaTwitter size={24} style={{ cursor: 'pointer' }} />
              <FaLinkedin size={24} style={{ cursor: 'pointer' }} />
              <FaInstagram size={24} style={{ cursor: 'pointer' }} />
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '60px', borderTop: '1px solid var(--glass-border)', paddingTop: '20px', opacity: 0.6 }}>
          <p>&copy; {new Date().getFullYear()} Riyan Exim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
