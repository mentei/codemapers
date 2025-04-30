
'use client'
import React, { useState } from 'react';
import { Card, CardContent } from 'app/components/ui/card'
import { Button } from 'app/components/ui/button';
import Header from './Header';






const pcs = [
    {
      id: 1,
      name: 'Basic PC - i3',
      cpu: 'Intel i3',
      gen: 10,
      ram: '8GB',
      storage: '256GB SSD',
      price: 300,
      rent: 20,
      image: 'https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Mid PC - i5',
      cpu: 'Intel i5',
      ram: '16GB',
      gen: 12,
      storage: '512GB SSD',
      price: 500,
      rent: 35,
      image: 'https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Low End PC - i5',
      cpu: 'Intel core i3',
      ram: '8GB',
      storage: '512GB SSD',
      gen: 10,
      price: 500,
      rent: 35,
      image: 'https://imgs.search.brave.com/unEGsbQUsLWqyxk8w6EmM9mxFQInEIa_EHZM4lfhRjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy13NXRy/Z2Nidi9pbWFnZXMv/c3RlbmNpbC8zNTB4/MzUwL3Byb2R1Y3Rz/Lzc4NzkvNjIxMTIv/MzkwYWYxODktMTc2/Yy00ZjkyLTkyNzQt/YzI1MTQ4N2EzZDdl/LjY2NDlkZDY3OWU0/YzhjZTJlOTg4Yjll/Y2RjNDZlOWRiX185/ODQ3My4xNjc2OTE1/OTIyLmpwZz9jPTI'
    },
    {
      id: 4,
      name: 'Mid PC - i5 Gen8',
      cpu: 'Intel i5',
      ram: '16GB',
      gen: 8,
      storage: '512GB SSD',
      price: 500,
      rent: 35,
      image: 'https://media.karousell.com/media/photos/products/2022/7/30/dell_vostro_3478_core_i5_gen_8_1659153658_82c77306'
    },
    {
      id: 5,
      name: 'Low End PC',
      cpu: 'Intel dual core',
      gen: 6,
      ram: '16GB',
      storage: '512GB SSD',
      price: 500,
      rent: 35,
      image: 'https://th.bing.com/th/id/OIF.A0iAauH3NtIN4VrKehTS0A?rs=1&pid=ImgDetMain'
    },

    {
        id:6,
        name:'Respberry Pi',
        cpu: 'ARM Cortex-A72',
        ram: '4GB',
        gen: 4 ,
        storage: '32GB eMMC',
        price: 500,
        rent: 35,
        image: 'https://th.bing.com/th/id/OIP.pnGwjqoNZp-fC10-qRqqHwHaE0?rs=1&pid=ImgDetMain'
    }
  ];
  

const cpuOptions = ['i3', 'i5', 'i7'];
const ramOptions = ['8GB', '16GB', '32GB'];
const storageTypes = ['HDD', 'SSD'];
const storageSizes = ['256GB', '512GB', '1TB'];

const getCustomPrice = (cpu: string, ram: string, type: string, size: string) => {
  let base = 100;
  if (cpu === 'i5') base += 100;
  if (cpu === 'i7') base += 200;
  if (ram === '16GB') base += 50;
  if (ram === '32GB') base += 100;
  if (type === 'SSD') base += 50;
  if (size === '512GB') base += 50;
  if (size === '1TB') base += 100;
  return base;
};

export default function PCStorePage() {
  const [cpu, setCpu] = useState('i3');
  const [ram, setRam] = useState('8GB');
  const [storageType, setStorageType] = useState('HDD');
  const [storageSize, setStorageSize] = useState('256GB');


  const customPrice = getCustomPrice(cpu, ram, storageType, storageSize);

  return (
    <div className="p-8 space-y-8">
        <Header/>
      <h1 className="text-3xl font-bold mb-6 text-center"> 🖥️ PC Rent / Buy Store</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pcs.map((pc) => (
          <Card key={pc.id} className="rounded-2xl shadow-xl">
           <CardContent className="p-4 space-y-2">
  <img
    src={pc.image}
    alt={pc.name}
    className="rounded-xl w-full h-48 object-cover mb-2 border"
  />
  <h2 className="text-xl font-semibold">{pc.name}</h2>
  <p>CPU: {pc.cpu}</p>
  <p>Generation: {pc.gen}</p>
  <p>RAM: {pc.ram}</p>
  <p>Storage: {pc.storage}</p>
  <p className="font-bold">💰 Buy: INR{pc.price} / Rent: INR{pc.rent}/mo</p>
  <div className="flex gap-2">
    <Button>Buy</Button>
    <Button variant="outline">Rent</Button>
  </div>
</CardContent>

          </Card>
        ))}
      </section>

      <section className="mt-12 p-6 bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4">🛠️ Build Your Custom PC</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>CPU</label>
            <select value={cpu} onChange={(e) => setCpu(e.target.value)} className="w-full p-2 rounded border">
              {cpuOptions.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label>RAM</label>
            <select value={ram} onChange={(e) => setRam(e.target.value)} className="w-full p-2 rounded border">
              {ramOptions.map((r) => <option key={r}>{r}</option>)}
            </select>
          </div>
          <div>
            <label>Storage Type</label>
            <select value={storageType} onChange={(e) => setStorageType(e.target.value)} className="w-full p-2 rounded border">
              {storageTypes.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label>Storage Size</label>
            <select value={storageSize} onChange={(e) => setStorageSize(e.target.value)} className="w-full p-2 rounded border">
              {storageSizes.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-4 text-xl font-semibold">
          💸 Estimated Rent: INR{customPrice}/mo
        </div>
        <Button className="mt-4">Rent Custom PC</Button>
      </section>
    </div>
  );
}
