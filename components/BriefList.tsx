
import React from 'react';
import { Brief } from '../types';

interface BriefListProps {
  briefs: Brief[];
  onSelect: (id: string) => void;
}

const BriefList: React.FC<BriefListProps> = ({ briefs, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {briefs.map((brief) => (
        <div 
          key={brief.id}
          className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer flex flex-col"
          onClick={() => onSelect(brief.id)}
        >
          <div className="relative h-56 overflow-hidden">
            <img 
              src={brief.imageUrl} 
              alt={brief.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
                {brief.category}
              </span>
            </div>
            <div className="absolute bottom-4 right-4">
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                {brief.reward}
              </span>
            </div>
          </div>
          
          <div className="p-6 flex-grow">
            <p className="text-sm font-medium text-indigo-500 mb-1">{brief.brand}</p>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {brief.title}
            </h3>
            <p className="text-slate-600 text-sm line-clamp-2">
              {brief.description}
            </p>
          </div>
          
          <div className="px-6 py-4 border-t border-slate-50 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              <i className="far fa-clock mr-1"></i>
              {new Date(brief.createdAt).toLocaleDateString()}
            </span>
            <span className="text-indigo-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
              View Brief <i className="fas fa-arrow-right ml-1"></i>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BriefList;
