import express from "express";
import { troubleshootIssue } from "../controllers/troubleshoot";

const router = express.Router();
//@ts-ignore
router.post("/troubleshooter", troubleshootIssue);

export default router;
