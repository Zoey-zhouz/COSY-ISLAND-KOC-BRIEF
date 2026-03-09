import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import GlobalNav from './components/GlobalNav';
import SectionRequirement from './components/sections/SectionRequirement';
import SectionProducts from './components/sections/SectionProducts';
import SectionStructure from './components/sections/SectionStructure';
import SectionHooks from './components/sections/SectionHooks';
import SectionCases from './components/sections/SectionCases';
import SectionBrand from './components/sections/SectionBrand';
import SectionMedia from './components/sections/SectionMedia';
import SectionTech from './components/sections/SectionTech';
import Footer from './components/Footer';
import { Icons } from './src/assets/icons';
import { ActiveSection, CampaignSeason, Platform, YTType } from './types';
import { CONTENT, YT_CONTENT } from './src/data';

const App: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState<CampaignSeason>('SS26');
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [selectedYTType, setSelectedYTType] = useState<YTType | null>(null);
  const [isOnboarding, setIsOnboarding] = useState(false);
  const [showDashboardPopup, setShowDashboardPopup] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  const content = selectedPlatform === 'YT' ? YT_CONTENT : CONTENT;
  const currentData = activeSeason === 'SS26' ? content.multiColor : content.singleColor;
  const labels = content.common.labels;

  const navigateTo = (next: ActiveSection) => {
    setActiveSection(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetToHome = () => {
    setActiveSection('home');
    setIsOnboarding(false);
    setSelectedPlatform(null);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const startOnboarding = () => {
    setIsOnboarding(true);
    navigateTo('platform');
  };

  const handlePlatformSelect = (platform: Platform) => {
    setSelectedPlatform(platform);
    if (isOnboarding) {
      if (platform === 'YT') {
        navigateTo('ytType');
      } else {
        navigateTo('campaignType');
      }
    } else {
      setShowDashboardPopup(true);
      navigateTo('dashboard');
    }
  };

  const handleYTTypeSelect = (type: YTType) => {
    setSelectedYTType(type);
    if (isOnboarding) {
      // Skip campaignType for YT
      navigateTo('requirement');
    } else {
      setShowDashboardPopup(true);
      navigateTo('dashboard');
    }
  };

  const renderDashboard = () => {
    // --- CODE LOCATION: PRODUCT ICON DEFINITION ---
    // The product icon is defined in the 'sections' array below under the 'products' id.
    const sections = [
      { id: 'requirement', label: labels.rules, icon: <Icons.ClipboardList />, desc: 'Requirements, DOs & DONTs' },
      { 
        id: 'products', 
        label: labels.choice, 
        icon: <Icons.HighHeel />, 
        desc: 'Selling points & details' 
      },
      { id: 'structure', label: labels.framework, icon: <Icons.Film />, desc: 'How to structure your content' },
      { id: 'media', label: labels.media || 'Brand VI', icon: <Icons.Images />, desc: 'Logos, fonts & guidelines' },
      { id: 'cases', label: labels.inspiration, icon: <Icons.Lightbulb />, desc: 'Community examples' },
      { id: 'tech', label: labels.tech, icon: <Icons.Microchip />, desc: 'Innovation & craft' },
      { id: 'brand', label: labels.story, icon: <Icons.BookOpen />, desc: 'Our mission & vision' },
    ];
    // --- END CODE LOCATION ---

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {sections.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              if (item.id === 'requirement' && !isOnboarding) {
                setShowThemeSelector(true);
              }
              navigateTo(item.id as ActiveSection);
            }}
            className="group bg-brand-white p-6 md:p-10 border border-brand-primary/5 hover:border-brand-primary transition-all text-left flex flex-col h-full shadow-sm hover:shadow-xl"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 bg-brand-bg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <h3 className="text-lg md:text-xl font-serif text-brand-primary mb-2 tracking-tight">{item.label}</h3>
            <p className="text-[9px] md:text-xs text-brand-primary/40 uppercase tracking-widest font-bold mt-auto">{item.desc}</p>
          </button>
        ))}
      </div>
    );
  };

  const renderSectionContent = (section: ActiveSection) => {
    switch (section) {
      case 'requirement': 
        if (!isOnboarding && showThemeSelector) {
          if (selectedPlatform === 'YT') {
            return (
              <div className="max-w-4xl mx-auto px-6 py-32 text-center animate-slide-up">
                <h1 className="text-5xl font-serif text-brand-primary mb-16 tracking-tighter">Select Video Type</h1>
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                  <button 
                    onClick={() => { setSelectedYTType('dedicated'); setShowThemeSelector(false); }}
                    className="flex-1 bg-brand-white p-12 border-2 border-brand-primary/10 hover:border-brand-primary transition-all rounded-none group"
                  >
                    <i className="fas fa-video text-4xl text-brand-secondary mb-6 group-hover:scale-110 transition-transform"></i>
                    <p className="font-black uppercase tracking-widest text-brand-primary">Dedicated</p>
                  </button>
                  <button 
                    onClick={() => { setSelectedYTType('integrated'); setShowThemeSelector(false); }}
                    className="flex-1 bg-brand-white p-12 border-2 border-brand-primary/10 hover:border-brand-primary transition-all rounded-none group"
                  >
                    <i className="fas fa-layer-group text-4xl text-brand-secondary mb-6 group-hover:scale-110 transition-transform"></i>
                    <p className="font-black uppercase tracking-widest text-brand-primary">Integrated</p>
                  </button>
                </div>
              </div>
            );
          }
          return (
            <div className="max-w-4xl mx-auto px-6 py-32 text-center animate-slide-up">
              <h1 className="text-5xl font-serif text-brand-primary mb-16 tracking-tighter">Select Collaboration Theme</h1>
              <div className="flex flex-col md:flex-row gap-8 justify-center">
                <button 
                  onClick={() => { setActiveSeason('SS25'); setShowThemeSelector(false); }}
                  className="flex-1 bg-brand-white p-12 border-2 border-brand-primary/10 hover:border-brand-primary transition-all rounded-none"
                >
                  <p className="font-black uppercase tracking-widest text-brand-primary">{content.singleColor.label}</p>
                </button>
                <button 
                  onClick={() => { setActiveSeason('SS26'); setShowThemeSelector(false); }}
                  className="flex-1 bg-brand-white p-12 border-2 border-brand-primary/10 hover:border-brand-primary transition-all rounded-none"
                >
                  <p className="font-black uppercase tracking-widest text-brand-primary">{content.multiColor.label}</p>
                </button>
              </div>
            </div>
          );
        }
        return <SectionRequirement data={currentData.requirement} platform={selectedPlatform || 'IG'} ytType={selectedYTType} isMultiColor={activeSeason === 'SS26'} structureReminders={currentData.structure} labels={labels} isOnboarding={isOnboarding} onBack={() => navigateTo(isOnboarding ? (selectedPlatform === 'YT' ? 'ytType' : 'campaignType') : 'dashboard')} onNext={() => navigateTo('products')} />;
      case 'products': 
        return <SectionProducts products={currentData.products} isMultiColor={activeSeason === 'SS26'} labels={labels} platform={selectedPlatform || 'IG'} isOnboarding={isOnboarding} onBack={() => navigateTo(isOnboarding ? 'requirement' : 'dashboard')} onNavigate={navigateTo} onNextStep={() => navigateTo('structure')} />;
      case 'structure': 
        return <SectionStructure data={currentData.structure} labels={labels} platform={selectedPlatform || 'IG'} isOnboarding={isOnboarding} onBack={() => navigateTo(isOnboarding ? 'products' : 'dashboard')} onNext={() => navigateTo('media')} />;
      case 'media':
        return <SectionMedia data={currentData.mediaAssets} labels={labels} isOnboarding={isOnboarding} onBack={() => navigateTo(isOnboarding ? 'structure' : 'dashboard')} updates={content.common.updates} onNext={() => navigateTo('cases')} />;
      case 'cases': 
        return <SectionCases data={currentData.cases} labels={labels} platform={selectedPlatform || 'IG'} isOnboarding={isOnboarding} onBack={() => navigateTo(isOnboarding ? 'media' : 'dashboard')} onNext={() => navigateTo('tech')} />;
      case 'tech':
        return <SectionTech labels={labels} isOnboarding={isOnboarding} onBack={() => navigateTo(isOnboarding ? 'cases' : 'dashboard')} onNext={() => navigateTo('brand')} />;
      case 'brand': 
        return <SectionBrand labels={labels} isOnboarding={isOnboarding} onBack={() => navigateTo(isOnboarding ? 'tech' : 'dashboard')} onNext={() => navigateTo('home')} />;
      default: return null;
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-24 animate-slide-up relative">
            {showDashboardPopup && (
              <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-brand-dark/40 backdrop-blur-sm">
                <div className="bg-brand-white p-12 md:p-20 max-w-2xl w-full text-center shadow-2xl border border-brand-primary/10 animate-slide-up">
                  <h2 className="text-3xl md:text-5xl font-serif text-brand-primary mb-6 tracking-tight">Welcome Back</h2>
                  <p className="text-slate-500 text-lg italic mb-10 leading-relaxed">You can choose the section you want to continue learning about from the catalog below.</p>
                  <button 
                    onClick={() => setShowDashboardPopup(false)}
                    className="bg-brand-primary text-white px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-brand-secondary transition-all"
                  >
                    Got it
                  </button>
                </div>
              </div>
            )}
            {/* Recent Updates */}
            <div className="mb-12 md:mb-16 bg-brand-beige/30 border border-brand-primary/5 p-6 md:p-12">
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-brand-secondary mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse"></span>
                Recent Updates
              </h2>
              <div className="space-y-4">
                {(content.common as any).updates?.map((update: any, idx: number) => (
                  <div key={idx} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 border-b border-brand-primary/5 pb-4 last:border-0 last:pb-0">
                    <span className="font-mono text-[10px] md:text-[11px] font-bold text-brand-primary/40">{update.date}</span>
                    <p className="text-xs md:text-sm text-brand-primary/80 font-medium">{update.content}</p>
                  </div>
                ))}
              </div>
            </div>
            {renderDashboard()}
          </div>
        );

      case 'platform':
        return (
          <div className="max-w-4xl mx-auto px-6 py-32 text-center animate-slide-up">
            <div className="flex justify-start mb-8">
              <button onClick={resetToHome} className="text-brand-primary/50 hover:text-brand-primary font-bold uppercase text-[10px] md:text-[11px] tracking-widest transition-all">
                <i className="fas fa-arrow-left mr-2"></i> {labels.home}
              </button>
            </div>
            <h2 className="text-brand-secondary font-black uppercase tracking-[0.6em] text-xs mb-10">Step 1</h2>
            <h1 className="text-6xl font-serif text-brand-primary mb-8 tracking-tighter">Choose Your Platform</h1>
            {isOnboarding && (
              <p className="text-slate-500 mb-16 max-w-2xl mx-auto italic text-sm md:text-base leading-relaxed">
                For your first collaboration with us, we encourage you to review the complete collaboration guidelines. 
                The process takes approximately five minutes and ensures alignment with our brand standards.
              </p>
            )}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center mt-12">
              <button 
                onClick={() => handlePlatformSelect('IG')}
                className="flex-1 w-full md:w-auto bg-brand-white p-10 md:p-14 border-2 border-brand-primary/10 hover:border-brand-primary transition-all rounded-none group shadow-sm hover:shadow-xl"
              >
                <i className="fab fa-instagram text-5xl md:text-7xl text-brand-secondary mb-6 group-hover:scale-110 transition-transform"></i>
                <p className="font-black uppercase tracking-widest text-brand-primary text-sm md:text-base">Instagram</p>
              </button>
              <button 
                onClick={() => handlePlatformSelect('YT')}
                className="flex-1 w-full md:w-auto bg-brand-white p-10 md:p-14 border-2 border-brand-primary/10 hover:border-brand-primary transition-all rounded-none group shadow-sm hover:shadow-xl"
              >
                <i className="fab fa-youtube text-5xl md:text-7xl text-brand-secondary mb-6 group-hover:scale-110 transition-transform"></i>
                <p className="font-black uppercase tracking-widest text-brand-primary text-sm md:text-base">YouTube</p>
              </button>
              <button 
                onClick={() => {
                  navigateTo('tiktokInfo');
                }}
                className="flex-[0.6] w-full md:w-auto bg-brand-white p-6 md:p-10 border-2 border-brand-primary/10 hover:border-brand-primary transition-all rounded-none group shadow-sm hover:shadow-lg"
              >
                <i className="fab fa-tiktok text-3xl md:text-5xl text-brand-secondary mb-4 group-hover:scale-110 transition-transform"></i>
                <p className="font-black uppercase tracking-[0.2em] text-[10px] md:text-xs text-brand-primary">TikTok</p>
              </button>
            </div>
          </div>
        );

      case 'tiktokInfo':
        return (
          <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center animate-slide-up">
            <div className="flex justify-start mb-8">
              <button onClick={() => navigateTo('platform')} className="text-brand-primary/50 hover:text-brand-primary font-bold uppercase text-[10px] md:text-[11px] tracking-widest transition-all">
                <i className="fas fa-arrow-left mr-2"></i> Back
              </button>
            </div>
            <div className="bg-brand-white p-8 md:p-16 border border-brand-primary/10 shadow-xl max-w-2xl mx-auto">
              <i className="fab fa-tiktok text-6xl text-brand-secondary mb-8"></i>
              <h1 className="text-3xl md:text-5xl font-serif text-brand-primary mb-6 tracking-tighter">TikTok Collaboration</h1>
              <p className="text-slate-600 text-lg md:text-xl font-light italic leading-relaxed mb-8">
                Since TikTok is managed by a different team, please feel free to reach out to them directly if you're interested:
              </p>
              <a 
                href="mailto:tiktokinfo@cosyisland.co" 
                className="text-xl md:text-3xl font-serif text-brand-secondary hover:underline tracking-tight"
              >
                tiktokinfo@cosyisland.co
              </a>
            </div>
          </div>
        );

      case 'ytType':
        return (
          <div className="max-w-4xl mx-auto px-6 py-32 text-center animate-slide-up">
            <div className="flex justify-start mb-8">
              <button onClick={() => navigateTo('platform')} className="text-brand-primary/50 hover:text-brand-primary font-bold uppercase text-[10px] md:text-[11px] tracking-widest transition-all">
                <i className="fas fa-arrow-left mr-2"></i> Back
              </button>
            </div>
            <h2 className="text-brand-secondary font-black uppercase tracking-[0.6em] text-xs mb-10">Step 2</h2>
            <h1 className="text-6xl font-serif text-brand-primary mb-16 tracking-tighter">Select Video Type</h1>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <button 
                onClick={() => handleYTTypeSelect('dedicated')}
                className="flex-1 bg-brand-white p-12 border-2 border-brand-primary/10 hover:border-brand-primary transition-all rounded-none group"
              >
                <i className="fas fa-video text-4xl text-brand-secondary mb-6 group-hover:scale-110 transition-transform"></i>
                <p className="font-black uppercase tracking-widest text-brand-primary">Dedicated</p>
              </button>
              <button 
                onClick={() => handleYTTypeSelect('integrated')}
                className="flex-1 bg-brand-white p-12 border-2 border-brand-primary/10 hover:border-brand-primary transition-all rounded-none group"
              >
                <i className="fas fa-layer-group text-4xl text-brand-secondary mb-6 group-hover:scale-110 transition-transform"></i>
                <p className="font-black uppercase tracking-widest text-brand-primary">Integrated</p>
              </button>
            </div>
          </div>
        );

      case 'campaignType':
        return (
          <div className="max-w-4xl mx-auto px-6 py-32 text-center animate-slide-up">
            <div className="flex justify-start mb-8">
              <button onClick={() => navigateTo('platform')} className="text-brand-primary/50 hover:text-brand-primary font-bold uppercase text-[10px] md:text-[11px] tracking-widest transition-all">
                <i className="fas fa-arrow-left mr-2"></i> Back
              </button>
            </div>
            <h2 className="text-brand-secondary font-black uppercase tracking-[0.6em] text-xs mb-10">Step 2</h2>
            <h1 className="text-6xl font-serif text-brand-primary mb-16 tracking-tighter">Select Collaboration Theme</h1>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <button 
                onClick={() => { setActiveSeason('SS25'); navigateTo(isOnboarding ? 'requirement' : 'dashboard'); }}
                className="flex-1 bg-brand-white p-12 border-2 border-brand-primary/10 hover:border-brand-primary transition-all rounded-none"
              >
                <p className="font-black uppercase tracking-widest text-brand-primary">{content.singleColor.label}</p>
              </button>
              <button 
                onClick={() => { setActiveSeason('SS26'); navigateTo(isOnboarding ? 'requirement' : 'dashboard'); }}
                className="flex-1 bg-brand-white p-12 border-2 border-brand-primary/10 hover:border-brand-primary transition-all rounded-none"
              >
                <p className="font-black uppercase tracking-widest text-brand-primary">{content.multiColor.label}</p>
              </button>
            </div>
          </div>
        );

      case 'requirement': 
      case 'products': 
      case 'structure': 
      case 'hooks': 
      case 'cases': 
      case 'brand': 
      case 'media':
      case 'tech':
        return renderSectionContent(activeSection);
      
      default: return (
        <div className="animate-slide-up">
          <div className="w-full relative h-[50vh] md:h-[60vh] overflow-hidden bg-brand-dark">
            <img src={currentData.heroImage} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="COSY ISLAND" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
            
            {/* Seasonal Swatches */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex gap-2 md:gap-3">
              {content.common.seasonalColors.map(color => (
                <div key={color} style={{ backgroundColor: color }} className="w-6 h-10 md:w-8 md:h-12 shadow-2xl border border-white/10"></div>
              ))}
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
              <h1 className="text-4xl md:text-8xl font-black font-brand text-white mb-4 md:mb-8 tracking-[0.15em] drop-shadow-2xl">COSY ISLAND</h1>
              <p className="text-white/80 max-w-4xl mx-auto text-base md:text-xl font-light italic leading-relaxed">
                "We aspire to create a cosy island for your feet."
              </p>
            </div>
          </div>

          {/* Action Buttons Below Hero */}
          <div className="bg-brand-white py-16 md:py-24 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
              <button 
                onClick={startOnboarding}
                className="w-full md:w-[400px] bg-brand-primary text-white px-12 py-8 rounded-none font-black uppercase tracking-[0.3em] text-sm md:text-base hover:bg-brand-secondary transition-all transform hover:-translate-y-1 shadow-2xl border border-brand-primary/20 flex items-center justify-center gap-4 group"
              >
                FIRST TIME TO COLLABORATE 
              </button>
              <button 
                onClick={() => { setIsOnboarding(false); navigateTo('platform'); }}
                className="w-full md:w-[320px] bg-transparent text-brand-primary border-2 border-brand-primary/20 px-10 py-6 rounded-none font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:border-brand-primary hover:bg-brand-primary/5 transition-all flex items-center justify-center gap-3 group"
              >
                NOT FIRST TIME 
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  const renderProgressBar = () => {
    if (!isOnboarding || selectedPlatform !== 'IG') return null;

    const steps = [
      'platform',
      'campaignType',
      'requirement',
      'products',
      'structure',
      'media',
      'cases',
      'tech',
      'brand'
    ];
    
    const currentIndex = steps.indexOf(activeSection);
    if (currentIndex === -1) return null;
    
    const progress = ((currentIndex + 1) / steps.length) * 100;

    return (
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-brand-white/80 backdrop-blur-md border-t border-brand-primary/10 p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary/40">Onboarding Progress</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-brand-primary/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-brand-secondary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      <Header 
        season={activeSeason} 
        onSeasonChange={(s) => { setActiveSeason(s); navigateTo('home'); }} 
        onHome={resetToHome}
      />
      
      {activeSection !== 'home' && activeSection !== 'dashboard' && activeSection !== 'platform' && activeSection !== 'ytType' && activeSection !== 'campaignType' && (
        (selectedPlatform === 'YT' || !isOnboarding) && (
          <GlobalNav active={activeSection} onNavigate={navigateTo} labels={labels} />
        )
      )}

      <main className="pb-48">
        <motion.div
          key={activeSection}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {renderSection()}
        </motion.div>
      </main>

      {renderProgressBar()}
      <Footer />
    </div>
  );
};

export default App;