import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MdVerified, MdLanguage, MdPublic, MdSecurity } from 'react-icons/md';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="section container" style={{ marginTop: '100px' }}>
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span style={{ color: 'var(--secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem' }}>
          Our Story
        </span>
        <h1 className="hero-title" style={{ marginTop: '1rem' }}>Bridging <span className="gradient-text">Continents</span></h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', marginTop: '60px' }}>
          <div>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', opacity: 0.9, fontWeight: '500' }}>
              Riyan Exim was founded on a singular vision: to redefine international trade through transparency, technology, and trust.
            </p>
            <p style={{ marginTop: '30px', lineHeight: '1.8', opacity: 0.7 }}>
              Since our inception in 2015, we have grown from a local trading house in Gujarat to a globally recognized name in the export-import industry. We specialize in the movement of high-value commodities, textiles, and industrial raw materials, ensuring that every shipment meets the highest international standards.
            </p>
            <div style={{ marginTop: '40px', display: 'flex', gap: '30px' }}>
               <div style={{ textAlign: 'center' }}>
                  <h2 className="gradient-text" style={{ fontSize: '2.5rem' }}>10+</h2>
                  <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Years Experience</p>
               </div>
               <div style={{ textAlign: 'center' }}>
                  <h2 className="gradient-text" style={{ fontSize: '2.5rem' }}>50+</h2>
                  <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Countries</p>
               </div>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '0', height: '500px' }}>
             <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Corporate" 
              className="img-premium"
            />
          </div>
        </div>
      </motion.div>

      {/* Values Grid */}
      <div style={{ marginTop: '120px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        {[
          { icon: <MdVerified />, title: 'Uncompromising Quality', desc: 'We never settle for second best. Every product is rigorously tested.' },
          { icon: <MdPublic />, title: 'Global Ethics', desc: 'Fair trade and sustainable practices are at the heart of our operations.' },
          { icon: <MdLanguage />, title: 'Cultural Synergy', desc: 'Our multi-lingual team bridges cultural gaps for smoother negotiations.' },
          { icon: <MdSecurity />, title: 'Secure Logistics', desc: 'End-to-end security for your cargo, from warehouse to final destination.' }
        ].map((value, i) => (
          <div key={i} className="glass" style={{ padding: '40px', borderRadius: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '20px' }}>{value.icon}</div>
            <h3 style={{ marginBottom: '15px' }}>{value.title}</h3>
            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{value.desc}</p>
          </div>
        ))}
      </div>

      {/* Founder Message */}
      <section className="section" style={{ marginTop: '80px' }}>
         <div className="glass-card" style={{ display: 'flex', alignItems: 'center', padding: '60px', gap: '60px' }}>
            <div style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '4px solid var(--secondary)' }}>
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Founder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
               <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>"Our mission is to make global trade as simple as local business."</h2>
               <p style={{ opacity: 0.8, fontSize: '1.1rem', fontStyle: 'italic' }}>— Founder & CEO, Riyan Exim</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
