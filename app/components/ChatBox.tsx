"use client";
import { useState } from "react";
import { MessageCircle, Loader2 } from "lucide-react"; // Icons

export default function ChatSupport() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<{ sender: string; message: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;

    setChat([...chat, { sender: "👤 You", message: input }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setChat([...chat, { sender: "👤 You", message: input }, { sender: "Bhagi AI", message: data.reply }]);
    } catch (error) {
      setChat([...chat, { sender: "👤 You", message: input }, { sender: "Bhagi  AI", message: "Failed to respond" }]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button onClick={() => setOpen(true)} className="bg-[#00f3ff] p-4 rounded-full text-black shadow-neon hover:scale-110 transition">
          <MessageCircle size={28} />
        </button>
      )}

      {open && (
        <div className="w-80 h-[500px] bg-[#0a0a0a] text-white shadow-xl rounded-xl flex flex-col overflow-hidden border border-[#00f3ff]">
          {/* Header */}
          <div className="bg-[#00f3ff] text-black p-3 flex justify-between items-center shadow-neon">
            <h2 className="font-bold tracking-wide text-lg">⚡ Chat With Bhagi  AI 🧘</h2>
            <button onClick={() => setOpen(false)} className="text-black text-xl hover:text-gray-700 transition">
              ×
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm scrollbar-custom">
            {chat.map((msg, i) => (
              <div key={i} className={`p-2 rounded-lg max-w-[85%] ${msg.sender === "👤 You" ? "bg-[#f72585] text-white self-end ml-auto text-right" : "bg-[#1e293b] text-[#00f3ff] self-start mr-auto"} shadow-md`}>
                <span className="font-semibold">{msg.sender}:</span> {msg.message}
              </div>
            ))}

            {loading && (
              <div className="flex justify-center items-center text-[#00f3ff]">
                <Loader2 className="animate-spin h-6 w-6" />
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex border-t p-2 bg-[#1a1a1a]">
            <input
              className="flex-1 border-none bg-transparent text-[#00f3ff] px-3 py-2 rounded-l text-sm focus:outline-none placeholder:text-[#00f3ff]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="💬 Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} className="bg-[#00f3ff] text-black px-4 rounded-r text-sm hover:bg-[#00d2ff] transition shadow-neon">
              🚀 Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
