
import React from 'react';
import { Brief } from '../types';

interface BriefDetailProps {
  brief: Brief;
  onBack: () => void;
}

const BriefDetail: React.FC<BriefDetailProps> = ({ brief, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium mb-6 transition-colors"
      >
        <i className="fas fa-chevron-left"></i>
        Back to listings
      </button>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="relative h-96">
          <img 
            src={brief.imageUrl} 
            alt={brief.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <span className="bg-indigo-600 px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
              {brief.category}
            </span>
            <h1 className="text-4xl font-black mb-2">{brief.title}</h1>
            <p className="text-lg opacity-90 font-medium">by {brief.brand}</p>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <i className="fas fa-info-circle text-indigo-500"></i>
                  About the Product
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
                  {brief.description}
                </p>
              </section>

              <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <i className="fas fa-clipboard-list text-indigo-500"></i>
                  Collaboration Requirements
                </h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {brief.requirements}
                </p>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                <p className="text-indigo-600 text-sm font-bold uppercase tracking-wider mb-1">Offer Reward</p>
                <p className="text-3xl font-black text-indigo-900">{brief.reward}</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-slate-900">Project Info</h3>
                <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                  <span className="text-slate-500">Status</span>
                  <span className="text-green-600 font-bold uppercase">{brief.status}</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                  <span className="text-slate-500">Brand</span>
                  <span className="text-slate-900 font-medium">{brief.brand}</span>
                </div>
                <div className="flex justify-between text-sm py-2">
                  <span className="text-slate-500">Category</span>
                  <span className="text-slate-900 font-medium">{brief.category}</span>
                </div>
              </div>

              <a 
                href={brief.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-slate-900 hover:bg-black text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
              >
                Visit Product Link
              </a>

              <button className="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1">
                Apply to Collaborate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefDetail;
