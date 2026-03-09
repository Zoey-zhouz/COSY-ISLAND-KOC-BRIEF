import React from 'react';
import { Icons } from '../../src/assets/icons';

interface SectionBrandProps {
  labels: { [key: string]: string };
  isOnboarding?: boolean;
  onBack: () => void;
  onNext: () => void;
}

const SectionBrand: React.FC<SectionBrandProps> = ({ labels, isOnboarding, onBack, onNext }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 animate-slide-up">
      <div className="flex justify-between items-center mb-12 md:mb-16">
        <button onClick={onBack} className="flex items-center gap-2 text-brand-primary/40 hover:text-brand-primary font-bold transition-colors uppercase text-[10px] md:text-xs tracking-widest">
          <Icons.ChevronDown className="rotate-90" /> {labels.home}
        </button>
      </div>

      <div className="mb-16 md:mb-24">
        <p className="text-brand-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">In this section: Our heritage, mission, and the "Cosy Island" philosophy.</p>
        <h1 className="text-4xl md:text-8xl font-serif text-brand-primary mb-8 md:mb-10 tracking-tighter leading-tight">{labels.story}</h1>
      </div>

      <div className="space-y-24 md:space-y-40">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <h2 className="text-brand-secondary font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-[12px] mb-6 md:mb-10">Our Mission</h2>
            <h1 className="text-4xl md:text-8xl font-serif text-brand-primary mb-8 md:mb-12 leading-tight md:leading-[1] tracking-tighter">Style or Comfort? <br/><span className="italic opacity-30 font-light">Choose Both.</span></h1>
            <p className="text-slate-600 text-xl md:text-2xl font-light leading-relaxed mb-8 md:mb-12 italic">
              Why do fashionable shoes often come with uncomfortable wearing experiences? Women are often forced to choose between style and comfort.
            </p>
            <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
              This is the problem Cosy Island aims to solve. At Cosy Island, our mission is to create shoes that combine both, so you never have to compromise.
            </p>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative p-4 md:p-6 bg-brand-white rounded-none shadow-2xl border border-brand-primary/5">
                <img src="https://cosyisland.co/cdn/shop/files/Group_9089.png?v=1769741562&width=2000" className="rounded-none w-full" alt="Brand Mission" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        {/* Story Section - Centered */}
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12 py-12 md:py-20 bg-brand-beige/20 border-y border-brand-primary/5">
            <h2 className="text-brand-secondary font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-[12px]">Our Story</h2>
            <p className="text-slate-600 text-2xl md:text-5xl font-serif text-brand-primary tracking-tight leading-tight px-4">
                "We spent majority of times wearing shoes. Our name reflects our belief that the comfort of our shoes profoundly impacts daily life."
            </p>
            <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto px-4">
                At COSY ISLAND, we aspire to create a “cosy island” for your feet, ensuring they always feel comfortable wherever you go.
            </p>
        </div>

        {/* Final Branding & NEW Brand Iv Link Section */}
        <div className="text-center pb-20 md:pb-40">
          <p className="text-slate-600 text-xl md:text-3xl font-serif text-brand-primary mb-16 max-w-3xl mx-auto leading-relaxed tracking-tight">
            Thank you for taking the time to review our guidelines. We look forward to your elevated interpretation of our brand.
          </p>
          




          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-serif text-brand-primary tracking-tighter leading-none opacity-40 uppercase select-none">COSY ISLAND</h2>
            <p className="text-brand-secondary font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-[11px]">Effortless Comfort</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-center mt-20">
        <button onClick={onNext} className="bg-brand-primary text-white px-16 py-6 rounded-none text-xs font-black uppercase tracking-[0.4em] hover:bg-brand-secondary transition-all shadow-2xl border border-brand-primary/20">
          Back to Home <Icons.Home className="ml-3" />
        </button>
      </div>
    </div>
  );
};

export default SectionBrand;