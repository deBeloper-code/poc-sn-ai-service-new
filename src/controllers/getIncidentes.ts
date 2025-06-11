import { Request, Response } from "express";
import { createIssue, getIncidentsSN } from "../services/serviceNowClient";

export class IncidentController {
  static async getIncidents(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const { data } = await getIncidentsSN(id?.toString());
      return res.json(data.result);
    } catch (err: any) {
      IncidentController.handleError(err, res);
    }
  }

  static async createIncident(req: Request, res: Response) {
    try {
      const {
        id_issue,
        short_description,
        affected_application,
        assignment_group,
        assigned_to,
        description,
        reported_by,
      } = req.body;

      const payload = {
        id_issue,
        short_description,
        affected_application,
        assignment_group,
        assigned_to,
        description,
        reported_by,
      };
      const { data } = await createIssue(payload);
      return res.status(201).json(data);
    } catch (err: any) {
      IncidentController.handleError(err, res);
    }
  }

  private static handleError(err: any, res: Response) {
    if (err.response) {
      console.error("🔴 Status:", err.response.status);
      console.error("🔴 Headers:", err.response.headers);
      console.error("🔴 Data:", err.response.data);
    } else if (err.request) {
      console.error("🔴 Request:", err.request);
    } else {
      console.error("🔴 Error:", err.message);
    }

    res.status(500).json({ error: "Error en la petición a ServiceNow" });
  }
}
