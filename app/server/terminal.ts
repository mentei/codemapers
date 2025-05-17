// server/terminalServer.ts

import express from "express";
import { createServer } from "http";

// 🧠 TypeScript declaration fix: use // @ts-ignore if types not found
// @ts-ignore
import { WebSocketServer } from "ws";

// 🧠 TypeScript declaration fix for node-pty
// @ts-ignore
import pty from "node-pty";

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  const shell = pty.spawn("bash", [], {
    name: "xterm-color",
    cols: 80,
    rows: 24,
    cwd: process.env.HOME,
    env: process.env,
  });

  // ✅ Fix: specify type of 'data' to avoid 'any' warning
  shell.on("data", (data: string) => {
    ws.send(data);
  });

  ws.on("message", (msg: string | Buffer) => {
    shell.write(msg.toString());
  });

  ws.on("close", () => {
    shell.kill();
  });
});

server.listen(3001, () => {
  console.log("✅ Terminal server running on http://localhost:3001");
});
