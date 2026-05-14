import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';
import InteractiveMap from '../components/InteractiveMap';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="section container" style={{ marginTop: '100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span style={{ color: 'var(--secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem' }}>
          Connect
        </span>
        <h1 className="hero-title">Get in <span className="gradient-text">Touch</span></h1>
        <p style={{ opacity: 0.7, maxWidth: '600px', margin: '20px auto' }}>
          Have a question about our global operations or interested in a partnership? Our team is ready to assist you.
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card" style={{ padding: '50px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '40px' }}>Send a Message</h3>
            <form style={{ display: 'grid', gap: '25px' }}>
              <div className="form-group">
                <input type="text" placeholder="Full Name" className="premium-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Business Email" className="premium-input" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Company Name" className="premium-input" />
              </div>
              <div className="form-group">
                <textarea rows="5" placeholder="Tell us about your requirements..." className="premium-input"></textarea>
              </div>
              <button className="btn btn-primary" type="button" style={{ width: '100%', justifyContent: 'center' }}>
                Send Inquiry <MdSend />
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'grid', gap: '30px' }}>
             <div className="glass" style={{ padding: '30px', borderRadius: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'var(--secondary)', padding: '15px', borderRadius: '15px', color: 'white' }}><MdLocationOn size={24}/></div>
                <div>
                   <p style={{ fontSize: '0.8rem', opacity: 0.6, fontWeight: '600', textTransform: 'uppercase' }}>Our Headquarters</p>
                   <p style={{ fontWeight: '500' }}>402, Trade Wings Tower, SG Highway, Ahmedabad, India</p>
                </div>
             </div>
             <div className="glass" style={{ padding: '30px', borderRadius: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'var(--secondary)', padding: '15px', borderRadius: '15px', color: 'white' }}><MdPhone size={24}/></div>
                <div>
                   <p style={{ fontSize: '0.8rem', opacity: 0.6, fontWeight: '600', textTransform: 'uppercase' }}>Call Us</p>
                   <p style={{ fontWeight: '500' }}>+91 79 4000 5000 | +91 98980 98980</p>
                </div>
             </div>
             <div className="glass" style={{ padding: '30px', borderRadius: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'var(--secondary)', padding: '15px', borderRadius: '15px', color: 'white' }}><MdEmail size={24}/></div>
                <div>
                   <p style={{ fontSize: '0.8rem', opacity: 0.6, fontWeight: '600', textTransform: 'uppercase' }}>Email Support</p>
                   <p style={{ fontWeight: '500' }}>inquiry@riyanexim.com | ops@riyanexim.com</p>
                </div>
             </div>
          </div>
          
          <div style={{ marginTop: '40px' }}>
            <InteractiveMap />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .premium-input {
          width: 100%;
          padding: 15px 20px;
          border-radius: 12px;
          border: 1px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-main);
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
        }
        .premium-input:focus {
          outline: none;
          border-color: var(--secondary);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Contact;
