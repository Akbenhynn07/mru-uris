import { useEffect, useState } from 'react';

export default function ApplyModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(true);

  // Disable page scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark backdrop blur */}
      <div 
        className="absolute inset-0 bg-[#0a0a0d]/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        className="relative bg-[#0d0d12]/90 border border-[#2b2b32] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300 hover:border-[#2dd4bf]/40"
        style={{
          boxShadow: '0 0 50px rgba(0,0,0,0.8), 0 0 25px rgba(45,212,191,0.05)',
          maxHeight: '90vh',
        }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2b2b32] bg-[#14141c]/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2dd4bf] animate-pulse" />
            <h3 className="font-semibold text-white tracking-wide text-sm sm:text-base">
              MRU-URIS Board Recruitment Application
            </h3>
          </div>
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="text-[#a3a3ab] hover:text-[#2dd4bf] transition-colors p-1.5 rounded-lg hover:bg-white/5"
            aria-label="Close modal"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="relative flex-1 bg-[#0a0a0d] overflow-y-auto">
          {/* Loader Overlay */}
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0d] z-10">
              <div className="relative w-12 h-12">
                {/* Outer spinner */}
                <div className="absolute inset-0 border-2 border-t-[#2dd4bf] border-r-transparent border-b-[#2dd4bf]/30 border-l-transparent rounded-full animate-spin" />
                {/* Inner core */}
                <div className="absolute inset-3 border border-[#2dd4bf]/20 rounded-full" />
              </div>
              <p className="text-xs text-[#a3a3ab] tracking-[2px] uppercase mt-4 animate-pulse">
                Loading Application Form...
              </p>
            </div>
          )}

          {/* Embedded IFrame */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfhuxQq7mGWZ6H5h2O_TFFWQRem0sRKS_0Gc1YD5Lqq9EXf8w/viewform?embedded=true"
            width="100%"
            height="650"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="w-full min-h-[60vh] sm:min-h-[70vh] bg-transparent"
            onLoad={() => setLoading(false)}
          >
            Loading form...
          </iframe>
        </div>
      </div>
    </div>
  );
}
