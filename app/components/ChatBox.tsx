'use client';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react'; // optional icon lib (install if needed)

export default function ChatSupport() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<string[]>([]);

  const sendMessage = async () => {
    if (!input) return;

    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setChat([...chat, `You: ${input}`, `AI: ${data.reply}`]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 bg-black right-6 z-50">
      {/* Chat bubble icon */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 p-4 rounded-full text-white shadow-lg hover:scale-105 transition"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Card */}
      {open && (
        <div className="w-80 h-[420px] bg-black text-white shadow-xl rounded-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h2 className="font-semibold">Chat Support</h2>
            <button onClick={() => setOpen(false)} className="text-white text-xl">
              ×
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-2 overflow-y-auto text-sm ">
            {chat.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded max-w-[85%] ${
                  msg.startsWith('You:')
                    ? 'bg-purple-300 self-end ml-auto text-white text-right'
                    : 'bg-zinc-700 self-start mr-auto'
                }`}
              >
                {msg}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t p-2">
            <input
              className="flex-1 border text-green-50 px- py-1 rounded-l text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 rounded-r text-sm hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
