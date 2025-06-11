import { Request, Response } from "express";
import { getTroubleshootSuggestions } from "../services/openai";

export const troubleshootIssue = async (req: Request, res: Response) => {
  try {
    
    const { issueDescription } = req.body;

    if (!issueDescription) {
      return res
        .status(400)
        .json({ error: "Please provide an issue description." });
    }

    const suggestions = await getTroubleshootSuggestions(issueDescription);

    return res.json({ suggestions });
  } catch (error) {
    console.error("Troubleshoot Error:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
};
