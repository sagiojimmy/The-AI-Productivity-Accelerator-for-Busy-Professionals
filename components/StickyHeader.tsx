import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const StickyHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 600; // Approx height of hero
      if (window.scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm z-50 py-3 transition-transform duration-300 transform translate-y-0">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="hidden md:block font-bold text-slate-800">AI Productivity Accelerator</div>
        <div className="flex items-center gap-4 ml-auto">
          <span className="hidden sm:inline text-sm font-medium text-slate-600 line-through">$1,835</span>
          <span className="hidden sm:inline text-lg font-bold text-slate-900">$297</span>
          <a href="#pricing">
            <Button variant="primary" size="sm">Enroll Now</Button>
          </a>
        </div>
      </div>
    </div>
  );
};