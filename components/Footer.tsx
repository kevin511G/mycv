import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-8 items-center">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ho.mk@nsrrc.org.tw" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-slate-800 rounded-xl hover:bg-slate-700 hover:text-primary transition-all border border-slate-700 group">
            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text-left">
              <div className="text-xs text-slate-400">Email Me</div>
              <div className="font-bold text-white group-hover:text-primary transition-colors">ho.mk@nsrrc.org.tw</div>
            </div>
          </a>
          
          <a href="tel:+886976609011" className="flex items-center gap-3 px-6 py-3 bg-slate-800 rounded-xl hover:bg-slate-700 hover:text-green-400 transition-all border border-slate-700 group">
            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="text-left">
              <div className="text-xs text-slate-400">Call Me</div>
              <div className="font-bold text-white group-hover:text-green-400 transition-colors">+886 976609011</div>
            </div>
          </a>
        </div>
        <p className="text-slate-600 text-sm">
          &copy; 2025 Ming-Kang Ho. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;