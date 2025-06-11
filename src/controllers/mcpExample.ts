import { Request, Response } from "express";
import client from "../services/clientMCPServiceNow";

export const mcpExample = async (req: Request, res: Response) => {
  try {
    const payload = {
      user_message: "La pantalla de tareas no carga.",
      context: {
        app: "Tareas",
        user_id: "bryan.sanchez",
        platform: "Android",
      },
      tools: [],
      memory: [],
      instructions:
        "Responde paso a paso. Si no funciona, sugiere crear ticket.",
      model: "openai/gpt-4o",
    };

    const prompts = await client.listPrompts();
    console.log("Prompts disponibles:", prompts);

    const result = await client.getPrompt({
      name: "example-prompt",
      arguments: {
        user_message: "La pantalla de tareas no carga.",
        platform: "Android",
      },
    });

    console.log("🧠 Respuesta del modelo:", result);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Error al comunicarse con MCP" });
  }
};
