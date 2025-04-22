import { writeFileSync } from "fs";
import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

export async function POST(req: Request) {
  const { code, language } = await req.json();

  const fileMap: Record<string, { file: string; dockerfile: string }> = {
    javascript: { file: "temp.js", dockerfile: "app/docker/node-runner.Dockerfile" },
    python: { file: "temp.py", dockerfile: "app/docker/python.Dockerfile" },
    cpp: { file: "temp.cpp", dockerfile: "app/docker/cpp.Dockerfile" },
    java: { file: "Main.java", dockerfile: "app/docker/java.Dockerfile" },
    go: { file: "main.go", dockerfile: "app/docker/go.Dockerfile" },
    bash: { file: "script.sh", dockerfile: "app/docker/bash.Dockerfile" },
    rust: { file: "main.rs", dockerfile: "app/docker/rust.Dockerfile" },
    c: { file: "temp.c", dockerfile: "app/docker/c.Dockerfile" }
    
  };

  const langConfig = fileMap[language];
  if (!langConfig) return NextResponse.json({ output: "Unsupported language" });

  writeFileSync(langConfig.file, code);

  try {
    const { stdout, stderr } = await execPromise(
      `docker build -f ${langConfig.dockerfile} -t lang-temp . && docker run --rm lang-temp`
    );

    return NextResponse.json({ output: stdout || stderr });
  } catch (error: any) {
    return NextResponse.json({ output: error.message });
  }
}
