
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { OnePager } from './components/OnePager';
import { ValidationTools } from './components/ValidationTools';
import { generateProductConcept } from './services/geminiService';
import { AppStep, ProductConcept, UserInputs } from './types';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.INPUT);
  const [inputs, setInputs] = useState<UserInputs>({
    sport: '',
    audience: '',
    problemArea: '',
    platform: ''
  });
  const [concept, setConcept] = useState<ProductConcept | null>(null);
  const [loadingMsg, setLoadingMsg] = useState('Consulting sports experts...');

  const handleGenerate = async () => {
    setStep(AppStep.GENERATING);
    setLoadingMsg('Analyzing market trends...');
    
    try {
      const messages = [
        'Defining unique value propositions...',
        'Benchmarking competitors...',
        'Calculating validation scores...',
        'Drafting business model options...',
        'Finalizing your product canvas...'
      ];
      
      let msgIndex = 0;
      const interval = setInterval(() => {
        setLoadingMsg(messages[msgIndex % messages.length]);
        msgIndex++;
      }, 2000);

      const result = await generateProductConcept(inputs);
      clearInterval(interval);
      setConcept(result);
      setStep(AppStep.RESULT);
    } catch (error) {
      console.error(error);
      alert('Failed to generate concept. Please check your API key or try again.');
      setStep(AppStep.INPUT);
    }
  };

  const reset = useCallback(() => {
    setStep(AppStep.INPUT);
    setConcept(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Header onReset={reset} />

      <main className="flex-grow px-4 py-8 lg:px-8 max-w-7xl mx-auto w-full">
        {step === AppStep.INPUT && (
          <InputForm inputs={inputs} setInputs={setInputs} onGenerate={handleGenerate} />
        )}

        {step === AppStep.GENERATING && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 animate-pulse">
            <div className="relative">
              <div className="w-24 h-24 border-8 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-outfit text-slate-900 tracking-tight">SPORTIFY LAB IS THINKING</h2>
              <p className="text-slate-500 font-medium">{loadingMsg}</p>
            </div>
          </div>
        )}

        {step === AppStep.RESULT && concept && (
          <div className="space-y-12 pb-20">
            <div className="text-center space-y-2 no-print">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
                 <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                 Success: Idea Generated
               </div>
               <h2 className="text-4xl font-black text-slate-900 font-outfit">Your Product Concept is Ready.</h2>
               <p className="text-slate-500 text-lg">We've mapped out the logic, the market, and the validation.</p>
            </div>
            
            <OnePager concept={concept} />
            
            <div className="no-print">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] flex-grow bg-slate-200"></div>
                <h3 className="text-slate-400 font-bold uppercase text-xs tracking-[0.2em] whitespace-nowrap">Validation Dashboard</h3>
                <div className="h-[1px] flex-grow bg-slate-200"></div>
              </div>
              <ValidationTools concept={concept} />
            </div>

            <div className="no-print pt-12 text-center">
               <button 
                 onClick={reset}
                 className="text-slate-500 hover:text-blue-600 font-bold text-sm transition-colors"
               >
                 Start Over with New Parameters
               </button>
            </div>
          </div>
        )}
      </main>

      <footer className="no-print bg-white border-t border-slate-200 py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 p-1.5 rounded text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-outfit font-black tracking-tight text-slate-900">
              SPORTIFY LAB
            </span>
          </div>
          <p className="text-slate-400 text-sm">© 2024 SPORTIFY LAB. Built for the next generation of sports entrepreneurs.</p>
          <div className="flex gap-6 text-slate-400 text-sm font-medium">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
