
import React, { useState } from 'react';
import { Brief } from '../types';
import { optimizeBrief } from '../services/geminiService';

interface CreateBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (brief: Brief) => void;
}

const CreateBriefModal: React.FC<CreateBriefModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    description: '',
    requirements: '',
    productUrl: '',
    category: 'General',
    reward: '',
  });

  const handleGeminiOptimize = async () => {
    if (!formData.title || !formData.description) {
      alert("Please provide at least a title and a basic description for Gemini to work with.");
      return;
    }
    
    setLoading(true);
    const optimized = await optimizeBrief(formData.title, formData.description, formData.category);
    if (optimized) {
      setFormData({
        ...formData,
        description: optimized.refinedDescription,
        requirements: optimized.requirements,
        reward: optimized.estimatedReward,
      });
    }
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBrief: Brief = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
      imageUrl: `https://picsum.photos/seed/${formData.title}/800/600`,
      status: 'active',
      createdAt: Date.now(),
    };
    onSubmit(newBrief);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden my-8 animate-slide-up">
        <div className="bg-indigo-600 p-6 flex justify-between items-center text-white">
          <div>
            <h2 className="text-2xl font-bold">Post a New Brief</h2>
            <p className="text-indigo-100 text-sm">Tell influencers about your project</p>
          </div>
          <button onClick={onClose} className="hover:rotate-90 transition-transform">
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Product Title</label>
              <input 
                type="text" required
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                placeholder="e.g. Smart Watch Pro"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Brand Name</label>
              <input 
                type="text" required
                value={formData.brand}
                onChange={e => setFormData({...formData, brand: e.target.value})}
                placeholder="e.g. TechCo"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex justify-between items-center">
              Description
              <button 
                type="button"
                onClick={handleGeminiOptimize}
                disabled={loading}
                className="text-xs flex items-center gap-1 bg-indigo-50 text-indigo-600 px-2 py-1 rounded-lg hover:bg-indigo-100 disabled:opacity-50 transition-all border border-indigo-100"
              >
                <i className={`fas ${loading ? 'fa-spinner fa-spin' : 'fa-wand-magic-sparkles'}`}></i>
                {loading ? 'Optimizing...' : 'AI Enhance'}
              </button>
            </label>
            <textarea 
              required rows={4}
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              placeholder="What makes this product special?"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">KOL Requirements</label>
            <textarea 
              rows={3}
              value={formData.requirements}
              onChange={e => setFormData({...formData, requirements: e.target.value})}
              placeholder="What should the influencer do? (e.g. 1 Reel, 2 Stories)"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Reward / Budget</label>
              <input 
                type="text"
                value={formData.reward}
                onChange={e => setFormData({...formData, reward: e.target.value})}
                placeholder="e.g. $200 + Product"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Product URL</label>
              <input 
                type="url" required
                value={formData.productUrl}
                onChange={e => setFormData({...formData, productUrl: e.target.value})}
                placeholder="https://..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              />
            </div>
          </div>

          <div className="pt-4 flex gap-4">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 py-4 font-bold text-slate-500 hover:bg-slate-50 rounded-xl transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-[2] py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-200"
            >
              Publish Brief
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBriefModal;
