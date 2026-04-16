import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-6">
            <h3 className="text-brand-secondary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Thank you for your attention.
            </h3>
            <h2 className="text-4xl md:text-7xl font-serif tracking-tighter leading-none">
              Cosy is landing.
            </h2>
            <p className="text-white/60 italic font-light text-sm md:text-lg max-w-md">
              We aspire to create a cosy island for your feet.
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-white/40 font-bold uppercase text-[10px] md:text-xs tracking-widest">
              <a 
                href="https://cosyisland.co" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-secondary transition-colors flex items-center gap-2"
              >
                <i className="fas fa-globe"></i> cosyisland.co
              </a>
              <a 
                href="https://instagram.com/cosyisland_official" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-secondary transition-colors flex items-center gap-2"
              >
                <i className="fab fa-instagram"></i> @COSYISLAND_OFFICIAL
              </a>
              <a 
                href="http://www.youtube.com/@cosyisland_official" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-secondary transition-colors flex items-center gap-2"
              >
                <i className="fab fa-youtube"></i> @COSYISLAND_OFFICIAL
              </a>
            </div>
            <p className="text-white/20 text-[10px] uppercase tracking-widest">
              © 2026 COSY ISLAND Official
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
