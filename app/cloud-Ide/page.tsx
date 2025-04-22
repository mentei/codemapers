"use client"
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import TerminalUI from "./Terminal";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

const defaultCode: Record<string, string> = {
  javascript: "console.log('Hello from JS!')",
  python: "print('Hello from Python')",
  cpp: "#include<iostream>\nint main(){ std::cout << \"Hello from C++\\n\"; return 0; }",
  c: "#include <stdio.h>\nint main() { printf(\"Hello from C!\\n\"); return 0; }",
  java: "public class Main { public static void main(String[] args) { System.out.println(\"Hello from Java\"); } }",
  go: "package main\nimport \"fmt\"\nfunc main() { fmt.Println(\"Hello from Go\") }",
  rust: "fn main() {\n    println!(\"Hello from Rust!\");\n}",
  bash: "echo Hello from Bash",
};

export default function CloudIDE() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(defaultCode["javascript"]);
  const [output, setOutput] = useState("");
  const [filename, setFilename] = useState("main");
  const [files, setFiles] = useState([]);

  const runCode = async () => {
    const res = await fetch("/api/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, language }),
    });
    const data = await res.json();
    setOutput(data.output);
  };

  const saveFile = async () => {
    await fetch("/api/files/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename, content: code, language }),
    });
    fetchFiles();
  };

  const fetchFiles = async () => {
    const res = await fetch("/api/files/get");
    const data = await res.json();
    setFiles(data.files);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const { data: session } = useSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[#0e1117] text-white p-4 font-mono flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#1a1d23] p-4 border-r border-cyan-700">
        <h2 className="text-xl font-bold mb-4 text-cyan-400">📁 Files</h2>
        <ul className="space-y-2">
          {files.map((file: any) => (
            <li
              key={file._id}
              onClick={() => {
                setCode(file.content);
                setFilename(file.filename);
                setLanguage(file.language);
              }}
              className="cursor-pointer hover:text-cyan-400 text-sm"
            >
              📄 {file.filename}.{file.language}
            </li>
          ))}
        </ul>
      </div>

      {/* Editor & Output */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-cyan-400">⚡ {session?.user?.name || "User"}'s Workspace</h1>
          <button
            onClick={() => signOut()}
            className="text-sm text-red-400 hover:underline"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-4 mb-2">
          <input
            type="text"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            className="bg-[#1a1d23] text-white p-2 rounded w-full border border-cyan-500"
            placeholder="Filename"
          />
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setCode(defaultCode[e.target.value]);
            }}
            className="bg-[#1a1d23] text-white border border-cyan-500 rounded p-2"
          >
            <option value="javascript">JavaScript 👽</option>
            <option value="python">Python 🐍</option>
            <option value="cpp">C++ 🤖</option>
            <option value="c">C ©️</option>
            <option value="java">Java ☕️</option>
            <option value="go">Go 🚀</option>
            <option value="rust">Rust ⚙️</option>
            <option value="bash">Bash 🐧</option>
          </select>
        </div>

        <Editor
          height="400px"
          theme="vs-dark"
          defaultLanguage={language}
          value={code}
          onChange={(value) => setCode(value || "")}
        />

        <div className="flex gap-2 mt-4">
          <button
            onClick={runCode}
            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 transition duration-200 text-white font-semibold rounded shadow-md"
          >
            ▶️ Run
          </button>
          <button
            onClick={saveFile}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 transition duration-200 text-white font-semibold rounded shadow-md"
          >
            💾 Save
          </button>
        </div>

        <div className="mt-6 bg-[#1a1d23] rounded p-4 shadow-inner overflow-auto">
          <h2 className="text-lg mb-2 text-green-400 font-semibold">📦 Output:</h2>
          <pre className="text-green-300 whitespace-pre-wrap text-sm">{output}</pre>
        </div>
      </div>
      <TerminalUI />
    </div>
  );
}