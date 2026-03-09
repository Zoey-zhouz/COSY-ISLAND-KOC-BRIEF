import React from 'react';

const SectionMultiColor: React.FC<{ onBack: () => void; onNext: () => void }> = ({ onBack, onNext }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 animate-slide-up">
      <div className="flex justify-between items-center mb-16">
        <button onClick={onBack} className="text-brand-muted hover:text-brand-primary font-bold uppercase text-[10px] tracking-widest transition-all">
          <i className="fas fa-arrow-left mr-2"></i> Home
        </button>
        <button onClick={onNext} className="bg-brand-primary text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-secondary transition-all">
          Shooting Guide <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-brand-secondary font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Special Video Format</h2>
          <h1 className="text-6xl md:text-8xl font-title text-brand-primary mb-10 leading-[1] tracking-tighter">Multi-Color <br/><span className="opacity-40">Showcase.</span></h1>
          <p className="text-slate-500 text-xl font-light leading-relaxed mb-12 italic">
            Focus on chromatic diversity. Showcase how a single silhouette transforms through different palettes (e.g., SerpentChic in Black, Coffee, and Burgundy).
          </p>
          
          <div className="grid grid-cols-1 gap-8">
            <ObjectiveItem icon="fa-palette" title="Chromatic Spectrum" desc="Present one model across its full color range smoothly." />
            <ObjectiveItem icon="fa-camera" title="Locked Angle" desc="Maintain consistent camera positioning for color-switching transitions." />
            <ObjectiveItem icon="fa-wand-magic-sparkles" title="Vibe Shift" desc="Highlight the emotional change each color brings to the outfit." />
          </div>
        </div>

        <div className="relative group">
          <div className="grid grid-cols-2 gap-6 p-4 bg-white rounded-[4rem] shadow-2xl border border-brand-primary/5">
            <div className="aspect-[3/4] overflow-hidden rounded-[3rem]">
              <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="B&W focus" />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-[3rem] mt-12">
              <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Color focus" />
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 bg-brand-primary p-12 rounded-[3rem] shadow-2xl text-white hidden lg:block border-[12px] border-[#F7F5F4]">
            <span className="text-4xl font-title block tracking-tighter">Spectrum</span>
            <span className="text-brand-secondary font-title text-xl block ml-8">Dynamics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ObjectiveItem: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-8 group">
    <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/5 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
      <i className={`fas ${icon}`}></i>
    </div>
    <div>
      <h4 className="text-lg font-bold uppercase tracking-widest text-brand-primary mb-1">{title}</h4>
      <p className="text-slate-500 font-light italic text-sm">{desc}</p>
    </div>
  </div>
);

export default SectionMultiColor;