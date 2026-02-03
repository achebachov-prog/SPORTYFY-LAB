
import React from 'react';
import { ProductConcept } from '../types';

interface OnePagerProps {
  concept: ProductConcept;
}

export const OnePager: React.FC<OnePagerProps> = ({ concept }) => {
  return (
    <div className="bg-white shadow-2xl rounded-[2rem] overflow-hidden border border-slate-100 max-w-5xl mx-auto mb-12 animate-in fade-in zoom-in-95 duration-700">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white px-8 py-12 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3">
             <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Verified Concept</span>
             <span className="h-1 w-1 bg-slate-600 rounded-full"></span>
             <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">Sportify Lab v1.0</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black font-outfit tracking-tight leading-none uppercase">
            {concept.name}
          </h1>
          <p className="text-blue-400 text-xl font-semibold max-w-2xl leading-relaxed italic">
            "{concept.pitch}"
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column - Core */}
        <div className="lg:col-span-8 p-8 lg:p-12 border-r border-slate-100 space-y-12">
          <section>
            <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">01. The Problem</h3>
            <p className="text-lg text-slate-700 font-medium leading-relaxed">{concept.problem}</p>
          </section>

          <section>
            <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">02. The Solution</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">{concept.solution}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {concept.keyFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {i+1}
                  </div>
                  <span className="text-sm font-bold text-slate-800">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
             <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">03. Unique Value Prop</h3>
             <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-200">
               <p className="text-xl font-bold font-outfit leading-snug">
                 {concept.uvp}
               </p>
             </div>
          </section>
        </div>

        {/* Right Column - Strategy */}
        <div className="lg:col-span-4 bg-slate-50/50 p-8 lg:p-12 space-y-12">
           <section>
             <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Target Audience</h3>
             <p className="text-slate-900 font-bold text-lg">{concept.targetAudience}</p>
           </section>

           <section>
             <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Business Model</h3>
             <div className="text-slate-900 font-bold text-lg flex items-start gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
               </svg>
               {concept.businessModel}
             </div>
           </section>

           <section>
             <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Main Competitors</h3>
             <ul className="space-y-3">
               {concept.competitors.map((c, i) => (
                 <li key={i} className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                   <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                   {c}
                 </li>
               ))}
             </ul>
           </section>

           <div className="pt-8 border-t border-slate-200">
             <div className="flex flex-col gap-4">
                <button 
                  onClick={() => window.print()} 
                  className="no-print w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Export One-Pager
                </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};
