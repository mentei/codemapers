'use client'
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const dummyCourses = [
  { id: "1", title: "Mastering Python", thumbnail: "/courses/python.jpg", instructor: "Mehrux", videos: 45, duration: "3h 26m", price: "Free" },
  { id: "2", title: "C++ for Beginners", thumbnail: "/courses/cpp.jpg", instructor: "Jenny cpp", videos: 32, duration: "2h 10m", price: "Free" },
  { id: "3", title: "Mastering Frontend", thumbnail: "/courses/webdev.jpg", instructor: "Alex Films", videos: 52, duration: "4h 40m", price: "Free" },
];

export default function LearningZone() {
  const [courses, setCourses] = useState(dummyCourses);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses([...dummyCourses, ...data]);
    };
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 md:px-20">
      <h1 className="text-4xl font-bold mb-8 text-blue-400 text-center">🚀 E-learning Zone</h1>
      <p className="text-center text-gray-400 mb-6">Explore courses and start learning today!</p>

      {/* Upload Course Button */}
      <div className="flex justify-center mb-6">
      <Link href="/upload">
  <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-neon">
    <PlusCircle size={20} /> Upload Course
  </button>
</Link>

      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-900 shadow-neon rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 group"
          >
            <Link href={`/learning-Zone/${course.id}`}>
              <div className="relative w-full h-48 overflow-hidden">
                <Image src={course.thumbnail} alt={course.title} fill className="object-cover group-hover:scale-105 transition duration-300" />
              </div>

              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-blue-300">{course.title}</h2>
                <p className="text-sm text-gray-400">by {course.instructor}</p>
                <p className="text-xs text-gray-400">🎥 {course.videos} videos • ⏰ {course.duration}</p>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-green-400 font-semibold text-sm">{course.price}</span>
                  <button className="flex items-center gap-1 text-sm text-blue-400 group-hover:text-blue-500">
                    View <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
