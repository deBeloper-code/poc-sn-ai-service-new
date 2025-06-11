import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

const client = new Client(
  { name: "my-node-client", version: "1.0.0" },
  { capabilities: {} },
);

const transport = new SSEClientTransport(new URL("http://127.0.0.1:8000/sse"));

export const connectMCPClient = async () => {
  await client.connect(transport)
  console.log("✅ MCP client connected via SSE");
};

export default client;
