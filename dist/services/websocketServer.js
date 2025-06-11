"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startWebSocketServer = void 0;
const clientMCPServiceNow_1 = __importDefault(require("./clientMCPServiceNow"));
const startWebSocketServer = async () => {
    await clientMCPServiceNow_1.default.complete();
};
exports.startWebSocketServer = startWebSocketServer;
