
import React from 'react';
import { ProductConcept } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

interface ValidationToolsProps {
  concept: ProductConcept;
}

export const ValidationTools: React.FC<ValidationToolsProps> = ({ concept }) => {
  const data = [
    { name: 'Realistic', value: concept.validation.realisticScore },
    { name: 'Gap', value: 100 - concept.validation.realisticScore }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Score Card */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center">
        <h4 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">Feasibility Score</h4>
        <div className="h-48 w-48 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={180}
                endAngle={0}
                paddingAngle={0}
                dataKey="value"
              >
                <Cell fill="#2563eb" />
                <Cell fill="#f1f5f9" />
                <Label 
                   value={`${concept.validation.realisticScore}%`} 
                   position="center" 
                   className="font-outfit font-black text-2xl fill-slate-900" 
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-center text-slate-500 -mt-8">Based on technical & market complexity</p>
      </div>

      {/* Market Saturation */}
      <div className="bg-slate-900 p-6 rounded-3xl shadow-xl text-white">
        <h4 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Market Outlook</h4>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-slate-400 block mb-1">Saturation Level</span>
            <div className="text-xl font-bold font-outfit">{concept.validation.marketSaturation}</div>
          </div>
          <div className="h-[2px] bg-slate-800"></div>
          <div>
            <span className="text-xs text-slate-400 block mb-2">Differentiation Strategy</span>
            <ul className="space-y-2">
              {concept.validation.differentiationChecklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="h-5 w-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Improvement Suggestions */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <h4 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">How to Improve</h4>
        <ul className="space-y-4">
          {concept.validation.improvementSuggestions.map((suggestion, idx) => (
            <li key={idx} className="group flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {idx + 1}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{suggestion}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
