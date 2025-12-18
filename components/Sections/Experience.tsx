import React from 'react';
import { EXPERIENCE } from '../../constants';
import Reveal from '../Reveal';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-850 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <Reveal>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">經歷與學歷</h2>
        </Reveal>
        
        <div className="relative border-l-2 border-slate-700 ml-4 space-y-12">
          {EXPERIENCE.map((exp) => (
            <Reveal key={exp.id} className="relative pl-8">
              <span 
                className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-slate-800 ${
                  exp.type === 'work' ? 'bg-primary' : 'bg-slate-600'
                }`}
              ></span>
              <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors">
                <span className={`text-xs font-mono mb-2 block ${exp.type === 'work' ? 'text-primary' : 'text-slate-500'}`}>
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-slate-400 text-sm mb-4">{exp.organization}</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;