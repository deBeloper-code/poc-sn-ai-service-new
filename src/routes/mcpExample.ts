import express from "express";
import { mcpExample } from "../controllers/mcpExample";

const router = express.Router();
//@ts-ignore
router.post("/mcp", mcpExample);

export default router;
