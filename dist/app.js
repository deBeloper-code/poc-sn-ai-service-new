"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const troubleshoot_1 = __importDefault(require("./routes/troubleshoot"));
const mcpExample_1 = __importDefault(require("./routes/mcpExample"));
const incidents_1 = __importDefault(require("./routes/incidents"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/api", troubleshoot_1.default);
app.use("/api", mcpExample_1.default);
app.use("/api", incidents_1.default);
// connectMCPClient();
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
// startWebSocketServer();
