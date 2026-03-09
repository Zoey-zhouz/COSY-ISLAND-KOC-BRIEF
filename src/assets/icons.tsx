import React from 'react';

export const Icons = {
  ClipboardList: () => <i className="fas fa-clipboard-list text-lg md:text-2xl"></i>,
  HighHeel: ({ className = "w-6 h-6 md:w-8 md:h-8" }: { className?: string }) => (
    <img 
      src="https://lh3.googleusercontent.com/d/19lsDHvyo5I-S0z6mC8SOf6Ijy3A54MDi" 
      className={className} 
      alt="Product Icon" 
      referrerPolicy="no-referrer"
    />
  ),
  Film: () => <i className="fas fa-film text-lg md:text-2xl"></i>,
  Images: () => <i className="fas fa-images text-lg md:text-2xl"></i>,
  Lightbulb: () => <i className="fas fa-lightbulb text-lg md:text-2xl"></i>,
  Microchip: () => <i className="fas fa-microchip text-lg md:text-2xl"></i>,
  BookOpen: () => <i className="fas fa-book-open text-lg md:text-2xl"></i>,
  Play: ({ className = "" }: { className?: string }) => <i className={`fas fa-play ${className}`}></i>,
  Times: ({ className = "" }: { className?: string }) => <i className={`fas fa-times ${className}`}></i>,
  Check: ({ className = "" }: { className?: string }) => <i className={`fas fa-check ${className}`}></i>,
  ChevronDown: ({ className = "" }: { className?: string }) => <i className={`fas fa-chevron-down ${className}`}></i>,
  ChevronUp: ({ className = "" }: { className?: string }) => <i className={`fas fa-chevron-up ${className}`}></i>,
  ExternalLink: ({ className = "" }: { className?: string }) => <i className={`fas fa-external-link-alt ${className}`}></i>,
  Home: ({ className = "" }: { className?: string }) => <i className={`fas fa-home ${className}`}></i>,
};
