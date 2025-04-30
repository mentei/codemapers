// app/cloud_ide/FileTree.tsx
"use client";
import { useEffect, useState } from "react";

export default function FileTree({ onSelectFile }: { onSelectFile: (file: any) => void }) {
  const [files, setFiles] = useState<any[]>([]);

  const fetchFiles = async () => {
    try {
      const res = await fetch("/api/files/get");
      const data = await res.json();
      setFiles(data.files || []);
    } catch (err) {
      console.error("Failed to load files", err);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="text-sm space-y-2">
      {files.length === 0 ? (
        <div className="text-gray-400">No files</div>
      ) : (
        files.map((file) => (
          <div
            key={file._id}
            className="cursor-pointer hover:text-cyan-400"
            onClick={() => onSelectFile(file)}
          >
            📄 {file.filename}.{file.language}
          </div>
        ))
      )}
    </div>
  );
}
