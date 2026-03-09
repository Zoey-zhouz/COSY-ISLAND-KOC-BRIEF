import React from 'react';
import { HookItem } from '../../types';

interface SectionHooksProps {
  hooks: HookItem[];
  labels: { [key: string]: string };
  isOnboarding?: boolean;
  onBack: () => void;
  onNext: () => void;
}

const SectionHooks: React.FC<SectionHooksProps> = ({ hooks, labels, isOnboarding, onBack, onNext }) => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-20 animate-slide-up">
      <div className="flex justify-between items-center mb-12 md:mb-16">
        <button onClick={onBack} className="text-brand-primary/50 hover:text-brand-primary font-bold text-[10px] md:text-[11px] tracking-widest transition-all uppercase">
          <i className="fas fa-arrow-left mr-2"></i> {labels.home}
        </button>
      </div>

      <div className="mb-12 md:mb-20 max-w-5xl">
        <p className="text-brand-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">In this section: Attention-grabbing hooks to start your videos effectively.</p>
        <h1 className="text-4xl md:text-8xl font-serif text-brand-primary mb-8 md:mb-10 tracking-tighter leading-tight">Hook Introduction</h1>
        <div className="space-y-8 text-slate-600 text-lg md:text-xl font-light leading-relaxed">
          <p className="italic">
            A hook is used in the first 3-5 seconds of your video to grab and retain viewer attention, signaling to the platform’s algorithm that your content is high quality. A strong hook is crucial for performance.
          </p>
          <p className="font-bold text-brand-primary uppercase tracking-widest text-xs">
            The hook is mainly composed of four types: Music; Title; Creative, Hype Energy
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="space-y-6 p-8 bg-brand-beige/20 border border-brand-primary/5">
          <h3 className="text-2xl font-serif text-brand-primary">Hook-Music</h3>
          <p className="text-slate-600 font-light italic">
            Using popular music helps align your video with platform algorithms, increasing its chances of being recommended to a wider audience.
          </p>
          <p className="text-slate-600 font-light italic">
            Beat-synced videos with house music or disco music (BPM 115-135) are always welcomed by the audience.
          </p>
        </div>

        <div className="space-y-6 p-8 bg-brand-beige/20 border border-brand-primary/5">
          <h3 className="text-2xl font-serif text-brand-primary">Hook-Title</h3>
          <p className="text-slate-600 font-light italic">
            Videos with interesting titles can arouse the curiosity of viewers. When viewers read the title, they will stay on the page, thus greatly increasing the 3-second completion rate of the video.
          </p>
          <div className="space-y-4 pt-4 border-t border-brand-primary/10">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-secondary">For example:</p>
            <ul className="space-y-3 text-sm italic text-slate-500">
              <li>• <span className="font-bold text-brand-primary">Asking questions:</span> Why women always have to choose between beauty or comfort?</li>
              <li>• <span className="font-bold text-brand-primary">Raising common dilemmas:</span> Cute heels that kill my feet? Been there, done that.</li>
              <li>• <span className="font-bold text-brand-primary">Opening with a story:</span> Last week, I walked 8 hours in these heels… and didn’t feel a thing.</li>
              <li>• <span className="font-bold text-brand-primary">Surprising tone:</span> Warning: You might run in these heels. Comfort is real.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6 p-8 bg-brand-beige/20 border border-brand-primary/5">
          <h3 className="text-2xl font-serif text-brand-primary">Hook-Creative</h3>
          <p className="text-slate-600 font-light italic">
            Trending creative Editing, Challenge or Story make your video more interesting.
          </p>
          <div className="space-y-4 pt-4 border-t border-brand-primary/10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-1">Visual impact</p>
              <p className="text-sm text-slate-500 italic">Unfold selling points with visual impact to capture audience’s attention.</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-1">Entry point</p>
              <p className="text-sm text-slate-500 italic">Identity-Based Hooks: Build Connection Through Real Roles.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-8 bg-brand-beige/20 border border-brand-primary/5">
          <h3 className="text-2xl font-serif text-brand-primary">Bring it into real life</h3>
          <p className="text-slate-600 font-light italic">
            Showing the product in real-life situations makes it easier for the audience to relate and connect emotionally.
          </p>
          <div className="aspect-[9/16] bg-brand-bg flex items-center justify-center border border-brand-primary/5 mt-4">
             <i className="fas fa-walking text-4xl text-brand-primary/10"></i>
          </div>
        </div>
      </div>

      {/* Grid unified with Product Selection style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-16 md:mb-24">
        {hooks.map((hook, idx) => (
          <div key={idx} className="card-standard group">
            <div className="card-image-wrapper">
              <img src={hook.imageUrl} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" alt={hook.title} />
              <div className="absolute top-4 md:top-6 right-4 md:right-6">
                <span className="w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur rounded-none flex items-center justify-center font-serif text-lg md:text-xl text-brand-primary shadow-sm">
                  {idx + 1}
                </span>
              </div>
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] text-white bg-brand-primary/70 px-3 md:px-4 py-1.5 md:py-2 rounded-none backdrop-blur-md shadow-xl">by {hook.author}</span>
              </div>
            </div>
            <div className="p-6 md:p-8 flex-grow">
              <h3 className="text-xl md:text-2xl font-serif text-brand-primary mb-3 md:mb-4 leading-tight tracking-tight border-b border-brand-primary/5 pb-3 md:pb-4 min-h-[3rem] md:min-h-[4rem]">{hook.title}</h3>
              <p className="text-slate-500 text-sm md:text-base font-light italic leading-relaxed">"{hook.description}"</p>
            </div>
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

export default SectionHooks;