import { createGoogleGenerativeAI } from "@ai-sdk/google";

export const googleGenerativeAI = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || '',
}); 
