import React, { useState } from 'react';
import { Icons } from '../../src/assets/icons';
import { RequirementData, Platform, YTType } from '../../types';

interface SectionRequirementProps {
  data: RequirementData;
  platform: Platform;
  ytType?: YTType | null;
  isMultiColor?: boolean;
  labels: { [key: string]: string };
  isOnboarding?: boolean;
  structureReminders: {
    reminder1: { title: string; points: string[]; images: string[] };
    reminder2: { title: string; desc: string; images: string[] };
  };
  onBack: () => void;
  onNext: () => void;
}

const CollapsibleSection: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-brand-primary/10 mb-4 bg-brand-white shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center hover:bg-brand-beige/20 transition-colors"
      >
        <h3 className="text-xl md:text-2xl font-serif text-brand-primary">{title}</h3>
        <Icons.ChevronDown className={`text-brand-secondary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-6 md:p-8 border-t border-brand-primary/5 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
};

const SectionRequirement: React.FC<SectionRequirementProps> = ({ data, platform, ytType, isMultiColor, labels, isOnboarding, structureReminders, onBack, onNext }) => {
  const isIG = platform === 'IG';
  const reqs = isIG ? data.ig : data.yt;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 animate-slide-up">
      <div className="flex justify-between items-center mb-12 md:mb-16">
        <button onClick={onBack} className="text-brand-primary/50 hover:text-brand-primary font-bold uppercase text-[10px] md:text-[11px] tracking-widest transition-all">
          <Icons.ChevronDown className="rotate-90 mr-2" /> {labels.home}
        </button>
      </div>

      <div className="text-center mb-16 md:mb-24">
        <p className="text-brand-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">In this section: Collaboration goals, platform-specific requirements, and visual guidelines.</p>
        <h2 className="text-brand-secondary font-black uppercase text-[10px] md:text-[12px] tracking-[0.4em] md:tracking-[0.6em] mb-4">
          {platform} {platform === 'YT' && ytType ? `(${ytType === 'dedicated' ? 'Dedicated' : 'Integrated'})` : ''} {platform === 'IG' ? (isMultiColor ? 'Multi Color Theme' : 'Single Color Theme') : ''} Collaboration
        </h2>
        <h1 className="text-4xl md:text-8xl font-serif text-brand-primary tracking-tighter mb-8 leading-tight md:leading-none">Collaboration Requirements</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-brand-primary text-white p-6 md:p-10 shadow-2xl">
            <p className="text-lg md:text-2xl font-serif italic leading-relaxed mb-4">
              "Our official website is <span className="underline decoration-brand-secondary font-bold">cosyisland.co</span> — NOT .com."
            </p>
            <p className="text-sm md:text-lg font-black uppercase tracking-[0.2em] text-brand-secondary">
              And it’s COSY with an S.
            </p>
          </div>
        </div>

        {(!isIG && ytType === 'dedicated' && data.yt?.dedicatedGoals) || (!isIG && ytType === 'integrated' && data.yt?.integratedGoals) || (isIG && data.goals) ? (
          <div className="max-w-4xl mx-auto bg-brand-white p-8 md:p-12 border-l-4 md:border-l-8 border-brand-primary shadow-xl">
            <p className="text-xl md:text-2xl font-serif text-brand-primary italic leading-relaxed">
              "{!isIG && ytType === 'dedicated' && data.yt?.dedicatedGoals ? data.yt.dedicatedGoals : !isIG && ytType === 'integrated' && data.yt?.integratedGoals ? data.yt.integratedGoals : data.goals}"
            </p>
          </div>
        ) : null}
      </div>

      <div className="max-w-5xl mx-auto mb-16 md:mb-32">
        {isIG ? (
          <>
            <CollapsibleSection title="Reel Requirements" defaultOpen={true}>
              {isMultiColor ? (
                <div className="space-y-12">
                  <div>
                    <h4 className="text-green-700 font-black uppercase text-[10px] tracking-widest mb-6 flex items-center gap-2">
                      <i className="fas fa-check-circle"></i> Must
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                      {reqs?.reelReqs.filter(r => r.status === 'must').map((r, i) => (
                        <li key={i} className="text-sm md:text-base text-slate-700 italic flex gap-3">
                          <span className="text-green-600 font-bold">•</span> {r.text}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-brand-primary/10 text-[10px] md:text-sm shadow-sm">
                        <thead>
                          <tr className="bg-brand-primary/5">
                            <th className="border border-brand-primary/10 p-3 md:p-4 text-left font-black uppercase tracking-widest text-[8px] md:text-[10px] w-16">Step</th>
                            <th className="border border-brand-primary/10 p-3 md:p-4 text-left font-black uppercase tracking-widest text-[8px] md:text-[10px] w-48">Content</th>
                            <th className="border border-brand-primary/10 p-3 md:p-4 text-left font-black uppercase tracking-widest text-[8px] md:text-[10px]">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(reqs?.multiColorReelSteps || []).map((row, idx) => (
                            <tr key={idx} className="hover:bg-brand-beige/10 transition-colors">
                              <td className="border border-brand-primary/10 p-3 md:p-4 font-bold text-brand-primary text-center">{row.step}</td>
                              <td className="border border-brand-primary/10 p-3 md:p-4 font-bold text-brand-primary">{row.title}</td>
                              <td className="border border-brand-primary/10 p-3 md:p-4 text-slate-600 italic whitespace-pre-line leading-relaxed">{row.desc}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="pt-10 border-t border-brand-primary/5">
                    <h4 className="text-brand-primary font-black uppercase text-[10px] tracking-widest mb-6 flex items-center gap-2">
                      <i className="fas fa-times-circle"></i> Mustn't
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                      {reqs?.reelReqs.filter(r => r.status === 'mustnt').map((r, i) => (
                        <li key={i} className="text-sm md:text-base text-slate-700 italic flex gap-3">
                          <span className="text-red-600 font-bold">•</span> {r.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-green-700 font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                      <i className="fas fa-check-circle"></i> Must
                    </h4>
                    <ul className="space-y-4">
                      {reqs?.reelReqs.filter(r => r.status === 'must').map((r, i) => (
                        <li key={i} className="text-sm md:text-base text-slate-700 italic flex gap-3">
                          <span className="text-green-600 font-bold">•</span> {r.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-brand-primary font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                      <i className="fas fa-times-circle"></i> Mustn't
                    </h4>
                    <ul className="space-y-4">
                      {reqs?.reelReqs.filter(r => r.status === 'mustnt').map((r, i) => (
                        <li key={i} className="text-sm md:text-base text-slate-700 italic flex gap-3">
                          <span className="text-red-600 font-bold">•</span> {r.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CollapsibleSection>

            <CollapsibleSection title="Post (Carousel) Requirements">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-green-700 font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                    <i className="fas fa-check-circle"></i> Must
                  </h4>
                  <ul className="space-y-4">
                    {reqs?.carouselReqs.filter(r => r.status === 'must').map((r, i) => (
                      <li key={i} className="text-sm md:text-base text-slate-700 italic flex gap-3">
                        <span className="text-green-600 font-bold">•</span> {r.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-brand-primary font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                    <i className="fas fa-times-circle"></i> Mustn't
                  </h4>
                  <ul className="space-y-4">
                    {reqs?.carouselReqs.filter(r => r.status === 'mustnt').map((r, i) => (
                      <li key={i} className="text-sm md:text-base text-slate-700 italic flex gap-3">
                        <span className="text-red-600 font-bold">•</span> {r.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Caption Requirements">
              <div className="space-y-6">
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-2">Ad Disclosure</h5>
                  <p className="text-slate-700 italic">{reqs?.captionReqs.ad}</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-2">Mentions & Tags</h5>
                  <div className="flex flex-wrap gap-2">
                    {reqs?.captionReqs.mentions.map(m => <span key={m} className="bg-brand-beige px-3 py-1 text-[10px] font-bold text-brand-primary">{m}</span>)}
                  </div>
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-2">Direction</h5>
                  <p className="text-slate-700 italic">{reqs?.captionReqs.direction}</p>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Thumbnail">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <p className="text-slate-700 italic">You can set the thumbnail with image of:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="text-slate-700 italic list-disc">Product with aesthetic set-up</li>
                      <li className="text-slate-700 italic list-disc">You wearing our products</li>
                      <li className="text-slate-700 italic list-disc">Holding our products</li>
                    </ul>
                    <p className="text-slate-700 italic mt-4">
                      Please do not add subtitles on the cover as much as possible. If you prefer subtitles, please use our unified font.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {reqs?.thumbnail?.map((item, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="aspect-[3/4] bg-brand-beige border border-brand-primary/10 overflow-hidden shadow-inner">
                          <img src={item.url} className="w-full h-full object-cover" alt={`Thumbnail ${i + 1}`} referrerPolicy="no-referrer" />
                        </div>
                        <p className="text-[10px] font-black text-brand-primary/40 tracking-widest text-center">{item.id}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Safe Zone">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <p className="text-slate-700 italic">
                      Since we are promoting footwear, the products are easily covered by the caption on social media.
                    </p>
                    <p className="text-slate-700 italic">
                      Sometimes, the reel will be shown with an aspect ratio of 4:5, so the bottom of the video will be cropped.
                    </p>
                    <p className="text-slate-700 italic font-bold text-brand-secondary">
                      Therefore, please try to frame the shoes inside the yellow box when you are in a standing position.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                      <div className="relative bg-brand-beige border border-brand-primary/10 overflow-hidden shadow-2xl">
                        <img src="https://res.cloudinary.com/dqdisi2yp/image/upload/v1772605384/Brief-%20total/Brief-photos/safe_zone_jnhlpb.jpg" className="w-full h-auto object-contain" alt="Safe Zone" referrerPolicy="no-referrer" />
                      </div>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Content Rights">
              <div className="space-y-6">
                <div className="bg-brand-beige p-6 md:p-8 border border-brand-primary/10">
                  <p className="text-slate-700 italic leading-relaxed mb-4">
                    The Creator grants the Brand the right to feature the original content across official social media channels, the official website. The Brand commits to clearly crediting the Creator’s ID in all reposts and showcases.
                  </p>
                  <p className="text-slate-700 italic leading-relaxed">
                    Our paid media team actively monitors content performance. If your content resonates strongly with our audience, the Brand may invest its own advertising budget to boost your post. This is designed to maximize reach and help the Creator gain high-quality followers and broader exposure.
                  </p>
                </div>
              </div>
            </CollapsibleSection>
          </>
        ) : (
          <>
            {(ytType === 'dedicated' || !ytType) && (
              <CollapsibleSection title="Dedicated Video Requirements" defaultOpen={ytType === 'dedicated'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-green-700 font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                      <i className="fas fa-check-circle"></i> Must
                    </h4>
                    <ul className="space-y-4">
                      {data.yt?.dedicated.filter(r => r.status === 'must').map((r, i) => (
                        <li key={i} className="text-sm md:text-base text-slate-700 italic flex gap-3">
                          <span className="text-green-600 font-bold">•</span> {r.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-brand-primary font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                      <i className="fas fa-times-circle"></i> Mustn't
                    </h4>
                    <ul className="space-y-4">
                      {data.yt?.dedicated.filter(r => r.status === 'mustnt').map((r, i) => (
                        <li key={i} className="text-sm md:text-base text-slate-700 italic flex gap-3">
                          <span className="text-red-600 font-bold">•</span> {r.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {data.yt?.dedicatedFormats && (
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-4">Recommended Content Formats</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {data.yt.dedicatedFormats.map((format, i) => (
                        <div key={i} className="bg-brand-beige p-4 border border-brand-primary/10">
                          <h5 className="font-bold text-brand-primary mb-2">{i + 1}. {format.title}</h5>
                          <p className="text-sm text-slate-700 italic">{format.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CollapsibleSection>
            )}

            {(ytType === 'integrated' || !ytType) && (
              <CollapsibleSection title="Integrated Video Requirements" defaultOpen={ytType === 'integrated'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-green-700 font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                      <i className="fas fa-check-circle"></i> Must
                    </h4>
                    <ul className="space-y-4">
                      {data.yt?.integrated.filter(r => r.status === 'must').map((r, i) => (
                        <li key={i} className="text-sm md:text-base text-slate-700 italic flex gap-3">
                          <span className="text-green-600 font-bold">•</span> {r.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-brand-primary font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                      <i className="fas fa-times-circle"></i> Mustn't
                    </h4>
                    <ul className="space-y-4">
                      {data.yt?.integrated.filter(r => r.status === 'mustnt').map((r, i) => (
                        <li key={i} className="text-sm md:text-base text-slate-700 italic flex gap-3">
                          <span className="text-red-600 font-bold">•</span> {r.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {data.yt?.integratedFormats && (
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-4">Recommended Content Formats</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {data.yt.integratedFormats.map((format, i) => (
                        <div key={i} className="bg-brand-beige p-4 border border-brand-primary/10">
                          <h5 className="font-bold text-brand-primary mb-2">{i + 1}. {format.title}</h5>
                          <p className="text-sm text-slate-700 italic">{format.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CollapsibleSection>
            )}

            <CollapsibleSection title="Caption & Link Requirements">
              <div className="space-y-6">
                {data.yt?.captionReqs.title && (
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-2">Title</h5>
                    <p className="text-slate-700 italic">{data.yt.captionReqs.title}</p>
                  </div>
                )}
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-2">Required Links</h5>
                  <p className="text-slate-700 italic">{data.yt?.captionReqs.links}</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-2">Tags</h5>
                  <div className="flex flex-wrap gap-2">
                    {data.yt?.captionReqs.tags.map(m => <span key={m} className="bg-brand-beige px-3 py-1 text-[10px] font-bold text-brand-primary">{m}</span>)}
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Thumbnail">
              <div className="space-y-6">
                <p className="text-slate-700 italic">
                  Thumbnail text content should include:<br/>
                  • Product with aesthetic set-up<br/>
                  • You wearing our products<br/>
                  • COSY ISLAND logo and font
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {data.yt?.thumbnail?.map((item, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="aspect-video bg-brand-beige border border-brand-primary/10 overflow-hidden shadow-inner relative group">
                        <img src={item.url} className="w-full h-full object-cover" alt={`Thumbnail ${i + 1}`} referrerPolicy="no-referrer" />
                      </div>
                      <p className="text-[10px] text-brand-primary/40 font-bold tracking-widest text-center">ID: {item.id}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Content Rights">
              <div className="space-y-6">
                <div className="bg-brand-beige p-6 md:p-8 border border-brand-primary/10">
                  <p className="text-slate-700 italic leading-relaxed mb-4">
                    The Creator grants the Brand the right to feature the original content across official social media channels, the official website, and offline displays. The Brand commits to clearly crediting the Creator’s ID in all reposts and showcases.
                  </p>
                </div>
              </div>
            </CollapsibleSection>


          </>
        )}
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

export default SectionRequirement;
