"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getIncidentes_1 = require("../controllers/getIncidentes");
const router = express_1.default.Router();
//@ts-ignore
router.get("/incidents", getIncidentes_1.IncidentController.getIncidents);
//@ts-ignore
router.post("/new/incidents", getIncidentes_1.IncidentController.createIncident);
exports.default = router;
