import React, { useState } from 'react';
import { IMAGES } from '../../constants';
import Reveal from '../Reveal';

const Hero: React.FC = () => {
  const [isBioOpen, setIsBioOpen] = useState(false);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1 animate-fade-in-up">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Physics PhD • R&D Engineer
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            何明鋼 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Ming-Kang Ho</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            跨越<strong className="text-slate-200">理論物理</strong>與<strong className="text-slate-200">工程實作</strong>的界線。
            <br />專精於同步輻射實驗、自動化設備開發與 AI 數據分析。
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-slate-300 mb-8">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap text-primary"></i> 國立東華大學 物理博士 (2024/07)
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-briefcase text-primary"></i> NSRRC 博士級研究員
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-fingerprint text-green-400"></i> INFP-A 調停者
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ho.mk@nsrrc.org.tw" target="_blank" rel="noreferrer" className="px-6 py-3 bg-primary text-slate-900 font-bold rounded-lg hover:bg-sky-300 transition-colors shadow-lg shadow-primary/20 flex items-center">
              <i className="fa-solid fa-envelope mr-2"></i> 聯絡我
            </a>
            <button 
              onClick={() => setIsBioOpen(!isBioOpen)} 
              className="px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white transition-colors group flex items-center gap-2"
            >
              <span>關於我</span>
              <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isBioOpen ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          
          {/* Collapsible Bio Section */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-l-2 border-slate-700 ml-2 ${isBioOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pl-6 pb-4 text-slate-300 space-y-4 leading-relaxed">
              <p>
                我是一位熱衷於探究事物本質的物理學家，同時也是一位樂於動手解決問題的工程師。我的研究生涯始於對<strong className="text-white">磁性材料</strong>與<strong className="text-white">奈米科技</strong>的好奇，在國立東華大學攻讀博士學位期間，我專注於利用 X 光頻譜分析技術，深入探討材料在極端條件下的物理特性。
              </p>
              <p>
                除了學術研究，我擁有強烈的<strong className="text-white">實作精神 (Maker Spirit)</strong>。我不僅自行設計並組裝實驗設備（如自動化液體螺旋觀測設備、真空濕度量測系統），更擅長編寫程式（Python, Arduino）來實現自動化控制與數據分析。這種「軟硬整合」的能力，讓我不僅能提出理論假設，更能親手打造驗證這些假設的工具。
              </p>
              <p>
                目前在國家同步輻射研究中心 (NSRRC) 擔任博士級研究員，負責高階光束線站的建置與維運。我致力於引入 <strong className="text-white">AI 深度學習</strong> 技術來優化實驗流程與影像分析，期望能為科學研究帶來更高效、更精準的解決方案。
              </p>
            </div>
          </div>
        </div>
        
        {/* Profile Image */}
        <Reveal delay={0.2} className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 border-2 border-slate-700 rounded-full flex items-center justify-center bg-slate-800/80 backdrop-blur-sm overflow-hidden group">
               <img src={IMAGES.profile} alt="Ming-Kang Ho" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
            </div>
            
            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center shadow-xl animate-bounce-slow">
              <i className="fa-brands fa-python text-3xl text-yellow-500"></i>
            </div>
            <div className="absolute bottom-8 -left-8 w-14 h-14 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center shadow-xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
              <i className="fa-solid fa-microchip text-2xl text-primary"></i>
            </div>
            <div className="absolute -bottom-4 right-8 w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center shadow-xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
              <span className="font-bold text-xs text-green-400">AI</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;