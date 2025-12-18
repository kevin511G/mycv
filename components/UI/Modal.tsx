import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] p-4 m-4" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute -top-10 right-0 text-white hover:text-primary text-2xl transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="bg-slate-800 p-2 rounded-lg shadow-2xl border border-slate-700">
          <img 
            src={imageSrc} 
            alt={title} 
            className="max-h-[80vh] w-auto object-contain rounded mx-auto"
          />
          <div className="text-center mt-4 pb-2">
            <h3 className="text-lg font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;