import React from 'react';
import { ActiveSection } from '../types';

interface GlobalNavProps {
  active: ActiveSection;
  onNavigate: (section: ActiveSection) => void;
  labels: { [key: string]: string };
}

const GlobalNav: React.FC<GlobalNavProps> = ({ active, onNavigate, labels }) => {
  const sections: { id: ActiveSection; label: string }[] = [
    { id: 'dashboard', label: 'Catalog' },
    { id: 'requirement', label: labels.rules || 'Requirement' },
    { id: 'products', label: labels.choice || 'Product' },
    { id: 'structure', label: labels.framework || 'Structure' },
    { id: 'media', label: labels.media || 'Media' },
    { id: 'cases', label: labels.inspiration || 'Excellent Cases' },
    { id: 'tech', label: labels.tech || 'Tech' },
    { id: 'brand', label: labels.story || 'Story' },
  ];

  return (
    <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-[140] w-[95%] max-w-2xl">
      <div className="bg-brand-dark/95 backdrop-blur-2xl rounded-full p-1 md:p-1.5 flex justify-between items-center shadow-2xl border border-white/5 overflow-x-auto no-scrollbar">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => onNavigate(s.id)}
            className={`flex-1 min-w-[50px] md:min-w-[60px] px-1 py-2 md:py-2.5 rounded-full text-[7px] md:text-[8px] font-black uppercase tracking-widest transition-all ${
              active === s.id 
              ? 'bg-brand-secondary text-white' 
              : 'text-white/40 hover:text-white'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GlobalNav;