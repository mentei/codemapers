'use client'
import React, { useState } from 'react';
import { Card, CardContent } from 'app/components/ui/card';
import { Button } from 'app/components/ui/button';
import Header from './Header';
import { useSession } from "next-auth/react";

// Sample PCs List
const initialPCs = [
  { id: 1, name: 'Basic PC - i3', cpu: 'Intel i3', gen: 10, ram: '8GB', storage: '256GB SSD', price: 300, rent: 20, owner: "Admin", image: 'https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?q=80&w=1965&auto=format&fit=crop' },
  { id: 2, name: 'Mid PC - i5', cpu: 'Intel i5', gen: 12, ram: '16GB', storage: '512GB SSD', price: 500, rent: 35, owner: "Admin", image: 'https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg?auto=compress' },
];

export default function PCStorePage() {
  const { data: session } = useSession();
  const username = session?.user?.name || "Guest";
  const [pcs, setPcs] = useState(initialPCs);
  const [newPC, setNewPC] = useState({ name: "", cpu: "", gen: "", ram: "", storage: "", price: "", rent: "", image: "", owner: username });

  // Add New Rental PC
  const rentOutPC = () => {
    if (!newPC.name || !newPC.cpu || !newPC.ram || !newPC.storage || !newPC.price || !newPC.rent || !newPC.image) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    const newPCData = {
      ...newPC,
      id: pcs.length + 1,
    };
    setNewPC({ name: "", cpu: "", gen: "", ram: "", storage: "", price: "", rent: "", image: "", owner: username });
  };

  return (
    <div className="p-8 space-y-8">
      <Header />
      <h1 className="text-3xl font-bold text-center">👋 Welcome, {username}!</h1>
      <h2 className="text-2xl font-bold text-center">🖥️ PC Rent / Buy Store</h2>

      {/* PC Listings */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pcs.map((pc) => (
          <Card key={pc.id} className="rounded-2xl shadow-xl">
            <CardContent className="p-4 space-y-2">
              <img src={pc.image} alt={pc.name} className="rounded-xl w-full h-48 object-cover mb-2 border" />
              <h2 className="text-xl font-semibold">{pc.name}</h2>
              <p>CPU: {pc.cpu}</p>
              <p>Generation: {pc.gen}</p>
              <p>RAM: {pc.ram}</p>
              <p>Storage: {pc.storage}</p>
              <p className="font-bold">💰 Buy: INR{pc.price} / Rent: INR{pc.rent}/mo</p>
              <p className="font-bold text-blue-400">👨‍💻 Owner: {pc.owner}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Rent Your Own PC */}
      <section className="mt-12 p-6 bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4">🏡 List Your PC for Rent</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="PC Name" value={newPC.name} onChange={(e) => setNewPC({ ...newPC, name: e.target.value })} className="w-full p-2 rounded border" />
          <input placeholder="CPU Type" value={newPC.cpu} onChange={(e) => setNewPC({ ...newPC, cpu: e.target.value })} className="w-full p-2 rounded border" />
          <input placeholder="Generation" value={newPC.gen} onChange={(e) => setNewPC({ ...newPC, gen: e.target.value })} className="w-full p-2 rounded border" />
          <input placeholder="RAM Size" value={newPC.ram} onChange={(e) => setNewPC({ ...newPC, ram: e.target.value })} className="w-full p-2 rounded border" />
          <input placeholder="Storage (HDD/SSD)" value={newPC.storage} onChange={(e) => setNewPC({ ...newPC, storage: e.target.value })} className="w-full p-2 rounded border" />
          <input placeholder="Price (INR)" value={newPC.price} onChange={(e) => setNewPC({ ...newPC, price: e.target.value })} className="w-full p-2 rounded border" />
          <input placeholder="Rent per Month (INR)" value={newPC.rent} onChange={(e) => setNewPC({ ...newPC, rent: e.target.value })} className="w-full p-2 rounded border" />
          <input placeholder="Image URL" value={newPC.image} onChange={(e) => setNewPC({ ...newPC, image: e.target.value })} className="w-full p-2 rounded border" />
        </div>
        <Button className="mt-4" onClick={rentOutPC}>📤 List My PC for Rent</Button>
      </section>

      {/* Get Your Custom PC */}
      <section className="mt-12 p-6 bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4">🛠️ Build Your Custom PC</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="CPU Type (i3, i5, i7)" className="w-full p-2 rounded border" />
          <input placeholder="RAM Size (8GB, 16GB, 32GB)" className="w-full p-2 rounded border" />
          <input placeholder="Storage Type (SSD, HDD)" className="w-full p-2 rounded border" />
          <input placeholder="Price (INR)" className="w-full p-2 rounded border" />
        </div>
        <Button className="mt-4">🚀 Get Custom PC</Button>
      </section>
    </div>
  );
}
