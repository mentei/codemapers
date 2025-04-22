
'use client'
import { useState } from 'react';

export default function ChatBox() {
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
    <div className="p-4 max-w-md mx-auto">
      <div className="space-y-2">
        {chat.map((msg, i) => (
          <div key={i} className="bg-gray-100 p-2 rounded">{msg}</div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          className="flex-1 border px-3 py-1 rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 rounded-r" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
