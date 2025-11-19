import React, { useState } from 'react';
import { Fallacy, CategoryType } from '../types';
import { ChevronDown, ChevronUp, ShieldCheck, AlertTriangle, MessageSquare } from 'lucide-react';

interface FallacyCardProps {
  fallacy: Fallacy;
}

const FallacyCard: React.FC<FallacyCardProps> = ({ fallacy }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Dynamic border color based on category
  const getCategoryColor = (cat: CategoryType) => {
    switch (cat) {
      case CategoryType.REPUTATION: return 'border-l-amber-500 shadow-amber-900/20';
      case CategoryType.COMMUNICATION: return 'border-l-cyan-500 shadow-cyan-900/20';
      case CategoryType.COGNITIVE: return 'border-l-rose-500 shadow-rose-900/20';
      default: return 'border-l-gray-500';
    }
  };

  const getBadgeColor = (cat: CategoryType) => {
      switch (cat) {
        case CategoryType.REPUTATION: return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
        case CategoryType.COMMUNICATION: return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
        case CategoryType.COGNITIVE: return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
        default: return 'bg-gray-500/10 text-gray-400';
      }
  };

  return (
    <div 
      className={`bg-slate-800 rounded-lg border-l-4 ${getCategoryColor(fallacy.category)} shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] mb-4 cursor-pointer`}
      onClick={toggleExpand}
    >
      {/* Header Section */}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
                <span className={`text-xs font-bold px-2 py-1 rounded border ${getBadgeColor(fallacy.category)} uppercase tracking-wider`}>
                    {fallacy.context}
                </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-100 flex items-center gap-2">
              {fallacy.name}
              {fallacy.latinName && (
                <span className="text-sm font-sans font-normal text-slate-400 italic">
                  ({fallacy.latinName})
                </span>
              )}
            </h3>
            <p className="text-slate-400 mt-2 text-sm line-clamp-2">
              {fallacy.mechanism}
            </p>
          </div>
          <div className="ml-4 text-slate-500">
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 pb-6 bg-slate-800/50 border-t border-slate-700/50 animate-fade-in">
          
          {/* Example Section */}
          <div className="mt-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
            <div className="flex items-start gap-3">
              <MessageSquare className="text-blue-400 shrink-0 mt-1" size={18} />
              <div>
                <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wide mb-1">Örnek Vaka</h4>
                <p className="text-slate-300 italic text-sm leading-relaxed">"{fallacy.example}"</p>
              </div>
            </div>
          </div>

          {/* Defense Section */}
          <div className="mt-4 p-4 bg-gradient-to-r from-emerald-900/20 to-slate-900/20 rounded-lg border border-emerald-500/30">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-emerald-400 shrink-0 mt-1" size={18} />
              <div>
                <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wide mb-1">Hatt-ı Müdafaa (Savunma)</h4>
                <p className="text-slate-200 text-sm leading-relaxed">
                  {fallacy.defense}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FallacyCard;