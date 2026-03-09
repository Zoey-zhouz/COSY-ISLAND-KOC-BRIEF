import { GoogleGenAI, Type } from "@google/genai";

export const optimizeBrief = async (title: string, rawDescription: string, category: string) => {
  try {
    // Fix: Create a fresh GoogleGenAI instance inside the function call for reliable API key usage
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a professional and appealing influencer collaboration brief based on these details:
      Product: ${title}
      Category: ${category}
      Raw Input: ${rawDescription}
      
      The output should include a catchy intro, key selling points, and specific requirements for the influencer.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            refinedDescription: { type: Type.STRING },
            requirements: { type: Type.STRING },
            estimatedReward: { type: Type.STRING }
          },
          required: ["title", "refinedDescription", "requirements", "estimatedReward"],
          propertyOrdering: ["title", "refinedDescription", "requirements", "estimatedReward"]
        }
      }
    });

    // Fix: Access response.text as a property and ensure it is available and trimmed before parsing JSON
    const text = response.text?.trim();
    if (!text) {
      throw new Error("No text content returned from Gemini API");
    }
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Optimization Error:", error);
    return null;
  }
};