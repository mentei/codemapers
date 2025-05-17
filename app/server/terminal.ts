import WebSocket from "ws";

const server = new WebSocket.Server({ port: 3001 });

server.on("connection", (socket) => {
  console.log("✅ Terminal connected!");

  socket.on("message", (data) => {
    console.log("Received:", data.toString());
    socket.send(`🖥️ Output: ${data}`); // ✅ Echo response for testing
  });

  socket.on("close", () => {
    console.log("❌ Terminal disconnected!");
  });

  socket.on("error", (err) => {
    console.error("⚠️ Terminal Error:", err);
  });
});

console.log("🚀 WebSocket Terminal Server started on ws://localhost:3001");
