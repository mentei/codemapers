// app/cloud_ide/FileService.ts
export async function getFiles() {
    const res = await fetch("/api/files/get");
    return await res.json();
  }
  