import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 glass-card border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Ming-Kang Ho
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors text-slate-300">關於我</a>
              <a href="#publications" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors text-slate-300">學術發表</a>
              <a href="#experience" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors text-slate-300">經歷與學歷</a>
              <a href="#projects" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors text-slate-300">亮點專案</a>
              <a href="#honors" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors text-slate-300">榮譽獎項</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;