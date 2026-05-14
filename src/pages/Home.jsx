import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MdArrowForward, MdSecurity, MdPublic, MdSpeed, MdTrendingUp, MdOutlineAutoGraph, MdOutlineVerifiedUser, MdOutlineSupportAgent } from 'react-icons/md';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      {/* Hero Section - More Minimal & Impactful */}
      <section className="hero" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span style={{ color: 'var(--secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '5px', fontSize: '0.8rem', display: 'block', marginBottom: '2rem' }}>
              International Trade Redefined
            </span>
            <h1 className="hero-title" style={{ maxWidth: '1000px', margin: '0 auto 2rem' }}>
              Bridging Global <span className="gradient-text">Markets</span> with Unwavering <span className="gradient-text">Trust</span>.
            </h1>
            <p style={{ fontSize: '1.4rem', marginBottom: '3.5rem', opacity: 0.6, maxWidth: '700px', margin: '0 auto 4rem', fontWeight: '300' }}>
              Riyan Exim facilitates seamless export and import solutions, connecting quality manufacturers to global demand.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <button className="btn btn-primary" style={{ padding: '20px 45px' }}>
                Explore Services <MdArrowForward size={18} />
              </button>
              <button className="btn btn-outline" style={{ padding: '20px 45px' }}>
                Our Story
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle Background Element */}
        <div style={{ position: 'absolute', bottom: '5%', opacity: 0.1, fontSize: '12rem', fontWeight: '900', color: 'var(--secondary)', zIndex: -1, pointerEvents: 'none' }}>
           RIYAN EXIM
        </div>
      </section>

      {/* Stats Section - Clean & Minimal */}
      <section style={{ padding: '80px 0', borderY: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px' }}>
             {[
              { val: '500+', label: 'Global Clients' },
              { val: '45+', label: 'Countries Covered' },
              { val: '12k+', label: 'Successful Shipments' },
              { val: '99%', label: 'Retention Rate' }
             ].map((stat, i) => (
               <div key={i} style={{ textAlign: 'center' }}>
                 <h2 style={{ fontSize: '3.5rem', fontWeight: '800' }} className="gradient-text">{stat.val}</h2>
                 <p style={{ opacity: 0.5, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.7rem', marginTop: '10px' }}>{stat.label}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Minimal Logo Cloud */}
      <section className="section container">
         <p style={{ textAlign: 'center', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', marginBottom: '40px' }}>Trusted By Industry Leaders</p>
         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '80px', opacity: 0.3, filter: 'grayscale(1)' }}>
            {['GLOBAL LOGISTICS', 'OCEAN TRADE', 'SILK ROAD CO.', 'EURO EXIM', 'INDUS TECH'].map((partner, i) => (
              <h3 key={i} style={{ fontSize: '1.2rem', fontWeight: '800' }}>{partner}</h3>
            ))}
         </div>
      </section>

      {/* Process Section - Numerical & Minimal */}
      <section className="section" style={{ background: 'rgba(59, 130, 246, 0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>How We <span className="gradient-text">Operate</span></h2>
            <p style={{ opacity: 0.6 }}>A transparent, four-step process to ensure global trade excellence.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { step: '01', title: 'Strategic Sourcing', desc: 'We identify and vet top-tier manufacturers globally to ensure product excellence.' },
              { step: '02', title: 'Quality Assurance', desc: 'Rigorous multi-point inspections and certifications before any shipment leaves.' },
              { step: '03', title: 'Smart Logistics', desc: 'Optimized routing and real-time tracking for efficient global distribution.' },
              { step: '04', title: 'Final Delivery', desc: 'Seamless last-mile delivery and comprehensive documentation support.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                style={{ padding: '40px', borderLeft: '1px solid var(--glass-border)' }}
              >
                <h1 style={{ fontSize: '4rem', opacity: 0.1, marginBottom: '-20px' }}>{item.step}</h1>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', position: 'relative', zIndex: 1 }}>{item.title}</h3>
                <p style={{ opacity: 0.6, lineHeight: '1.8' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Elegant Glass Quotes */}
      <section className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          {[
            { quote: "Riyan Exim has been instrumental in our European expansion. Their reliability is unmatched.", author: "Marcus Thorne", role: "CEO, Thorne Industries" },
            { quote: "The transparency they provide in the supply chain is a breath of fresh air in this industry.", author: "Ananya Sharma", role: "Sourcing Head, Veda Textiles" }
          ].map((test, i) => (
            <div key={i} className="glass-card" style={{ padding: '60px' }}>
               <p style={{ fontSize: '1.4rem', fontWeight: '300', fontStyle: 'italic', marginBottom: '30px', lineHeight: '1.6' }}>"{test.quote}"</p>
               <div>
                  <h4 style={{ fontSize: '1.1rem' }}>{test.author}</h4>
                  <p style={{ opacity: 0.5, fontSize: '0.85rem' }}>{test.role}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us - Refined Icons */}
      <section className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {[
            { icon: <MdOutlineAutoGraph size={30} />, title: 'Scalable Solutions', desc: 'Whether you are a startup or a conglomerate, we scale our trade solutions to fit your growth.' },
            { icon: <MdOutlineVerifiedUser size={30} />, title: 'Legal Compliance', desc: 'We handle all international trade regulations and paperwork so you don\'t have to.' },
            { icon: <MdOutlineSupportAgent size={30} />, title: '24/7 Support', desc: 'Our global offices ensure that someone is always available to assist with your shipment.' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--secondary)', background: 'rgba(59, 130, 246, 0.1)', padding: '15px', borderRadius: '12px' }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ opacity: 0.6, fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section container">
         <div className="glass-card" style={{ padding: '100px', textAlign: 'center', background: 'linear-gradient(135deg, var(--secondary), var(--primary))', color: 'white', border: 'none' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '30px' }}>Ready to Go Global?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 40px', opacity: 0.8, fontSize: '1.2rem' }}>
              Join hundreds of businesses that trust Riyan Exim for their international trade requirements.
            </p>
            <button className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '20px 50px' }}>
              Start Your Journey <MdArrowForward />
            </button>
         </div>
      </section>
    </div>
  );
};

export default Home;
