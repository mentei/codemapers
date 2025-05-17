// 📂 constants.ts
export interface File {
  _id: string;
  filename: string;
  language: string;
  type: "file" | "folder";
  content?: string; // ✅ Added 'content' for IDE functionality
  children?: File[];
}

export const defaultCode: Record<string, string> = {
  javascript: `console.log("Hello, JavaScript!");`,
  typescript: `console.log("Hello, TypeScript!");`,
  python: `print("Hello, Python!")`,
  c: `#include <stdio.h>\nint main() {\n    printf("Hello, C!\\n");\n    return 0;\n}`,
  cpp: `#include <iostream>\nint main() {\n    std::cout << "Hello, C++!" << std::endl;\n    return 0;\n}`,
  java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`,
  html: `<h1>Hello, HTML!</h1>`,
  css: `body { background-color: lightblue; }`,
  php: `<?php echo "Hello, PHP!"; ?>`,
  ruby: `puts "Hello, Ruby!"`,
  go: `package main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello, Go!")\n}`,
  swift: `print("Hello, Swift!")`,
  kotlin: `fun main() { println("Hello, Kotlin!") }`,
  csharp: `using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, C#");\n    }\n}`,
  rust: `fn main() {\n    println!("Hello, Rust!");\n}`,
  dart: `void main() { print("Hello, Dart!"); }`,
  bash: `echo "Hello, Bash!"`,
  sql: `SELECT 'Hello, SQL!';`,
  elixir: `IO.puts "Hello, Elixir!"`,
};

export const fileExtensions: Record<string, string> = {
  javascript: "js",
  typescript: "ts",
  python: "py",
  c: "c",
  cpp: "cpp",
  java: "java",
  html: "html",
  css: "css",
  php: "php",
  ruby: "rb",
  go: "go",
  swift: "swift",
  kotlin: "kt",
  csharp: "cs",
  rust: "rs",
  dart: "dart",
  bash: "sh",
  sql: "sql",
  elixir: "ex",
};
