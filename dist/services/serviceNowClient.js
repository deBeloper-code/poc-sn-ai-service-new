"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIssue = exports.getIncidentsSN = void 0;
const axios_1 = __importDefault(require("axios"));
const serviceNowClient = axios_1.default.create({
    baseURL: "https://dev189888.service-now.com/api/now",
    auth: {
        username: "aes.creator",
        password: "/9k/OYkEtUk4",
    },
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
const getIncidentsSN = async (id) => {
    if (id) {
        return await serviceNowClient.get(`/table/x_1085571_testin_0_issues`, {
            params: {
                sysparm_query: `id_issue=${id}`,
                sysparm_limit: 1,
            },
        });
    }
    return await serviceNowClient.get(`/table/x_1085571_testin_0_issues`);
};
exports.getIncidentsSN = getIncidentsSN;
const createIssue = async (payload) => {
    try {
        const response = await serviceNowClient.post("/table/x_1085571_testin_0_issues", payload);
        return response.data;
    }
    catch (error) {
        console.error("❌ Error al crear el issue:", error);
        throw error;
    }
};
exports.createIssue = createIssue;
exports.default = serviceNowClient;
