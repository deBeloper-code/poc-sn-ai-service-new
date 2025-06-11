export function buildPrompt(issue: string): string {
  return `I received this user report:

"${issue}"

Please suggest 2 to 4 realistic troubleshooting steps that the user can try before creating an IT support ticket. Keep the explanation concise and practical.`;
}

export function formatSolutionsForPrompt(solutions: any[]): string {
  return solutions
    .map((item) => {
      const steps = item.solutions.map((s: any) => `- ${s}`).join("\n");
      return `Aplicación: ${item.app}\nProblema: ${item.issue}\nSoluciones:\n${steps}`;
    })
    .join("\n\n");
}
