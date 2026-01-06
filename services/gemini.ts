
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userPrompt: string, history: { role: string, parts: { text: string }[] }[]) => {
  // Initializing within the function to ensure the latest API key from the environment is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role === 'assistant' ? 'model' : 'user', parts: h.parts })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: `You are the Gasgous Group AI Consultant. 
        Company Background:
        - Established: 1975 in Baghdad, Iraq.
        - Core Industries: Distribution, Medical Industry (Pharmaceuticals), Trading, and Consultation.
        - Key Services: Tender business, Pharmacovigilance (Safety reporting), Regulatory Affairs, Product Registration, Warehousing, and Medical Sales.
        - Branches: Baghdad (HQ), Basrah, Kurdistan (Iraq), and Amman (Jordan).
        - Partners: Represent international medical producers like Ferrer (Spain), Aldo-union (Spain), Novag, Lisapharma, and Ariston.
        
        Important Contacts:
        - Pharmacovigilance: Dr. Samer Mohammed (+9647700168800 | Pharmacovigilance@gasgousgroup.com)
        - Amman Office: Swifieh, Zahran Street, Suite 301 (+962 79 6500 555)
        - Baghdad Office: Hay Alwahda, Dist 904 (+964 7713883798)

        Your tone is professional, transparent, and authoritative on medical distribution. 
        If asked about reporting side effects or complaints, direct them to the Pharmacovigilance contact immediately.`,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while connecting to the AI consultant. Please check your API key configuration.";
  }
};
