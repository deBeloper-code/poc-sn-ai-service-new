
import express from "express";
import { IncidentController } from "../controllers/getIncidentes";

const router = express.Router();
//@ts-ignore
router.get("/incidents", IncidentController.getIncidents);
//@ts-ignore
router.post("/new/incidents", IncidentController.createIncident);

export default router;
