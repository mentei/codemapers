export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral",
      prompt: message,
      stream: false
    }),
  });

  const result = await response.json();

  console.log("Ollama Response 🔍", result);

  return Response.json({
    reply: result.response || "No response from model.",
  });
}
