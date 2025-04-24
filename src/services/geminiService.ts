import { Message } from '../types';

// The API key provided by the user
const API_KEY = "AIzaSyCQt3R-b5EpWgt8JI3GHnOLTgEXGWvcuVY";
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

// Function to format conversation history for the API
const formatConversationHistory = (messages: Message[]): { role: string; parts: { text: string }[] }[] => {
  return messages.map(message => ({
    role: message.sender === 'user' ? 'user' : 'model',
    parts: [{ text: message.content }]
  }));
};

// Generate response using Gemini API
export const generateGeminiResponse = async (
  userInput: string, 
  conversationHistory: Message[]
): Promise<string> => {
  try {
    // Create conversation context about car rentals
    const carRentalContext = `
      You are an AI assistant for a car rental company called AutoRent. Your purpose is to help customers with car rental inquiries,
      make bookings, provide information about available vehicles, pricing, locations, and rental policies.
      
      Be helpful, courteous, and provide detailed information about cars when asked.
      
      Available car types include:
      - Economy (from $35/day): Compact cars good for city driving and fuel efficiency
      - Midsize (from $45/day): Balanced comfort and fuel economy for longer trips
      - SUV (from $65/day): Spacious vehicles with more cargo space and all-terrain capabilities
      - Luxury (from $95/day): Premium vehicles with top-tier features and comfort
      - Electric (from $55/day): Environmental-friendly options with zero emissions

      Rental policies:
      - Minimum age: 21 years (25+ for luxury vehicles)
      - Valid driver's license required
      - Insurance options available
      - Unlimited mileage on most rentals
      - Fuel policy: Return with same fuel level
      
      Only provide information related to car rentals and don't make up specific details about locations or exact models unless asked.
      Keep responses friendly but professional, and avoid overly technical language.
    `;

    // Prepare the request payload
    const requestPayload = {
      contents: [
        {
          role: "user",
          parts: [{ text: carRentalContext }]
        },
        ...formatConversationHistory(conversationHistory.slice(-10)),
        {
          role: "user",
          parts: [{ text: userInput }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 800,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        }
      ]
    };

    // Make the API request
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', errorData);
      throw new Error(`Gemini API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    
    // Extract the response text
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      "I'm sorry, I couldn't generate a response. Please try again.";
    
    return responseText;
  } catch (error) {
    console.error('Error in generateGeminiResponse:', error);
    throw error;
  }
};