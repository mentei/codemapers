// app/learning-Zone/page.tsx
'use client'
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const dummyCourses = [
  {
    id: "1",
    title: "Mastering python",
    thumbnail: "/courses/python.jpg", 
    instructor: "Mehrux",
    videos: 45,
    duration: "3h 26m",
    price: "free",
    locked: false,
  },
  {
    id: "2",
    title: "C++ for beginners",
    thumbnail: "/courses/cpp.jpg",
    instructor: "Jenny cpp",
    videos: 32,
    duration: "2h 10m",
    price: "free",
    locked: false,
  },
  {
    id: "3",
    title: "Mastering frontend",
    thumbnail: "/courses/webdev.jpg",
    instructor: "Alex Films",
    videos: 52,
    duration: "4h 40m",
    price: "free",
    locked: true,
  },
  {
    id: "4",
    title: "Introduction to Artificial Intelligence",
    thumbnail: "/courses/ai.png",
    instructor: "Sophia AI",
    videos: 40,
    duration: "5h 30m",
    price: "free",
    locked: false,
  },
  {
    id: "5",
    title: "Ethics in Technology",
    thumbnail: "/courses/ethicsintech.png",
    instructor: "Dr. Priya",
    videos: 25,
    duration: "2h",
    price: "free",
    locked: false,
  },
  {
    id: "6",
    title: "Digital Marketing Fundamentals",
    thumbnail: "/courses/digitalmarketing.png",
    instructor: "John Doe",
    videos: 30,
    duration: "3h 15m",
    price: "free",
    locked: true,
  },
  {
    id: "7",
    title: "History of Modern Art",
    thumbnail: "/courses/modern-art.png",
    instructor: "Emily Harper",
    videos: 20,
    duration: "1h 45m",
    price: "free",
    locked: false,
  },
  {
    id: "8",
    title: "Basics of Cloud Computing",
    thumbnail: "/courses/cloud.png",
    instructor: "Anil Gupta",
    videos: 35,
    duration: "4h",
    price: "free",
    locked: false,
  },
  {
    id: "9",
    title: "Creative Writing Workshop",
    thumbnail: "/courses/writing.png",
    instructor: "Laura King",
    videos: 22,
    duration: "2h 30m",
    price: "free",
    locked: true,
  },
  {
    id: "10",
    title: "Machine Learning Simplified",
    thumbnail: "/courses/ml.png",
    instructor: "Rajesh Khanna",
    videos: 50,
    duration: "6h",
    price: "free",
    locked: false,
  },
  {
    id: "11",
    title: "Philosophy 101",
    thumbnail: "/courses/philosophy.png",
    instructor: "Dr. Elizabeth",
    videos: 28,
    duration: "3h",
    price: "free",
    locked: true,
  },
  {
    id: "12",
    title: "Cybersecurity Essentials",
    thumbnail: "/courses/cyber-security.png",
    instructor: "Michael Brown",
    videos: 33,
    duration: "3h 20m",
    price: "free",
    locked: false,
  },
];


export default function LearningZone() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-20">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        E-learning Zone <span className="text-2xl text-blue-500 p-4">Explore Courses</span></h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {dummyCourses.map((course, i) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-50 shadow rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 group"
          >
            <Link href={`/learning-Zone/${course.id}`}> 
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-800">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-500">by {course.instructor}</p>
                <p className="text-xs text-gray-500">
                  🎥 {course.videos} videos • ⏰ {course.duration}
                </p>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-red-500 font-semibold text-sm">
                    {course.price}
                  </span>
                  <button className="flex items-center gap-1 text-sm text-blue-600 group-hover:text-blue-800">
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
