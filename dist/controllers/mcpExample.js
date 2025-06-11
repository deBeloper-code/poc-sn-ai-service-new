"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcpExample = void 0;
const clientMCPServiceNow_1 = __importDefault(require("../services/clientMCPServiceNow"));
const mcpExample = async (req, res) => {
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
            instructions: "Responde paso a paso. Si no funciona, sugiere crear ticket.",
            model: "openai/gpt-4o",
        };
        const prompts = await clientMCPServiceNow_1.default.listPrompts();
        console.log("Prompts disponibles:", prompts);
        const result = await clientMCPServiceNow_1.default.getPrompt({
            name: "example-prompt",
            arguments: {
                user_message: "La pantalla de tareas no carga.",
                platform: "Android",
            },
        });
        console.log("🧠 Respuesta del modelo:", result);
    }
    catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Error al comunicarse con MCP" });
    }
};
exports.mcpExample = mcpExample;
