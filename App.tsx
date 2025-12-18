import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Sections/Hero';
import Skills from './components/Sections/Skills';
import Publications from './components/Sections/Publications';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Honors from './components/Sections/Honors';
import Footer from './components/Footer';
import Modal from './components/UI/Modal';
import { ImageModalData } from './types';

const App: React.FC = () => {
  const [modalData, setModalData] = useState<ImageModalData>({
    isOpen: false,
    src: '',
    title: ''
  });

  const openModal = (src: string, title: string) => {
    setModalData({ isOpen: true, src, title });
  };

  const closeModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Publications openModal={openModal} />
        <Experience />
        <Projects openModal={openModal} />
        <Honors openModal={openModal} />
      </main>
      <Footer />
      
      <Modal 
        isOpen={modalData.isOpen} 
        onClose={closeModal} 
        imageSrc={modalData.src} 
        title={modalData.title} 
      />
    </div>
  );
};

export default App;