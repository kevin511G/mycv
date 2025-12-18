import React from 'react';
import { PROJECTS } from '../../constants';
import Reveal from '../Reveal';

interface ProjectsProps {
  openModal: (src: string, title: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ openModal }) => {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">亮點專案實作</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">從物理原理到軟硬體整合的全端工程展示</p>
        </Reveal>

        {PROJECTS.map((project) => (
          <div key={project.id} className="mb-24">
            {project.layout === 'center' ? (
              // Center layout (Video style)
              <Reveal>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group h-[500px] flex items-center justify-center bg-slate-800">
                  {project.video ? (
                    <video 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      poster={project.mainImage}
                      className="absolute inset-0 w-full h-full object-cover opacity-50"
                    >
                      <source src={project.video} type="video/mp4" />
                      {/* Fallback image if video fails or not supported */}
                      <img src={project.mainImage} alt="Video fallback" className="w-full h-full object-cover"/>
                    </video>
                  ) : (
                    <img src={project.mainImage} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-900/70 transition-opacity duration-500 group-hover:bg-slate-900/60"></div>

                  <div className="relative z-10 p-8 md:p-12 max-w-4xl text-center">
                    <div className="inline-block px-3 py-1 mb-4 text-primary text-xs font-bold rounded-full border border-primary/30 bg-slate-900/50 backdrop-blur-md shadow-lg">
                      {project.category}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-xl tracking-wide text-shadow">{project.title}</h3>
                    <p className="text-slate-100 mb-8 leading-relaxed text-lg drop-shadow-md font-light text-shadow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      {project.features.map((feat, i) => (
                        <span key={i} className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-500/50 backdrop-blur-sm text-sm text-slate-200 shadow-md">
                          <i className="fa-solid fa-check text-green-400"></i> {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ) : (
              // Split layout (Left/Right)
              <Reveal>
                <div className="glass-card rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div className={`${project.layout === 'right' ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full border ${project.layout === 'right' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-accent/10 text-accent border-accent/20'}`}>
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-slate-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {project.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300">
                            <i className="fa-solid fa-check text-green-400 mt-1"></i>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image Side */}
                    <div className={`${project.layout === 'right' ? 'order-1 md:order-1' : 'order-1 md:order-2'} relative group space-y-4`}>
                      <div 
                        className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 aspect-[4/3] relative cursor-pointer"
                        onClick={() => openModal(project.mainImage, project.title)}
                      >
                         <img 
                          src={project.mainImage} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                         />
                      </div>
                      
                      {project.subImages && (
                        <div className="grid grid-cols-2 gap-4">
                          {project.subImages.map((sub, i) => (
                            <div 
                              key={i} 
                              className="rounded-lg border border-slate-700 aspect-video relative bg-slate-800 cursor-pointer overflow-hidden"
                              onClick={() => openModal(sub.src, sub.label)}
                            >
                              <img src={sub.src} alt={sub.label} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                              <div className="absolute bottom-1 left-1 bg-slate-900/80 px-1 text-[10px] rounded text-white">{sub.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;