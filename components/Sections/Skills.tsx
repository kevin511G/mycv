import React from 'react';
import { SKILLS } from '../../constants';

const Skills: React.FC = () => {
  return (
    <div className="w-full bg-slate-800/50 border-y border-slate-800 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Technical Arsenal</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {SKILLS.map((skill) => (
            <span key={skill} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-sm text-primary hover:bg-slate-700 transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;