"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentController = void 0;
const serviceNowClient_1 = require("../services/serviceNowClient");
class IncidentController {
    static async getIncidents(req, res) {
        try {
            const { id } = req.query;
            const { data } = await (0, serviceNowClient_1.getIncidentsSN)(id?.toString());
            return res.json(data.result);
        }
        catch (err) {
            IncidentController.handleError(err, res);
        }
    }
    static async createIncident(req, res) {
        try {
            const { id_issue, short_description, affected_application, assignment_group, assigned_to, description, reported_by, } = req.body;
            const payload = {
                id_issue,
                short_description,
                affected_application,
                assignment_group,
                assigned_to,
                description,
                reported_by,
            };
            const { data } = await (0, serviceNowClient_1.createIssue)(payload);
            return res.status(201).json(data);
        }
        catch (err) {
            IncidentController.handleError(err, res);
        }
    }
    static handleError(err, res) {
        if (err.response) {
            console.error("🔴 Status:", err.response.status);
            console.error("🔴 Headers:", err.response.headers);
            console.error("🔴 Data:", err.response.data);
        }
        else if (err.request) {
            console.error("🔴 Request:", err.request);
        }
        else {
            console.error("🔴 Error:", err.message);
        }
        res.status(500).json({ error: "Error en la petición a ServiceNow" });
    }
}
exports.IncidentController = IncidentController;
