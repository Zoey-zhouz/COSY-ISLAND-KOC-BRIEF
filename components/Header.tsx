import React from 'react';
import { CampaignSeason } from '../types';

interface HeaderProps {
  season: CampaignSeason;
  onSeasonChange: (season: CampaignSeason) => void;
  onHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ season, onSeasonChange, onHome }) => {
  return (
    <nav className="sticky top-0 z-[100] bg-brand-bg/95 backdrop-blur-lg border-b border-brand-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        <div 
          onClick={onHome}
          className="cursor-pointer group flex items-center gap-4"
        >
          <div className="text-3xl font-black font-brand text-brand-primary tracking-tighter group-hover:text-brand-secondary transition-colors">
            COSY ISLAND
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://cosyisland.co" target="_blank" className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-brand-primary/10 hover:bg-brand-primary hover:text-white transition-all shadow-sm">
            <i className="fas fa-globe text-base md:text-lg"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;