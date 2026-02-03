
export interface ProductConcept {
  name: string;
  pitch: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  businessModel: string;
  targetAudience: string;
  competitors: string[];
  uvp: string; // Unique Value Proposition
  validation: {
    realisticScore: number;
    marketSaturation: string;
    differentiationChecklist: string[];
    improvementSuggestions: string[];
  };
}

export interface UserInputs {
  sport: string;
  audience: string;
  problemArea: string;
  platform: string;
}

export enum AppStep {
  INPUT = 'INPUT',
  GENERATING = 'GENERATING',
  RESULT = 'RESULT'
}
