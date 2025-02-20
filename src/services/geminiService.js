import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function gerarDescricaoComGemini(imageBuffer) {
    const prompt =
        "Gere um alt text em português do brasil para a seguinte imagem:";

    try {
        const image = {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: "image/png",
            },
        };

        const res = await model.generateContent(prompt, image);
        return res.response.text() || "Alt-text não disponível.";
    } catch (error) {
        console.error("Erro ao obter alt-text:", error.message, error);
        throw new Error("Erro ao obter o alt-text do Gemini.");
    }
}