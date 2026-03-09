import React from 'react';
import { Icons } from '../../src/assets/icons';

interface SectionTechProps {
  labels: { [key: string]: string };
  isOnboarding?: boolean;
  onBack: () => void;
  onNext: () => void;
}

const SectionTech: React.FC<SectionTechProps> = ({ labels, isOnboarding, onBack, onNext }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 animate-slide-up">
      <div className="flex justify-between items-center mb-12 md:mb-16">
        <button onClick={onBack} className="flex items-center gap-2 text-brand-primary/40 hover:text-brand-primary font-bold transition-colors uppercase text-[10px] md:text-xs tracking-widest">
          <Icons.ChevronDown className="rotate-90" /> {labels.home}
        </button>
      </div>

      <div className="mb-16 md:mb-24">
        <p className="text-brand-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">In this section: Our advanced techniques and sustainable materials.</p>
        <h1 className="text-4xl md:text-8xl font-serif text-brand-primary mb-8 md:mb-10 tracking-tighter leading-tight">Technology & Materials</h1>
        <p className="text-slate-500 text-lg md:text-xl italic font-light">
          Note: Not all listed technologies apply to every model. Please refer to the specific product landing pages for detailed information.
        </p>
      </div>

      <div className="space-y-24">
        {/* Arch Support Insoles */}
        <div className="bg-brand-beige rounded-none p-8 md:p-16 text-brand-primary relative overflow-hidden shadow-inner border border-brand-primary/5">
          <div className="absolute top-0 right-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-brand-taupe rounded-full blur-[100px] md:blur-[150px] -mr-40 md:-mr-96 -mt-40 md:-mt-96 opacity-50"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight border-b border-brand-primary/10 pb-4 md:pb-6 mb-8">-Arch Support Insoles-</h2>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed italic mb-12">
              Our specially designed insoles provide reinforced arch and forefoot support to reduce foot fatigue. We will continue to refine our technology and materials based on customer feedback.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 1st Gen */}
              <div className="space-y-6">
                <div className="w-full aspect-square overflow-hidden rounded-xl shadow-lg border border-brand-primary/10">
                  <img src="https://res.cloudinary.com/dqdisi2yp/image/upload/v1772782574/1._1st_Generation_Phoron_Foam_o4nlkx.jpg" className="w-full h-full object-cover" alt="1st Generation – Phoron Foam" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">1. Generation – Phoron Foam</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Phoron Foam delivers exceptional rebound after compression, providing lasting cushioning while minimizing foot fatigue. Its high-density perforated structure maintains its shape even with frequent wear and can absorb up to 85% of heel impact, helping protect the feet, knees, and lower back.
                </p>
              </div>
              
              {/* 2nd Gen */}
              <div className="space-y-6">
                <div className="w-full aspect-square overflow-hidden rounded-xl shadow-lg border border-brand-primary/10">
                  <img src="https://res.cloudinary.com/dqdisi2yp/image/upload/v1772782578/2._2nd_Generation_Charcoal-Infused_Phoron_Foam_fecmuo.jpg" className="w-full h-full object-cover" alt="2nd Generation – Charcoal-Infused Phoron Foam" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">2. Generation – Charcoal-Infused Phoron Foam</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Building on the high-rebound performance of Phoron Foam, the insole is enhanced with activated charcoal, offering antibacterial and antifungal protection while supporting foot health and extending the lifespan of the insole.
                </p>
              </div>

              {/* 3rd Gen */}
              <div className="space-y-6">
                <div className="w-full aspect-square overflow-hidden rounded-xl shadow-lg border border-brand-primary/10">
                  <img src="https://res.cloudinary.com/dqdisi2yp/image/upload/v1772782583/3._3rd_Generation_Honeycomb_Gel_Cell_Cushioning_xwocai.jpg" className="w-full h-full object-cover" alt="3rd Generation – Honeycomb Gel Cell Cushioning" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">3. Generation – Honeycomb Gel Cell Cushioning</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The latest upgrade introduces a silicone honeycomb gel structure that works together with the charcoal-infused Phoron Foam. The hexagonal cell design creates air columns during movement to enhance support and shock absorption, while the silicone layer helps disperse impact and protect the heel with every step.
                  <br/><br/>
                  A moisture-wicking surface and breathable perforations further improve airflow to help keep feet dry, while the high-rebound cushioning is designed to maintain long-lasting comfort and performance for 3–4 years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Air Weave Fabric */}
        <div className="bg-brand-beige rounded-none p-8 md:p-16 text-brand-primary relative overflow-hidden shadow-inner border border-brand-primary/5">
          <div className="absolute top-0 right-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-brand-taupe rounded-full blur-[100px] md:blur-[150px] -mr-40 md:-mr-96 -mt-40 md:-mt-96 opacity-50"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight border-b border-brand-primary/10 pb-4 md:pb-6 mb-8">-Air Weave Fabric-</h2>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed italic mb-12">
              With age and prolonged wearing of heels, individuals often encounter foot issues such as bunions and bursitis. To address this, we integrate elastic yarn and advanced 3D knit technology into our shoes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* 1. AirWeave Knit */}
              <div className="space-y-6">
                <div className="w-full aspect-video overflow-hidden rounded-xl shadow-lg border border-brand-primary/10">
                  <img src="https://res.cloudinary.com/dqdisi2yp/image/upload/v1772782576/1._AirWeave_Knit_zmprti.webp" className="w-full h-full object-cover" alt="AirWeave Knit" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">1. AirWeave Knit</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our AirWeave knit upper is partially made from recycled plastic bottles, combining sustainability with performance.
                  <br/><br/>
                  The material features 3D ventilation holes for enhanced breathability and 20% additional stretch, creating a flexible, pressure-free fit that adapts naturally to your foot.
                </p>
              </div>
              
              {/* 2. Water-Repellent Knit */}
              <div className="space-y-6">
                <div className="w-full aspect-video overflow-hidden rounded-xl shadow-lg border border-brand-primary/10">
                  <img src="https://res.cloudinary.com/dqdisi2yp/image/upload/v1772782581/2._Water-Repellent_Knit_wtiyl5.jpg" className="w-full h-full object-cover" alt="Water-Repellent Knit" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">2. Water-Repellent Knit</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The knit upper uses water-repellent yarns and a protective coating to help resist light rain and everyday splashes, keeping your feet comfortable in changing conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <button onClick={onNext} className="bg-brand-primary text-white px-16 py-6 rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-brand-secondary transition-all shadow-2xl">
          Next Step <i className="fas fa-arrow-right ml-3"></i>
        </button>
      </div>
    </div>
  );
};

export default SectionTech;
