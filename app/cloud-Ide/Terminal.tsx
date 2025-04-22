"use client";
import { useEffect, useRef, useState } from "react";
import "xterm/css/xterm.css"; // ✅ this is okay to keep

export default function TerminalUI() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const termInstance = useRef<any>(null); // type gets inferred dynamically
  const socketRef = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    return () => {
      socketRef.current?.close();
      termInstance.current?.dispose();
    };
  }, []);

  const startTerminal = async () => {
    if (!terminalRef.current || isConnected) return;

    const { Terminal } = await import("xterm"); // ✅ dynamic import!

    const term = new Terminal({
      cursorBlink: true,
      fontFamily: "monospace",
      fontSize: 14,
      theme: {
        background: "#1a1d23",
      },
    });

    term.open(terminalRef.current);
    termInstance.current = term;

    const socket = new WebSocket("ws://localhost:3001");
    socketRef.current = socket;

    socket.onopen = () => {
      setIsConnected(true);
      term.writeln("✅ Connected to secure Docker terminal.\r\n");
    };

    socket.onmessage = (event) => {
      term.write(event.data);
    };

    socket.onclose = () => {
      setIsConnected(false);
      term.writeln("\r\n❌ Disconnected from terminal.");
    };

    socket.onerror = () => {
      setIsConnected(false);
      term.writeln("\r\n⚠️ Error connecting to terminal.");
    };

    term.onData((data) => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(data);
      }
    });
  };

  return (
    <div className="p-4 bg-[#0e1117] rounded-xl shadow-xl">
      <button
        onClick={startTerminal}
        disabled={isConnected}
        className={`${
          isConnected ? "bg-gray-600" : "bg-green-600 hover:bg-green-700"
        } text-white px-4 py-2 rounded mb-4 transition duration-200`}
      >
        {isConnected ? "🟢 Terminal Connected" : "▶️ Start Terminal"}
      </button>

      <div
        ref={terminalRef}
        className="w-full h-[400px] bg-black text-white rounded border border-gray-600"
      />
    </div>
  );
}
