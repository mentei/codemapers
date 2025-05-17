"use client";
import { useEffect, useState } from "react";
import { AiFillFile, AiFillFolder, AiFillFolderOpen } from "react-icons/ai"; // VS Code style icons

interface File {
  _id: string;
  filename: string;
  language: string;
  type: "file" | "folder";
  content?: string; // ✅ Added 'content' for file selection
  children?: File[];
  isOpen?: boolean;
}

export default function FileTree({ onSelectFile }: { onSelectFile: (file: File) => void }) {
  const [files, setFiles] = useState<File[]>([]);

  const fetchFiles = async () => {
    try {
      const res = await fetch("/api/files/get");
      const data = await res.json();

      if (!data.files || !Array.isArray(data.files)) {
        console.error("Invalid files response");
        setFiles([]);
        return;
      }

      setFiles(data.files);
    } catch (err) {
      console.error("Failed to load files", err);
      setFiles([]);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const toggleFolder = (file: File) => {
    file.isOpen = !file.isOpen;
    setFiles([...files]); // ✅ Properly updates state
  };

  const renderFileTree = (file: File) => (
    <div key={file._id} className="ml-4">
      {file.type === "folder" ? (
        <div
          className="font-bold cursor-pointer hover:text-blue-400 flex items-center"
          onClick={() => toggleFolder(file)}
        >
          {file.isOpen ? <AiFillFolderOpen className="mr-2 text-yellow-500" /> : <AiFillFolder className="mr-2 text-yellow-500" />}
          {file.filename}
        </div>
      ) : (
        <div
          className="cursor-pointer hover:text-cyan-400 flex items-center"
          onClick={() => onSelectFile(file)}
        >
          <AiFillFile className="mr-2 text-gray-500" /> {file.filename}
        </div>
      )}
      {file.isOpen && file.children && file.children.map(renderFileTree)}
    </div>
  );

  return (
    <div className="text-sm space-y-2">
      {files.length === 0 ? (
        <div className="text-gray-400">🚫 No files found</div>
      ) : (
        files.map(renderFileTree)
      )}
    </div>
  );
}
