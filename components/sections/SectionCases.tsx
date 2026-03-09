import React, { useState } from 'react';
import { Icons } from '../../src/assets/icons';
import { ActiveSection, CaseStudy, Platform } from '../../types';
import { INSPIRATION_CATEGORIES, YT_INSPIRATION_CATEGORIES } from '../../src/data/cases';

interface SectionCasesProps {
  data: {
    intro: string;
    items: CaseStudy[];
    tips: string[];
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

const SectionCases: React.FC<SectionCasesProps> = ({ data, labels, platform, isOnboarding, onBack, onNext }) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [inlinePlayingUrl, setInlinePlayingUrl] = useState<string | null>(null);

  const categories = platform === 'YT' 
    ? YT_INSPIRATION_CATEGORIES 
    : [
        ...INSPIRATION_CATEGORIES.filter(c => c.title !== "Multi-Color Showcase"),
        ...(data.intro.toLowerCase().includes('multi-color') ? [{
          title: "Multi-Color Showcase",
          desc: "Excellent cases showcasing multiple colors.",
          items: data.items.map(item => ({ id: item.author, videoUrl: item.videoUrl, description: item.description }))
        }] : [])
      ];

  const renderYTCase = (item: any) => (
    <div className="bg-brand-beige/20 p-8 md:p-12 border border-brand-primary/5 flex flex-col md:flex-row gap-12 items-center">
      <div className="flex-grow space-y-6">
        <h4 className="text-2xl md:text-3xl font-serif text-brand-primary">{item.description}</h4>
        <div className="bg-brand-white p-6 border border-brand-primary/10 min-h-[100px] flex items-center italic text-slate-500 text-sm md:text-base">
          {item.description}
        </div>
        <p className="text-[10px] md:text-xs text-brand-primary/40 uppercase tracking-widest font-black">Click the link below to watch the video</p>
      </div>
      <a 
        href={item.videoUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full md:w-auto bg-brand-primary text-white px-12 py-6 rounded-none font-black uppercase tracking-widest text-xs hover:bg-brand-secondary transition-all shadow-xl flex items-center justify-center gap-4 group"
      >
        Watch Video <Icons.ExternalLink className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );

    const renderVideoBox = (url: string, id: string, description?: string) => {
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
        <div className="flex flex-col gap-4" key={url}>
          <div 
            className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-brand-primary/10 relative group cursor-pointer flex items-center justify-center"
            onClick={() => setInlinePlayingUrl(url)}
          >
            {isPlaying ? (
              isSocial ? (
                <iframe
                  key={`iframe-${url}`}
                  src={getEmbedUrl(url)}
                  className="w-full h-full border-0 scale-[1.01]"
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
                  <div className="w-full h-full flex items-center justify-center bg-brand-dark/20">
                     <img 
                      src={`https://picsum.photos/seed/${id}/800/1422`} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                      alt={id} 
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform shadow-xl">
                    <Icons.Play className="text-white text-xl" />
                  </div>
                </div>
              </>
            )}
            <div className="absolute top-4 left-4 bg-brand-primary/80 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest z-10 pointer-events-none">
              {description || "Reference Case"}
            </div>
          </div>
          <p className="text-[10px] text-brand-primary/40 font-black tracking-widest text-center">ID: {id}</p>
          {description && (
            <p className="text-[10px] md:text-xs text-slate-500 italic leading-relaxed text-center px-2">
              {description}
            </p>
          )}
        </div>
      );
    };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-20 animate-slide-up">
      <div className="flex justify-between items-center mb-12 md:mb-16">
        <button onClick={onBack} className="text-brand-primary/50 hover:text-brand-primary font-bold text-[10px] md:text-[11px] tracking-widest transition-all uppercase">
          <Icons.ChevronDown className="rotate-90 mr-2" /> {labels.home}
        </button>
      </div>

      <div className="mb-12 md:mb-20 max-w-5xl">
        <p className="text-brand-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">In this section: Real-world examples and community inspiration.</p>
        <h1 className="text-4xl md:text-8xl font-serif text-brand-primary mb-8 md:mb-10 tracking-tighter leading-none">{labels.inspiration}</h1>
        <p className="text-slate-500 text-xl md:text-2xl font-light italic leading-relaxed">{data.intro}</p>
      </div>

      <div className="space-y-6 md:space-y-8 mb-16 md:mb-32 max-w-5xl mx-auto">
        {categories.map((category, idx) => (
          <div key={idx} className={`bg-brand-white rounded-[1rem] border transition-all ${activeCategory === idx ? 'border-brand-secondary shadow-2xl' : 'border-brand-primary/10 shadow-sm'}`}>
            <div 
              onClick={() => {
                setActiveCategory(activeCategory === idx ? null : idx);
                setInlinePlayingUrl(null);
              }}
              className="p-6 md:p-12 flex items-center justify-between cursor-pointer"
            >
              <div className="flex gap-6 md:gap-12 items-center">
                <span className={`w-10 h-10 md:w-16 md:h-16 rounded-xl flex items-center justify-center font-serif text-xl md:text-3xl transition-all ${activeCategory === idx ? 'bg-brand-secondary text-white' : 'bg-brand-primary/5 text-brand-primary'}`}>
                  {idx + 1}
                </span>
                <div>
                  <h3 className="text-2xl md:text-4xl font-serif text-brand-primary tracking-tight mb-1 md:mb-2">{category.title}</h3>
                  <p className="text-slate-500 text-sm md:text-xl italic font-light">{category.desc}</p>
                </div>
              </div>
              <i className={`fas fa-chevron-${activeCategory === idx ? 'up' : 'down'} text-brand-secondary text-xl md:text-2xl transition-all`}></i>
            </div>
            
            {activeCategory === idx && (
              <div className="animate-fade-in border-t border-brand-primary/5 p-6 md:p-12">
                {platform === 'YT' ? (
                  <div className="space-y-6">
                    {category.items.map((item, i) => (
                      <div key={i}>
                        {renderYTCase(item)}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {category.items.map((item, i) => (
                      <div key={item.videoUrl}>
                        {renderVideoBox(item.videoUrl, item.id, (item as any).description)}
                      </div>
                    ))}
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

export default SectionCases;
