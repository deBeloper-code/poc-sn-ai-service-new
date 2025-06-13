import OpenAI from "openai";
import solutionsData from "../data/solutions.json";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY || "",
});

const initialMessage =
  "Before continuing, try the following: " +
  "Check if you are connected to the store's WiFi network. " +
  "Close the app and reopen it from scratch. " +
  "Restart your device to rule out temporary errors. " +
  "Check if you have the latest version installed from the store. " +
  "Try accessing from another device to see if the issue is local.";

// Transforma el JSON a texto entendible por la IA
function formatSolutionsForPrompt(): string {
  return solutionsData
    .map((item) => {
      const steps = item.solutions.map((s) => `- ${s}`).join("\n");
      return `Aplicación: ${item.app}\nProblema: ${item.issue}\nSoluciones:\n${steps}`;
    })
    .join("\n\n");
}

export async function getTroubleshootSuggestions(
  issueDescription: string,
): Promise<{
  initialMessage: string;
  steps: { step: number; suggestion: string }[];
}> {
  const solutionsContext = formatSolutionsForPrompt();

  const prompt = `
Actúa como un asistente técnico para asociados de tienda. Aquí tienes un historial de problemas y soluciones por aplicación:

${solutionsContext}

Con base en ese historial, analiza este reporte del usuario:

"${issueDescription}"

Devuélveme exactamente 3 pasos concretos y realistas, numerados. Enfócate en lo que el asociado puede intentar desde su dispositivo. Solo responde con los pasos, sin explicaciones adicionales.

Por ultimo, responde en ingles

`;

  const response = await openai.chat.completions.create({
    model: "gpt-4", // o "gpt-4o" si lo tienes disponible
    messages: [
      {
        role: "system",
        content:
          "Eres un agente técnico que da soluciones prácticas y deducidas con base en un historial de errores reales.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.3,
  });

  const rawResponse = response.choices[0].message.content || "";

  const structuredSteps = rawResponse
    .split(/\n+/)
    .filter((line) => /^\d+\.\s+/.test(line))
    .map((line, index) => ({
      step: index + 1,
      suggestion: line.replace(/^\d+\.\s*/, "").trim(),
    }));

  return {
    initialMessage,
    steps: structuredSteps.slice(0, 3),
  };
}
