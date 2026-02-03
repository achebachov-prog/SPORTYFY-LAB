
import React from 'react';
import { UserInputs } from '../types';
import { SPORTS, AUDIENCES, PROBLEM_AREAS, PLATFORMS } from '../constants';

interface InputFormProps {
  inputs: UserInputs;
  setInputs: React.Dispatch<React.SetStateAction<UserInputs>>;
  onGenerate: () => void;
}

export const InputForm: React.FC<InputFormProps> = ({ inputs, setInputs, onGenerate }) => {
  const isComplete = inputs.sport && inputs.audience && inputs.problemArea && inputs.platform;

  return (
    <div className="max-w-2xl mx-auto space-y-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Turn your vision into a concept.</h2>
        <p className="text-slate-500 text-lg">Select the core pillars of your sport business idea.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Which Sport?</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {SPORTS.map(s => (
              <button
                key={s}
                onClick={() => setInputs(p => ({ ...p, sport: s }))}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                  inputs.sport === s 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:bg-blue-50'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Target Audience</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {AUDIENCES.map(a => (
              <button
                key={a}
                onClick={() => setInputs(p => ({ ...p, audience: a }))}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                  inputs.audience === a 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:bg-blue-50'
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Problem to Solve</label>
          <select 
            value={inputs.problemArea}
            onChange={(e) => setInputs(p => ({ ...p, problemArea: e.target.value }))}
            className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          >
            <option value="">Select a challenge...</option>
            {PROBLEM_AREAS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Primary Platform</label>
          <div className="grid grid-cols-2 gap-2">
            {PLATFORMS.map(pl => (
              <button
                key={pl}
                onClick={() => setInputs(p => ({ ...p, platform: pl }))}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                  inputs.platform === pl 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:bg-blue-50'
                }`}
              >
                {pl}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onGenerate}
          disabled={!isComplete}
          className={`w-full py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
            isComplete 
              ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20' 
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.047a1 1 0 01.897.95V7h5.803a1 1 0 01.846 1.531l-7.991 12a1 1 0 01-1.637-1.114L10.7 13H4.897a1 1 0 01-.897-.95V3a1 1 0 011-1h6.303zM10.3 3.047h-4.303v7.953h5.7l-1.303 3.25L16.29 8H9.3v-4.953z" clipRule="evenodd" />
          </svg>
          Generate Concept
        </button>
      </div>
    </div>
  );
};
