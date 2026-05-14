import React from 'react';
import { motion } from 'framer-motion';
import { MdArrowForward } from 'react-icons/md';

const Portfolio = () => {
  const projects = [
    { 
      title: 'Global Supply Chain Optimization', 
      category: 'Logistics', 
      img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop',
      desc: 'Streamlining cross-border trade for manufacturing giants across Asia and Europe.' 
    },
    { 
      title: 'Premium Raw Material Sourcing', 
      category: 'Raw Materials', 
      img: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070&auto=format&fit=crop',
      desc: 'Exclusive sourcing of high-grade minerals and ores for industrial application.' 
    },
    { 
      title: 'Sustainable Textile Export', 
      category: 'Textiles', 
      img: 'https://images.unsplash.com/photo-1558239325-1a3b04c8f553?q=80&w=2070&auto=format&fit=crop',
      desc: 'Promoting eco-friendly fabric trade with top fashion houses in North America.' 
    },
    { 
      title: 'Advanced Agri-Tech Solutions', 
      category: 'Agriculture', 
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
      desc: 'Modernizing agricultural commodity trade through tech-enabled distribution.' 
    },
    { 
      title: 'Heavy Machinery Distribution', 
      category: 'Industrial', 
      img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop',
      desc: 'Facilitating the export of precision engineering equipment for construction projects.' 
    },
    { 
      title: 'Petrochemical Trade Network', 
      category: 'Chemicals', 
      img: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop',
      desc: 'Managing secure and efficient distribution of chemical raw materials globally.' 
    }
  ];

  return (
    <div className="section container" style={{ marginTop: '100px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span style={{ color: 'var(--secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem' }}>
          Our Work
        </span>
        <h1 className="hero-title" style={{ marginTop: '1rem' }}>The <span className="gradient-text">Portfolio</span></h1>
        <p style={{ maxWidth: '600px', opacity: 0.7, fontSize: '1.1rem', marginBottom: '80px' }}>
          Explore our diverse range of successful projects spanning multiple industries and international borders.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {projects.map((item, i) => (
            <motion.div 
              key={i}
              className="glass-card"
              whileHover={{ y: -10 }}
              style={{ padding: '0' }}
            >
              <div style={{ height: '300px', overflow: 'hidden' }}>
                <img src={item.img} alt={item.title} className="img-premium" />
              </div>
              <div style={{ padding: '40px' }}>
                <span style={{ color: 'var(--secondary)', fontWeight: '600', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px' }}>{item.category}</span>
                <h3 style={{ fontSize: '1.4rem', margin: '15px 0' }}>{item.title}</h3>
                <p style={{ opacity: 0.65, fontSize: '0.95rem' }}>{item.desc}</p>
                <div style={{ marginTop: '30px', borderTop: '1px solid var(--glass-border)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button style={{ background: 'transparent', border: 'none', color: 'var(--secondary)', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    View Case Study <MdArrowForward size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
