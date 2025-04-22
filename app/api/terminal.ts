import { exec } from "child_process";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { command } = req.body;

  exec(command, (error, stdout, stderr) => {
    if (error) res.json({ output: stderr });
    else res.json({ output: stdout });
  });
}
