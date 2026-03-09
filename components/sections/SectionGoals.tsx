
import React from 'react';

interface GoalData {
  intro: string;
  flow: { num: string; title: string; desc: string }[];
  requirements: { reel: string[]; carousel: string[] };
}

const SectionGoals: React.FC<{ data: GoalData; onBack: () => void; onNext: () => void }> = ({ data, onBack, onNext }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 animate-slide-up">
      <div className="flex justify-between items-center mb-20">
        <button onClick={onBack} className="text-brand-primary/50 hover:text-brand-primary font-bold uppercase text-[10px] tracking-widest transition-all">
            <i className="fas fa-arrow-left mr-2"></i> Home
        </button>
        <button onClick={onNext} className="bg-brand-primary text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-secondary transition-all shadow-xl">
            Product Choice <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-16">
          <div>
            <h1 className="text-6xl md:text-8xl font-title text-brand-primary mb-12 tracking-tighter">Collab Goals</h1>
            <div className="bg-brand-secondary/10 border-l-4 border-brand-secondary p-8 mb-12">
              <p className="text-brand-primary font-bold italic leading-relaxed">
                "{data.intro}"
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {data.flow.map((item) => (
              <FlowItem key={item.num} num={item.num} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <section className="bg-white p-12 rounded-[3rem] shadow-xl border border-brand-primary/5">
            <h3 className="text-2xl font-title text-brand-primary mb-10 flex items-center gap-4">
              <i className="fas fa-camera text-brand-secondary"></i> Content Requirements
            </h3>
            <div className="grid grid-cols-1 gap-10">
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-brand-secondary">Reel Post</h4>
                <ul className="space-y-4 text-slate-500 text-sm italic">
                  {data.requirements.reel.map((r, i) => (
                    <li key={i}>• {r}</li>
                  ))}
                </ul>
              </div>
              <div className="h-px bg-brand-primary/5"></div>
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-brand-secondary">Carousel Post</h4>
                <ul className="space-y-4 text-slate-500 text-sm italic">
                  {data.requirements.carousel.map((r, i) => (
                    <li key={i}>• {r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-brand-primary text-white p-12 rounded-[3rem] shadow-2xl">
            <h3 className="text-2xl font-title mb-8 text-brand-secondary">Ad Placement</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
                <p className="text-[10px] font-black uppercase tracking-widest mb-2">Short Caption</p>
                <p className="text-white font-bold">#ad at the END</p>
              </div>
              <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
                <p className="text-[10px] font-black uppercase tracking-widest mb-2">Long Caption</p>
                <p className="text-white font-bold">#ad at the BEGINNING</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlowItem: React.FC<{ num: string; title: string; desc: string }> = ({ num, title, desc }) => (
  <div className="flex gap-10 group">
    <div className="flex-shrink-0 w-16 h-16 bg-white border border-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center font-title text-2xl group-hover:bg-brand-primary group-hover:text-white transition-all">
      {num}
    </div>
    <div className="pt-2">
      <h4 className="text-2xl font-title text-brand-primary mb-2 tracking-tighter">{title}</h4>
      <p className="text-slate-500 leading-relaxed font-light italic">{desc}</p>
    </div>
  </div>
);

export default SectionGoals;
