// // server/terminalServer.ts
// import express from "express";
// import { createServer } from "http";
// import { WebSocketServer } from "ws";
// import pty from "node-pty";

// const app = express();
// const server = createServer(app);
// const wss = new WebSocketServer({ server });

// wss.on("connection", (ws) => {
//   const shell = pty.spawn("bash", [], {
//     name: "xterm-color",
//     cols: 80,
//     rows: 24,
//     cwd: process.env.HOME,
//     env: process.env,
//   });

//   shell.on("data", (data) => {
//     ws.send(data);
//   });

//   ws.on("message", (msg) => {
//     shell.write(msg.toString());
//   });

//   ws.on("close", () => {
//     shell.kill();
//   });
// });

// server.listen(3001, () => {
//   console.log("✅ Terminal server running on http://localhost:3001");
// });
