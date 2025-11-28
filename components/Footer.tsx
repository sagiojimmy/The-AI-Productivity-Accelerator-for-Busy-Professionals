import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-12 pb-8 border-t-2 border-black text-center text-sm text-gray-600 mt-12">
      <p className="mb-4 font-bold text-black">The AI Productivity Accelerator</p>
      <div className="space-x-4 mb-4">
        <a href="#" className="underline">Privacy Policy</a>
        <a href="#" className="underline">Terms of Service</a>
        <a href="#" className="underline">Contact Support</a>
      </div>
      <p>&copy; {new Date().getFullYear()} AI Productivity Accelerator. All rights reserved.</p>
    </footer>
  );
};