// constants.ts

export const fileExtensions: Record<string, string> = {
    javascript: "js",
    typescript: "ts",
    python: "py",
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
  
  export const defaultCode: Record<string, string> = {
    javascript: `console.log("Hello JavaScript!");`,
    typescript: `console.log("Hello TypeScript!");`,
    python: `print("Hello Python!")`,
    cpp: `#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello C++!";\n  return 0;\n}`,
    java: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello Java!");\n  }\n}`,
    html: `<!DOCTYPE html>\n<html>\n<head><title>Hello</title></head>\n<body>\n  <h1>Hello HTML!</h1>\n</body>\n</html>`,
    css: `body {\n  background-color: #282c34;\n  color: white;\n}`,
    php: `<?php\necho "Hello PHP!";\n?>`,
    ruby: `puts "Hello Ruby!"`,
    go: `package main\nimport "fmt"\nfunc main() {\n  fmt.Println("Hello Go!")\n}`,
    swift: `print("Hello Swift!")`,
    kotlin: `fun main() {\n  println("Hello Kotlin!")\n}`,
    csharp: `using System;\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello C#!");\n  }\n}`,
    rust: `fn main() {\n  println!("Hello Rust!");\n}`,
    dart: `void main() {\n  print("Hello Dart!");\n}`,
    bash: `echo "Hello Bash!"`,
    sql: `SELECT 'Hello SQL!';`,
    elixir: `IO.puts "Hello Elixir!"`,
  };
  