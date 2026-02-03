
import React from 'react';

interface HeaderProps {
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onReset }) => {
  return (
    <header className="no-print sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={onReset}
        >
          <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tight font-outfit text-slate-900">
            SPORTIFY <span className="text-blue-600">LAB</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={onReset} className="text-slate-500 hover:text-blue-600 font-semibold transition-colors">Generate New</button>
          <div className="h-4 w-[1px] bg-slate-200"></div>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-sm">
            Pro Membership
          </button>
        </nav>
      </div>
    </header>
  );
};
