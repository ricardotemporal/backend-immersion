import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

/**
 * Generates a description for an image using Google Gemini AI.
 * 
 * @param {Buffer} imageBuffer - The buffer containing the image data.
 * @returns {Promise<string>} A description of the image or a fallback text if unavailable.
 * @throws {Error} If the description generation fails.
 */
export default async function generateDescriptionWithGemini(imageBuffer) {
    const prompt = "Gere uma descrição em português do Brasil para a seguinte imagem";

    try {
        const image = {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: "image/png",
            },
        };

        const response = await model.generateContent([prompt, image]);
        return response.response.text() || "Alt-text não disponível.";
    } catch (error) {
        console.error("Error generating alt-text:", error.message, error);
        throw new Error("Failed to generate alt-text from Gemini.");
    }
}
