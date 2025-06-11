"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPrompt = buildPrompt;
exports.formatSolutionsForPrompt = formatSolutionsForPrompt;
function buildPrompt(issue) {
    return `I received this user report:

"${issue}"

Please suggest 2 to 4 realistic troubleshooting steps that the user can try before creating an IT support ticket. Keep the explanation concise and practical.`;
}
function formatSolutionsForPrompt(solutions) {
    return solutions
        .map((item) => {
        const steps = item.solutions.map((s) => `- ${s}`).join("\n");
        return `Aplicación: ${item.app}\nProblema: ${item.issue}\nSoluciones:\n${steps}`;
    })
        .join("\n\n");
}
