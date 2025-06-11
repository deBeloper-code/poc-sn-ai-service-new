"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.troubleshootIssue = void 0;
const openai_1 = require("../services/openai");
const troubleshootIssue = async (req, res) => {
    try {
        const { issueDescription } = req.body;
        if (!issueDescription) {
            return res
                .status(400)
                .json({ error: "Please provide an issue description." });
        }
        const suggestions = await (0, openai_1.getTroubleshootSuggestions)(issueDescription);
        return res.json({ suggestions });
    }
    catch (error) {
        console.error("Troubleshoot Error:", error);
        return res
            .status(500)
            .json({ error: "An error occurred while processing the request." });
    }
};
exports.troubleshootIssue = troubleshootIssue;
