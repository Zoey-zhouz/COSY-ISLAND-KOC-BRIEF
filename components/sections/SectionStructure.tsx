import React, { useState } from 'react';
import { Icons } from '../../src/assets/icons';
import { StructureStep, Platform } from '../../types';

interface SectionStructureProps {
  data: {
    intro: string;
    steps: StructureStep[];
    reminder1: { title: string; points: string[]; images: string[] };
    reminder2: { title: string; desc: string; images: string[] };
  };
  labels: { [key: string]: string };
  platform?: Platform;
  isOnboarding?: boolean;
  onBack: () => void;
  onNext: () => void;
}

const getCloudinaryPoster = (url: string) => {
  if (!url || !url.includes('cloudinary.com')) return undefined;
  return url.replace(/\.[^/.]+$/, ".jpg").replace("/video/upload/", "/video/upload/so_0/");
};

const SectionStructure: React.FC<SectionStructureProps> = ({ data, labels, platform, isOnboarding, onBack, onNext }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'desc' | 'cases' | 'hooks'>('desc');
  const [activeHookTab, setActiveHookTab] = useState<string>('Cases');
  const [inlinePlayingUrl, setInlinePlayingUrl] = useState<string | null>(null);

  const handleStepToggle = (idx: number) => {
    if (activeStep === idx) {
      setActiveStep(null);
    } else {
      setActiveStep(idx);
      setActiveTab('desc');
      const step = data.steps[idx];
      if (step.hookIntro) {
        if (step.examples.length === 0 && step.hookIntro.types.length > 0) {
          setActiveHookTab(step.hookIntro.types[0].title);
        } else {
          setActiveHookTab('Cases');
        }
      }
    }
  };

  const renderVideoBox = (url: string, typeLabel: string, idLabel?: string) => {
    const isPlaying = inlinePlayingUrl === url;
    const isSocial = url.includes('instagram.com') || url.includes('drive.google.com') || url.includes('lh3.googleusercontent.com');
    const isImage = url.includes('picsum.photos') || /\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(url) || url.includes('images.unsplash.com');

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
    const videoUrl = !isSocial && !isImage 
      ? (url.includes('#') ? url : `${url}${url.includes('?') ? '&' : '#'}t=0.001`)
      : url;

    return (
      <div className="flex flex-col gap-3" key={url}>
        <div 
          className={`${platform === 'YT' ? 'aspect-video' : 'aspect-[9/16]'} bg-black rounded-[1rem] overflow-hidden shadow-inner border border-brand-primary/10 relative group cursor-pointer flex items-center justify-center`}
          onClick={() => setInlinePlayingUrl(url)}
        >
          {isPlaying ? (
            isSocial ? (
              <iframe
                key={`iframe-${url}`}
                src={getEmbedUrl(url)}
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              ></iframe>
            ) : isImage ? (
              <img src={url} className="w-full h-full object-cover" alt="Preview" referrerPolicy="no-referrer" />
            ) : (
              <video 
                key={`video-playing-${videoUrl}`}
                src={videoUrl} 
                controls 
                autoPlay 
                muted
                playsInline
                webkit-playsinline="true"
                crossOrigin="anonymous"
                poster={getCloudinaryPoster(url)}
                className="w-full h-full object-contain bg-black"
                preload="metadata"
              />
            )
          ) : (
            <>
              {isSocial ? (
                <div className="w-full h-full bg-brand-dark/5 flex items-center justify-center">
                   <img 
                    src={`https://picsum.photos/seed/${idLabel || url}/800/1422`} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                    alt="Cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : isImage ? (
                <img src={url} className="w-full h-full object-cover" alt="Preview" referrerPolicy="no-referrer" />
              ) : (
                <video 
                  key={`video-preview-${videoUrl}`}
                  src={videoUrl} 
                  className="w-full h-full object-contain bg-black opacity-80 group-hover:opacity-100 transition-opacity"
                  muted
                  playsInline
                  webkit-playsinline="true"
                  crossOrigin="anonymous"
                  poster={getCloudinaryPoster(url)}
                  preload="metadata"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors">
                <Icons.Play className="text-white/60 text-5xl md:text-7xl shadow-2xl group-hover:scale-110 transition-transform" />
              </div>
            </>
          )}
          <div className="absolute top-4 left-4 bg-brand-primary/80 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest z-10 pointer-events-none">
            {typeLabel}
          </div>
        </div>
        {idLabel && (
          <p className="text-[10px] text-brand-primary/40 font-bold tracking-widest text-center">ID: {idLabel}</p>
        )}
      </div>
    );
  };

  const renderHookIntro = (step: StructureStep) => {
    const hookIntro = step.hookIntro!;
    const tabs = [...hookIntro.types.map(t => t.title)];
    if (step.examples.length > 0) {
      tabs.push('Cases');
    }
    
    return (
      <div className="space-y-8 animate-fade-in">
        {(step.details || hookIntro.intro) && (
          <div className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line bg-brand-primary/5 p-6 rounded-xl">
            {step.details || hookIntro.intro}
          </div>
        )}
        
        {/* Hook Tabs */}
        {tabs.length > 1 && (
          <div className="flex border-b border-brand-primary/10 overflow-x-auto no-scrollbar">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setActiveHookTab(tab);
                  setInlinePlayingUrl(null);
                }}
                className={`px-6 py-4 text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border-b-2 ${activeHookTab === tab ? 'border-brand-primary text-brand-primary' : 'border-transparent text-brand-primary/40 hover:text-brand-primary'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        <div className="animate-fade-in">
          {activeHookTab === 'Cases' ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {step.examples.map((ex, i) => {
                   const url = typeof ex === 'string' ? ex : ex.url;
                   const id = typeof ex === 'string' ? `#${i + 1}` : ex.id;
                   const title = typeof ex === 'string' ? `Reference Case ${i + 1}` : ex.title || `Reference Case ${i + 1}`;
                   return renderVideoBox(url, title, id);
                })}
             </div>
          ) : (
            hookIntro.types.filter(t => t.title === activeHookTab).map((type, idx) => (
              <div key={idx} className="space-y-12">
                <div className="bg-brand-beige/20 p-8 md:p-12 border border-brand-primary/5 rounded-2xl flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                  <div className="flex-1 space-y-6">
                    {type.icon && (
                      <div className="w-16 h-16 bg-brand-primary text-white flex items-center justify-center rounded-2xl shadow-xl">
                        <i className={`fas ${type.icon} text-2xl`}></i>
                      </div>
                    )}
                    <div className="flex flex-col">
                      <h4 className="text-3xl font-serif text-brand-primary tracking-tight">{type.title}</h4>
                    </div>
                    <p className="text-slate-600 text-lg italic leading-relaxed whitespace-pre-line">{type.desc}</p>
                    {type.examples && (
                      <div className="space-y-3 bg-white/50 p-6 rounded-xl border border-brand-primary/5">
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-secondary">Examples</h5>
                        {type.examples.map((ex: string, i: number) => (
                          <p key={i} className="text-sm text-brand-primary font-medium italic flex gap-3">
                            <span className="text-brand-secondary">•</span> {ex}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  {(type as any).image && (
                    <div className="w-full md:w-1/3 aspect-video md:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-brand-primary/10">
                      <img src={(type as any).image} className="w-full h-full object-cover" alt={type.title} referrerPolicy="no-referrer" />
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 animate-slide-up">
      <div className="flex justify-between items-center mb-12 md:mb-16">
        <button onClick={onBack} className="text-brand-primary/50 hover:text-brand-primary font-bold uppercase text-[10px] md:text-[11px] tracking-widest transition-all">
          <i className="fas fa-arrow-left mr-2"></i> {labels.home}
        </button>
      </div>

      <div className="mb-12 md:mb-20 max-w-5xl">
        <p className="text-brand-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">In this section: Our proven 7-step video framework and creative guidelines.</p>
        <h1 className="text-4xl md:text-9xl font-serif text-brand-primary mb-8 md:mb-12 tracking-tighter leading-tight md:leading-none">{labels.framework}</h1>
        <p className="text-slate-500 text-xl md:text-3xl font-light italic leading-relaxed">{data.intro}</p>
      </div>

      <div className="space-y-6 md:space-y-8 mb-16 md:mb-32 max-w-5xl mx-auto">
        <h4 className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-brand-secondary mb-8 md:mb-16">The 7-Step Framework</h4>
        {data.steps.map((step, idx) => (
          <div key={idx} className={`bg-brand-white rounded-[1rem] border transition-all ${activeStep === idx ? 'border-brand-secondary shadow-2xl' : 'border-brand-primary/10 shadow-sm'}`}>
            <div 
              onClick={() => handleStepToggle(idx)}
              className="p-6 md:p-12 flex items-center justify-between cursor-pointer"
            >
              <div className="flex gap-6 md:gap-12 items-center">
                <span className={`w-10 h-10 md:w-16 md:h-16 rounded-xl flex items-center justify-center font-serif text-xl md:text-3xl transition-all ${activeStep === idx ? 'bg-brand-secondary text-white' : 'bg-brand-primary/5 text-brand-primary'}`}>
                  {idx + 1}
                </span>
                <div>
                  <h3 className="text-2xl md:text-4xl font-serif text-brand-primary tracking-tight mb-1 md:mb-2">
                    {step.title}
                    {step.title.includes("Feature Showcase") && (
                      <span className="ml-4 text-[10px] bg-brand-secondary text-white px-2 py-1 rounded uppercase tracking-widest align-middle inline-block">
                        Must-Have
                      </span>
                    )}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-xl italic font-light whitespace-pre-line">{step.desc}</p>
                </div>
              </div>
              <i className={`fas fa-chevron-${activeStep === idx ? 'up' : 'down'} text-brand-secondary text-xl md:text-2xl transition-all`}></i>
            </div>
            
            {activeStep === idx && (
              <div className="animate-fade-in border-t border-brand-primary/5 p-6 md:p-12">
                {step.hookIntro ? (
                  renderHookIntro(step)
                ) : platform === 'IG' && step.title === "Product Reveal" ? (
                  <div className="space-y-12">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                      {step.examples.map((ex, i) => {
                        const url = typeof ex === 'string' ? ex : ex.url;
                        const isVideo = url.includes('.mp4') || url.includes('video/upload');
                        return (
                          <div key={i} className="flex flex-col gap-6 items-center">
                            <div className="w-full aspect-[4/5] bg-white border border-brand-primary/10 shadow-xl overflow-hidden relative group">
                              {isVideo ? (
                                <video 
                                  src={`${url}${url.includes('#') ? '' : '#t=0.001'}`}
                                  className="w-full h-full object-cover"
                                  muted
                                  playsInline
                                  crossOrigin="anonymous"
                                  poster={getCloudinaryPoster(url)}
                                  preload="metadata"
                                />
                              ) : (
                                <img src={url} className="w-full h-full object-cover" alt={`Reveal ${i + 1}`} referrerPolicy="no-referrer" />
                              )}
                              <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-2xl border-2 ${i < 2 ? 'bg-red-500 border-white text-white' : 'bg-green-500 border-white text-white'}`}>
                                {i < 2 ? <Icons.Times /> : <Icons.Check />}
                              </div>
                            </div>
                            <div className={`flex items-center gap-3 font-black uppercase tracking-widest text-[10px] ${i < 2 ? 'text-red-500' : 'text-green-500'}`}>
                              <i className={`fas ${i < 2 ? 'fa-times-circle' : 'fa-check-circle'} text-lg`}></i>
                              {i < 2 ? 'Incorrect' : 'Correct'}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : step.title === "Trendy Background Music" ? (
                  <div className="space-y-12">
                    {(step as any).musicTypes ? (
                      (step as any).musicTypes.map((mType: any, mIdx: number) => (
                        <div key={mIdx} className="space-y-6">
                          <div className="border-l-4 border-brand-secondary pl-6">
                            <h4 className="text-2xl font-serif text-brand-primary mb-2">{mType.title}</h4>
                            <p className="text-slate-600 italic whitespace-pre-line">{mType.desc}</p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {mType.examples.map((ex: any, i: number) => {
                              const url = typeof ex === 'string' ? ex : ex.url;
                              const id = typeof ex === 'string' ? `#${i + 1}` : ex.id;
                              const title = typeof ex === 'string' ? mType.title : ex.title || mType.title;
                              return renderVideoBox(url, title, id);
                            })}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {step.examples.map((ex: any, i: number) => {
                          const url = typeof ex === 'string' ? ex : ex.url;
                          const title = typeof ex === 'string' ? `Step ${i + 1}` : ex.title || `Step ${i + 1}`;
                          return (
                            <div key={i} className="space-y-4">
                              <div className="aspect-[9/16] bg-brand-beige rounded-2xl overflow-hidden shadow-2xl border border-brand-primary/10">
                                <img src={url} className="w-full h-full object-cover" alt={title} referrerPolicy="no-referrer" />
                              </div>
                              <h4 className="text-center font-bold text-brand-primary">{title}</h4>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={`grid gap-8 ${step.details && step.examples.length > 0 ? (step.title.includes("Brand Introduction") ? 'grid-cols-1 lg:grid-cols-5' : (step.title.includes("Product Reveal") || step.title.includes("Overall outfit display") || step.title.includes("Feature Showcase") ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2')) : 'grid-cols-1'}`}>
                    {step.details && (
                      <div className={`text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line bg-brand-primary/5 p-6 rounded-xl ${step.title.includes("Brand Introduction") ? 'lg:col-span-2' : ''}`}>
                        {step.details.split('COSY ISLAND website').map((part, i, arr) => (
                          <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <a href="https://cosyisland.co" target="_blank" rel="noopener noreferrer" className="text-brand-secondary underline hover:text-brand-primary transition-colors">
                                COSY ISLAND website
                              </a>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                    {step.examples.length > 0 && (
                      <div className={`grid gap-6 animate-fade-in ${step.title.includes("Brand Introduction") ? 'lg:col-span-3 grid-cols-1' : (step.details ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4')}`}>
                        {step.examples.map((ex, i) => {
                          const url = typeof ex === 'string' ? ex : ex.url;
                          const id = typeof ex === 'string' ? `#${i + 1}` : ex.id;
                          const title = typeof ex === 'string' ? `Reference Case ${i + 1}` : ex.title || `Reference Case ${i + 1}`;
                          return renderVideoBox(url, title, id);
                        })}
                      </div>
                    )}
                  </div>
                )}
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

export default SectionStructure;