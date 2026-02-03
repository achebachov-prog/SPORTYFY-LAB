
import { GoogleGenAI, Type } from "@google/genai";
import { ProductConcept, UserInputs } from "../types";

// Always use the process.env.API_KEY directly for initialization as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProductConcept = async (inputs: UserInputs): Promise<ProductConcept> => {
  const prompt = `Act as a world-class sports tech consultant and entrepreneur. 
    Generate a detailed digital product concept based on these parameters:
    Sport: ${inputs.sport}
    Audience: ${inputs.audience}
    Problem Area: ${inputs.problemArea}
    Platform: ${inputs.platform}

    Return a innovative, modern, and commercially viable business idea.`;

  // Select gemini-3-pro-preview for tasks requiring advanced reasoning and complex strategy.
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          pitch: { type: Type.STRING },
          problem: { type: Type.STRING },
          solution: { type: Type.STRING },
          keyFeatures: { type: Type.ARRAY, items: { type: Type.STRING } },
          businessModel: { type: Type.STRING },
          targetAudience: { type: Type.STRING },
          competitors: { type: Type.ARRAY, items: { type: Type.STRING } },
          uvp: { type: Type.STRING },
          validation: {
            type: Type.OBJECT,
            properties: {
              realisticScore: { type: Type.NUMBER, description: "Score from 0 to 100" },
              marketSaturation: { type: Type.STRING },
              differentiationChecklist: { type: Type.ARRAY, items: { type: Type.STRING } },
              improvementSuggestions: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ["realisticScore", "marketSaturation", "differentiationChecklist", "improvementSuggestions"]
          }
        },
        required: ["name", "pitch", "problem", "solution", "keyFeatures", "businessModel", "targetAudience", "competitors", "uvp", "validation"]
      }
    }
  });

  // Correctly access the generated text using the .text property (not a method).
  const text = response.text;
  if (!text) throw new Error("No response from AI");
  return JSON.parse(text) as ProductConcept;
};
