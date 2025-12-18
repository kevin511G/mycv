import React, { useState } from 'react';
import { Publication } from '../../types';
import { TOP_PUBLICATIONS, MORE_PUBLICATIONS } from '../../constants';
import Reveal from '../Reveal';

interface PublicationsProps {
  openModal: (src: string, title: string) => void;
}

const Publications: React.FC<PublicationsProps> = ({ openModal }) => {
  const [showAll, setShowAll] = useState(false);

  const getBorderColor = (color?: string) => {
    switch (color) {
      case 'primary': return 'border-l-primary';
      case 'purple': return 'border-l-purple-500';
      case 'red': return 'border-l-red-500';
      case 'green': return 'border-l-green-500';
      default: return 'border-l-slate-700';
    }
  };

  const getBadgeColor = (color?: string) => {
    switch (color) {
      case 'primary': return 'text-primary bg-primary/10';
      case 'purple': return 'text-purple-400 bg-purple-500/10';
      case 'red': return 'text-red-400 bg-red-500/10';
      case 'green': return 'text-green-400 bg-green-400/10';
      default: return 'text-slate-400 bg-slate-500/10';
    }
  };

  const getHighlightColor = (color?: string) => {
    switch (color) {
      case 'primary': return 'text-primary';
      case 'purple': return 'text-purple-400';
      case 'red': return 'text-red-400';
      case 'green': return 'text-green-400';
      default: return 'text-slate-300';
    }
  };

  return (
    <section id="publications" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">精選學術發表</h2>
              <p className="text-slate-400">結合 AI 與材料科學的研究成果 (共 {TOP_PUBLICATIONS.length + MORE_PUBLICATIONS.length} 篇)</p>
            </div>
          </div>
        </Reveal>

        {/* Top Papers */}
        <div className="space-y-8" id="top-pubs">
          {TOP_PUBLICATIONS.map((pub, index) => (
            <Reveal key={pub.id} delay={index * 0.1}>
              <div className={`glass-card p-0 rounded-xl border-l-4 ${getBorderColor(pub.styleColor)} hover:bg-slate-800/80 transition-colors overflow-hidden`}>
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${getBadgeColor(pub.styleColor)}`}>{pub.year}</span>
                      <span className="text-xs font-mono text-slate-500">{pub.journal}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{pub.title}</h3>
                    <p className="text-sm text-slate-400 mb-2">{pub.authors}</p>
                    <p className="text-sm text-slate-300 mt-2">
                      <span className={`${getHighlightColor(pub.styleColor)} font-bold`}>Highlight:</span> {pub.highlight}
                    </p>
                  </div>
                  {pub.image && (
                    <div 
                      className="md:w-1/3 bg-slate-800/50 border-l border-slate-700/50 min-h-[150px] relative cursor-pointer group"
                      onClick={() => openModal(pub.image!, pub.title)}
                    >
                      <img 
                        src={pub.image} 
                        alt="Paper Abstract" 
                        className="w-full h-full object-cover p-2 absolute inset-0 transition-transform duration-300 group-hover:scale-105" 
                      />
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Hidden/More Papers */}
        <div 
          className={`space-y-6 mt-6 overflow-hidden transition-all duration-1000 ease-in-out ${showAll ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          {MORE_PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="glass-card p-4 rounded-xl border border-slate-700/50 opacity-80 hover:opacity-100 transition-opacity">
              <h4 className="font-bold text-white text-md">{pub.title}</h4>
              <p className="text-xs text-slate-400 mt-1">{pub.journal} ({pub.year})</p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="group bg-slate-800 border border-slate-700 text-slate-300 px-8 py-3 rounded-full hover:bg-slate-700 hover:text-white transition-all flex items-center justify-center mx-auto gap-2 shadow-lg"
          >
            <span>{showAll ? '收起部分發表' : `顯示更多學術發表 (${MORE_PUBLICATIONS.length}+)`}</span>
            <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-y-1'}`}></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Publications;