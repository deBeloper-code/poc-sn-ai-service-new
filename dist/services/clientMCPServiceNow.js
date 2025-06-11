"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMCPClient = void 0;
const index_js_1 = require("@modelcontextprotocol/sdk/client/index.js");
const sse_js_1 = require("@modelcontextprotocol/sdk/client/sse.js");
const client = new index_js_1.Client({ name: "my-node-client", version: "1.0.0" }, { capabilities: {} });
const transport = new sse_js_1.SSEClientTransport(new URL("http://127.0.0.1:8000/sse"));
const connectMCPClient = async () => {
    await client.connect(transport);
    console.log("✅ MCP client connected via SSE");
};
exports.connectMCPClient = connectMCPClient;
exports.default = client;
