'use client'
import React, { useState } from 'react';
import { Button } from 'app/components/ui/button';
import Header from './Header';

export default function CustomPCPage() {
  const [cpu, setCpu] = useState("i3");
  const [ram, setRam] = useState("8GB");
  const [storage, setStorage] = useState("256GB SSD");

  return (
    <div className="p-8 space-y-8">
      <Header />
      <h1 className="text-3xl font-bold mb-6 text-center">🛠️ Build Your Custom PC</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select value={cpu} onChange={(e) => setCpu(e.target.value)} className="w-full p-2 rounded border">
          <option>Intel i3</option>
          <option>Intel i5</option>
          <option>Intel i7</option>
        </select>
        <select value={ram} onChange={(e) => setRam(e.target.value)} className="w-full p-2 rounded border">
          <option>8GB</option>
          <option>16GB</option>
          <option>32GB</option>
        </select>
        <select value={storage} onChange={(e) => setStorage(e.target.value)} className="w-full p-2 rounded border">
          <option>256GB SSD</option>
          <option>512GB SSD</option>
          <option>1TB SSD</option>
        </select>
      </div>

      <Button className="mt-4">🚀 Get Custom PC</Button>
    </div>
  );
}
