import React, { useState } from 'react';
import { Icons } from '../../src/assets/icons';

interface SectionMediaProps {
  data: {
    fonts: string;
    logo: string;
    colorGuide: string;
    hookTutorial: string;
  };
  labels: { [key: string]: string };
  isOnboarding?: boolean;
  onBack: () => void;
  onNext: () => void;
  updates?: { date: string; content: string }[];
}

const SectionMedia: React.FC<SectionMediaProps> = ({ data, labels, isOnboarding, onBack, onNext, updates }) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const sections = [
    { title: "Fonts", link: data.fonts, icon: 'fa-font', desc: 'Official brand typography' },
    { title: "Logo", link: data.logo, icon: 'fa-vector-square', desc: 'Primary and secondary logos' },
    { title: "Color Guide", link: data.colorGuide, icon: 'fa-palette', desc: 'Brand color palette & usage' },
    { title: "Hook Tutorial", link: data.hookTutorial, icon: 'fa-chalkboard-teacher', desc: 'How to create engaging hooks' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 animate-slide-up">
      <div className="mb-12 md:mb-16">
        <button onClick={onBack} className="text-brand-primary/50 hover:text-brand-primary font-bold uppercase text-[10px] md:text-[11px] tracking-widest transition-all">
          <Icons.ChevronDown className="rotate-90 mr-2" /> {labels.home}
        </button>
      </div>

      <div className="mb-16 md:mb-24">
        <p className="text-brand-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">In this section: Brand identity guidelines and creative assets.</p>
        <h1 className="text-4xl md:text-8xl font-serif text-brand-primary mb-8 tracking-tighter leading-tight md:leading-none">Brand VI</h1>
        <p className="text-xs text-brand-primary/60 mt-2">Here is the link to customer reviews: https://cosyisland.co/pages/reviews</p>
        
        {updates && updates.length > 0 && (
          <div className="mt-8 p-6 bg-brand-beige/30 border border-brand-primary/5 rounded-xl max-w-2xl">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-4 flex items-center gap-2">
              <i className="fas fa-history"></i> Update Log
            </h4>
            <div className="space-y-3">
              {updates.map((update, i) => (
                <div key={i} className="flex gap-4 text-xs">
                  <span className="text-brand-primary/40 font-mono">{update.date}</span>
                  <span className="text-slate-600 italic">{update.content}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="space-y-6 md:space-y-8 mb-16 md:mb-32 max-w-5xl mx-auto">
        <h4 className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-brand-secondary mb-8 md:mb-16">VI Assets</h4>
        {sections.map((section, idx) => (
          <div key={idx} className={`bg-brand-white rounded-[1rem] border transition-all ${activeIdx === idx ? 'border-brand-secondary shadow-2xl' : 'border-brand-primary/10 shadow-sm'}`}>
            <div 
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              className="p-6 md:p-12 flex items-center justify-between cursor-pointer"
            >
              <div className="flex gap-6 md:gap-12 items-center">
                <span className={`w-10 h-10 md:w-16 md:h-16 rounded-xl flex items-center justify-center font-serif text-xl md:text-3xl transition-all ${activeIdx === idx ? 'bg-brand-secondary text-white' : 'bg-brand-primary/5 text-brand-primary'}`}>
                  <i className={`fas ${section.icon}`}></i>
                </span>
                <div>
                  <h3 className="text-2xl md:text-4xl font-serif text-brand-primary tracking-tight mb-1 md:mb-2">{section.title}</h3>
                  <p className="text-slate-500 text-sm md:text-xl italic font-light">{section.desc}</p>
                </div>
              </div>
              <Icons.ChevronDown className={`text-brand-secondary text-xl md:text-2xl transition-all ${activeIdx === idx ? 'rotate-180' : ''}`} />
            </div>
            
            {activeIdx === idx && (
              <div className="p-6 md:p-12 animate-fade-in border-t border-brand-primary/5 flex justify-center">
                <button 
                  onClick={() => window.open(section.link, '_blank')}
                  className="bg-brand-primary text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-secondary transition-all flex items-center gap-3 shadow-xl"
                >
                  <i className="fas fa-download"></i>
                  Download {section.title} Assets
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-center mt-20">
        <button onClick={onNext} className="bg-brand-primary text-white px-16 py-6 rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-brand-secondary transition-all shadow-2xl">
          Next Step <i className="fas fa-arrow-right ml-3"></i>
        </button>
      </div>
    </div>
  );
};

export default SectionMedia;
