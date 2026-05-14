import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop', size: 'large' },
    { url: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070&auto=format&fit=crop', size: 'small' },
    { url: 'https://images.unsplash.com/photo-1558239325-1a3b04c8f553?q=80&w=2070&auto=format&fit=crop', size: 'small' },
    { url: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop', size: 'medium' },
    { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', size: 'medium' },
    { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop', size: 'small' },
    { url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop', size: 'large' },
    { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop', size: 'medium' }
  ];

  const getGridSpan = (size) => {
    switch(size) {
      case 'large': return 'span 2 / span 2';
      case 'medium': return 'span 1 / span 2';
      default: return 'span 1 / span 1';
    }
  };

  return (
    <div className="section container" style={{ marginTop: '100px' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Visual <span className="gradient-text">Excellence</span></h1>
        <p style={{ maxWidth: '600px', opacity: 0.7, marginBottom: '80px' }}>
          Capturing the scale and precision of our global trade operations.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gridAutoRows: '250px',
          gap: '20px'
        }}>
          {images.map((img, i) => (
            <motion.div 
              key={i}
              className="glass-card"
              whileHover={{ scale: 1.02 }}
              style={{ 
                gridArea: getGridSpan(img.size),
                padding: '0',
                position: 'relative'
              }}
            >
              <img src={img.url} alt="Gallery" className="img-premium" />
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6))',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '20px',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }} className="gallery-overlay">
                <span style={{ color: 'white', fontWeight: '600' }}>Operational Milestone {i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .glass-card:hover .gallery-overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
