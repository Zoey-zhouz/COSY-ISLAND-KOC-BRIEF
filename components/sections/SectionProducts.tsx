import React, { useState } from 'react';
import { Icons } from '../../src/assets/icons';
import { ActiveSection, ProductFeature, Platform } from '../../types';

interface SectionProductsProps {
  products: ProductFeature[];
  isMultiColor?: boolean;
  labels: { [key: string]: string };
  platform?: Platform;
  isOnboarding?: boolean;
  onBack: () => void;
  onNavigate: (section: ActiveSection) => void;
  onNextStep: () => void;
}

const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

const getCloudinaryPoster = (url: string) => {
  if (!url || !url.includes('cloudinary.com')) return undefined;
  return url.replace(/\.[^/.]+$/, ".jpg").replace("/video/upload/", "/video/upload/so_0/");
};

const ProductCard: React.FC<{ 
  product: ProductFeature; 
  onSelect: (p: ProductFeature) => void; 
}> = ({ product, onSelect }) => (
  <div 
    onClick={() => onSelect(product)}
    className="card-standard cursor-pointer group"
  >
    <div className="card-image-wrapper">
      <img src={product.image} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-4" alt={product.name} referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-colors pointer-events-none"></div>
    </div>
    <div className="p-4 md:p-8 flex flex-col justify-between flex-grow">
      <h3 className="text-sm md:text-2xl font-serif text-brand-primary leading-tight tracking-tight border-b border-brand-primary/5 pb-2 md:pb-4 mb-2 md:mb-4 min-h-[3rem] md:min-h-[4rem]">
        {toTitleCase(product.name)}
      </h3>
      <div className="flex flex-col gap-2 md:gap-4">
        {(() => {
          const hasHot = product.colors.some(c => c.toLowerCase().startsWith('hot-selling'));
          const hasBest = product.colors.some(c => c.toLowerCase().startsWith('best-selling'));
          if (hasHot || hasBest) {
            return (
              <span className="text-xs md:text-sm font-black text-brand-primary uppercase tracking-widest leading-none">
                {hasHot ? 'Hot Selling:' : 'Best Selling:'}
              </span>
            );
          }
          return null;
        })()}
        <div className="flex gap-2 md:gap-3 flex-wrap items-center">
          {product.colors.map(c => {
            const isHot = c.toLowerCase().startsWith('hot-selling');
            const isBest = c.toLowerCase().startsWith('best-selling');
            const displayColor = c.replace(/hot-selling|best-selling/i, '').trim();
            return (
              <span key={c} className={`text-[8px] md:text-[10px] font-black px-2.5 py-1 md:px-4 md:py-2 ${(isHot || isBest) ? 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20' : 'bg-brand-primary/5 text-brand-primary border-brand-primary/10'} rounded-full tracking-widest border whitespace-nowrap shadow-sm`}>
                {displayColor}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

const SectionProducts: React.FC<SectionProductsProps> = ({ products, isMultiColor, labels, platform, isOnboarding, onBack, onNavigate, onNextStep }) => {
  const [selected, setSelected] = useState<ProductFeature | null>(null);
  const [activeTab, setActiveTab] = useState<'sellingPoints' | 'cases'>('sellingPoints');
  const [inlinePlayingUrl, setInlinePlayingUrl] = useState<string | null>(null);

  const currentMonth = products.filter(p => !p.isPastSelection);
  const pastSelections = products.filter(p => p.isPastSelection);

  const handleProductSelect = (product: ProductFeature) => {
    setSelected(product);
    setActiveTab('sellingPoints');
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-20 animate-slide-up">
      <div className="flex justify-between items-center mb-16">
        <button onClick={onBack} className="text-brand-primary/50 hover:text-brand-primary font-bold text-[11px] tracking-widest transition-all uppercase">
          <Icons.ChevronDown className="rotate-90 mr-2" /> {labels.home}
        </button>
      </div>

      <div className="mb-16 md:mb-24">
        <p className="text-brand-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">In this section: Explore our seasonal collection and key product selling points.</p>
        <h1 className="text-6xl md:text-8xl font-serif text-brand-primary tracking-tighter leading-none mb-4">{labels.choice}</h1>
        <p className="text-slate-500 text-lg md:text-xl italic font-light">{labels.productHighlight}</p>
      </div>

      <div className="mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-10">
          {currentMonth.map(p => (
            <ProductCard 
              key={p.id} 
              product={p} 
              onSelect={handleProductSelect} 
            />
          ))}
        </div>
      </div>

      {pastSelections.length > 0 && (
        <div className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-10">
            {pastSelections.map(p => (
              <ProductCard 
                key={p.id} 
                product={p} 
                onSelect={handleProductSelect} 
              />
            ))}
          </div>
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-0 md:p-4 bg-brand-dark/70 backdrop-blur-md">
            <div className="bg-brand-bg rounded-none max-w-5xl w-full overflow-hidden shadow-2xl animate-slide-up flex flex-col h-full md:h-auto md:max-h-[85vh] border-0 md:border md:border-white/20">
            
            {/* Modal Header */}
            <div className="flex flex-col md:flex-row shrink-0 overflow-hidden bg-brand-white border-b border-brand-primary/10">
              <div className="w-full md:w-[25%] bg-brand-beige/10 p-4 md:p-6 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-brand-primary/5">
                <img src={selected.image} className="max-w-full h-24 md:h-40 object-contain" alt={selected.name} referrerPolicy="no-referrer" />
              </div>
              <div className="w-full md:w-[75%] p-4 md:p-8 flex flex-col justify-center relative">
                <button 
                  onClick={() => setSelected(null)} 
                  className="absolute top-2 right-2 md:top-6 md:right-6 bg-brand-primary/10 w-8 h-8 md:w-10 md:h-10 rounded-full md:rounded-none flex items-center justify-center text-brand-primary/60 hover:text-brand-primary transition-colors text-lg md:text-2xl z-[170]"
                >
                  <Icons.Times />
                </button>
                <h2 onClick={() => window.open(selected.url, '_blank')} className="text-base md:text-2xl font-serif text-brand-primary tracking-tighter cursor-pointer hover:text-brand-secondary transition-colors mb-2 pr-10 leading-tight">
                  {toTitleCase(selected.name)} <Icons.ExternalLink className="text-xs opacity-20 ml-1" />
                </h2>
                <div className="mb-3">
                  <div className="flex flex-col gap-2">
                    {(() => {
                      const hasHot = selected.colors.some(c => c.toLowerCase().startsWith('hot-selling'));
                      const hasBest = selected.colors.some(c => c.toLowerCase().startsWith('best-selling'));
                      if (hasHot || hasBest) {
                        return (
                          <span className="text-xs md:text-sm font-black text-brand-primary uppercase tracking-widest leading-none">
                            {hasHot ? 'Hot Selling:' : 'Best Selling:'}
                          </span>
                        );
                      }
                      return null;
                    })()}
                    <div className="flex flex-wrap gap-2">
                      {selected.colors.map(c => {
                        const isHot = c.toLowerCase().startsWith('hot-selling');
                        const isBest = c.toLowerCase().startsWith('best-selling');
                        const displayColor = c.replace(/hot-selling|best-selling/i, '').trim();
                        return (
                          <span key={c} className={`px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black tracking-widest border ${(isHot || isBest) ? 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20' : 'bg-brand-primary/5 text-brand-primary border-brand-primary/10'}`}>
                            {displayColor}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <p className="text-brand-secondary text-[9px] md:text-[11px] font-black tracking-widest flex items-center gap-2">
                  ✨ First selling point must be showcased.
                </p>
              </div>
            </div>

            {/* Modal Content Tabs */}
            <div className="bg-brand-white border-b border-brand-primary/10 p-2 md:p-4 flex shrink-0 items-center justify-between gap-4">
               <div className="flex gap-2 md:gap-4 overflow-x-auto no-scrollbar w-full">
                  <button 
                      onClick={() => setActiveTab('sellingPoints')}
                      className={`flex-1 md:flex-none px-4 md:px-6 py-2 md:py-2.5 font-black text-[9px] md:text-[10px] uppercase tracking-widest border transition-all whitespace-nowrap ${activeTab === 'sellingPoints' ? 'bg-brand-primary text-white border-brand-primary' : 'bg-transparent text-brand-primary border-brand-primary/20 hover:border-brand-primary'}`}
                  >
                      Selling Points
                  </button>
                  <button 
                      onClick={() => setActiveTab('cases')}
                      className={`flex-1 md:flex-none px-4 md:px-6 py-2 md:py-2.5 font-black text-[9px] md:text-[10px] uppercase tracking-widest border transition-all whitespace-nowrap ${activeTab === 'cases' ? 'bg-brand-primary text-white border-brand-primary' : 'bg-transparent text-brand-primary border-brand-primary/20 hover:border-brand-primary'}`}
                  >
                      Classic Cases
                  </button>
               </div>
            </div>

            <div className="flex-grow p-4 md:p-8 overflow-y-auto bg-brand-white">
              {activeTab === 'sellingPoints' && (
                <div className="grid grid-cols-1 gap-8 md:gap-12 animate-slide-up">
                  {selected.sellingPoints.map((point, idx) => {
                    const parts = point.split(':');
                    const hasTitle = parts.length > 1;
                    const title = hasTitle ? parts[0].trim() : '';
                    const body = hasTitle ? parts.slice(1).join(':').trim() : point.trim();

                    return (
                      <div key={idx} className="flex gap-4 md:gap-8 items-start group">
                        <span className="text-2xl md:text-4xl font-serif text-brand-primary italic opacity-10 leading-none min-w-[2rem] md:min-w-[3rem]">0{idx + 1}</span>
                        <div className="flex-grow space-y-1 md:space-y-2">
                          {hasTitle && (
                            <h5 className="text-brand-primary font-black uppercase text-[10px] md:text-xs tracking-widest">{title}</h5>
                          )}
                          <p className={`text-slate-600 text-base md:text-lg font-light italic leading-relaxed ${!hasTitle ? 'text-brand-primary/80 font-bold' : ''}`}>
                            {body}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeTab === 'cases' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-slide-up">
                    {(selected.detailCases || []).map((item, idx) => {
                      const isPlaying = inlinePlayingUrl === item.videoUrl;
                      const isSocial = item.videoUrl?.includes('instagram.com') || item.videoUrl?.includes('drive.google.com') || item.videoUrl?.includes('lh3.googleusercontent.com');
                      const isImage = item.videoUrl?.includes('picsum.photos') || (item.videoUrl && /\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(item.videoUrl)) || item.videoUrl?.includes('images.unsplash.com');

                      const getEmbedUrl = (u: string) => {
                        if (u.includes('instagram.com')) {
                          return `${u.endsWith('/') ? u : u + '/'}embed`;
                        }
                        if (u.includes('drive.google.com') || u.includes('lh3.googleusercontent.com')) {
                          const match = u.match(/\/d\/(.+?)(\/|$)/) || u.match(/id=(.+?)(&|$)/);
                          if (match && match[1]) {
                            return `https://drive.google.com/file/d/${match[1]}/preview`;
                          }
                        }
                        return u;
                      };

                      // Add #t=0.001 to video URLs to force first frame preview
                      const videoUrl = item.videoUrl && !isSocial && !isImage 
                        ? (item.videoUrl.includes('#') ? item.videoUrl : `${item.videoUrl}${item.videoUrl.includes('?') ? '&' : '#'}t=0.001`)
                        : item.videoUrl;

                      return (
                        <div key={`${idx}-${item.videoUrl}`} className="flex flex-col gap-4 max-w-[240px] mx-auto">
                          <div 
                            className="aspect-[9/16] overflow-hidden relative cursor-pointer bg-black flex items-center justify-center rounded-2xl shadow-lg"
                            onClick={() => item.videoUrl && setInlinePlayingUrl(item.videoUrl)}
                          >
                            {isPlaying && item.videoUrl ? (
                              isSocial ? (
                                <iframe
                                  key={`iframe-${item.videoUrl}`}
                                  src={getEmbedUrl(item.videoUrl)}
                                  className="w-full h-full border-0"
                                  allow="autoplay; encrypted-media; fullscreen"
                                  allowFullScreen
                                ></iframe>
                              ) : isImage ? (
                                <img src={item.videoUrl} className="w-full h-full object-contain bg-black" alt="Preview" referrerPolicy="no-referrer" />
                              ) : (
                                <video 
                                  key={`video-playing-${videoUrl}`}
                                  src={videoUrl || ''} 
                                  controls 
                                  autoPlay 
                                  muted
                                  playsInline
                                  webkit-playsinline="true"
                                  crossOrigin="anonymous"
                                  poster={getCloudinaryPoster(videoUrl || '')}
                                  className="w-full h-full object-contain bg-black"
                                  preload="metadata"
                                />
                              )
                            ) : (
                            <>
                              {isSocial ? (
                                <div className="w-full h-full flex items-center justify-center bg-brand-dark/20">
                                   <img 
                                    src={`https://picsum.photos/seed/${item.author || idx}/800/1422`} 
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                                    alt="Cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                              ) : isImage ? (
                                <img src={item.videoUrl} className="w-full h-full object-contain bg-black" alt="Preview" referrerPolicy="no-referrer" />
                              ) : (
                                <video 
                                  key={`video-preview-${videoUrl}`}
                                  src={videoUrl || ''} 
                                  className="w-full h-full object-contain bg-black opacity-80 group-hover:opacity-100 transition-opacity"
                                  muted
                                  playsInline
                                  webkit-playsinline="true"
                                  crossOrigin="anonymous"
                                  poster={getCloudinaryPoster(videoUrl || '')}
                                  preload="metadata"
                                />
                              )}
                              {item.videoUrl && (
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                                   <Icons.Play className="text-white text-3xl group-hover:scale-110 transition-transform" />
                                </div>
                              )}
                            </>
                          )}
                          <div className="absolute top-4 left-4 bg-brand-primary/80 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest z-10 pointer-events-none">
                            {item.description || "Classic Case"}
                          </div>
                        </div>
                        <div className="p-2 text-center">
                          <h4 className="font-serif text-brand-primary text-lg leading-tight mb-1">{item.title}</h4>
                          <p className="text-brand-primary/40 text-[10px] font-black tracking-widest">ID: {item.author}</p>
                        </div>
                      </div>
                    );
                  })}
                  {(!selected.detailCases || selected.detailCases.length === 0) && (
                    <div className="col-span-full py-20 text-center text-slate-400 italic">No specific cases found.</div>
                  )}
                </div>
              )}
            </div>

            <div className="p-4 md:p-6 border-t border-brand-primary/10 bg-brand-beige/10">
              <button onClick={() => { setSelected(null); onNextStep(); }} className="w-full bg-brand-primary text-white py-3 md:py-4 font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] hover:bg-brand-secondary transition-all shadow-xl">
                I've reviewed the selling points, proceed to next step
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionProducts;