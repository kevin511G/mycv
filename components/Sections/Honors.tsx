import React from 'react';
import { HONORS } from '../../constants';
import Reveal from '../Reveal';

interface HonorsProps {
  openModal: (src: string, title: string) => void;
}

const Honors: React.FC<HonorsProps> = ({ openModal }) => {
  return (
    <section id="honors" className="py-24 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-white mb-12 text-center drop-shadow-md">榮譽與認證</h2>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {HONORS.map((honor, index) => (
            <Reveal key={honor.id} delay={index * 0.1}>
              <div 
                className={`glass-card p-8 rounded-2xl text-center group transition-colors cursor-pointer hover:border-opacity-100 ${
                    honor.id === 'nvidia' ? 'hover:border-[#76b900]/50' : 
                    honor.id === 'actinspace' ? 'hover:border-yellow-500/50' : 
                    'hover:border-blue-500/50'
                }`}
                onClick={() => openModal(honor.image, honor.title)}
              >
                <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${honor.iconClass} text-2xl ${honor.iconColorClass}`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{honor.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{honor.subtitle}</p>
                <div className="text-xs font-mono text-slate-500 bg-slate-900 py-1 px-3 rounded-full inline-block">
                  {honor.meta}
                </div>
                <p className="text-xs text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <i className="fa-solid fa-expand mr-1"></i> 點擊查看證書
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honors;