'use client';
import { useState } from 'react';

export default function UploadCourse() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    instructor: '',
    image: '',
    authorImage: '',
    rating: 4.5,
    duration: '1h',
    reviews: 10,
    topics: [],
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/courses', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert("Uploaded ✅");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-6 space-y-4">
      <h1 className="text-2xl font-bold">Upload a New Course</h1>
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} className="w-full p-2 border rounded" />
      <input placeholder="Instructor" onChange={e => setForm({ ...form, instructor: e.target.value })} className="w-full p-2 border rounded" />
      <textarea placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} className="w-full p-2 border rounded" />
      <input placeholder="Image URL" onChange={e => setForm({ ...form, image: e.target.value })} className="w-full p-2 border rounded" />
      <input placeholder="Author Image URL" onChange={e => setForm({ ...form, authorImage: e.target.value })} className="w-full p-2 border rounded" />
      <button className="bg-indigo-600 text-white px-4 py-2 rounded">Upload</button>
    </form>
  );
}
