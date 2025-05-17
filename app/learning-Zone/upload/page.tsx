'use client';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

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

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    
    const res = await fetch('/api/courses', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);
    alert("✅ Course Uploaded Successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#121212] text-white rounded-xl shadow-lg mt-8 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-400">🚀 Upload a New Course</h1>
      <p className="text-sm text-gray-400 text-center">Fill in the details below to add your course to the platform.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          placeholder="Course Title"
          onChange={e => setForm({ ...form, title: e.target.value })}
          className="w-full p-3 bg-gray-800 text-white rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input 
          placeholder="Instructor Name"
          onChange={e => setForm({ ...form, instructor: e.target.value })}
          className="w-full p-3 bg-gray-800 text-white rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea 
          placeholder="Course Description"
          onChange={e => setForm({ ...form, description: e.target.value })}
          className="w-full p-3 bg-gray-800 text-white rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input 
          placeholder="Course Image URL"
          onChange={e => setForm({ ...form, image: e.target.value })}
          className="w-full p-3 bg-gray-800 text-white rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input 
          placeholder="Instructor Image URL"
          onChange={e => setForm({ ...form, authorImage: e.target.value })}
          className="w-full p-3 bg-gray-800 text-white rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button 
          type="submit"
          className="w-full py-3 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 transition-all flex justify-center items-center gap-2"
        >
          {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "🚀 Upload Course"}
        </button>
      </form>
    </div>
  );
}
