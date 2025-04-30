import type { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { language, code } = req.body;
  if (!language || !code) {
    return res.status(400).json({ error: "Missing language or code" });
  }

  if (language === "javascript") {
    
    try {
      // Run code safely inside a child process
      exec(`node -e "${code}"`, (error, stdout, stderr) => {
        if (error) return res.status(400).json({ output: stderr });
        res.status(200).json({ output: stdout });
      });
    } catch (err:any) {
      res.status(500).json({ error:`Execution error: ${err.message}` });
    }
  } else {
    res.status(400).json({ error: "Execution for this language is not supported yet." });
  }
}
