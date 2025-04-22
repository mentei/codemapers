"use client";

import Image from "next/image";
import { useState } from "react";

const dummyCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Angela Yu",
    rating: 4.8,
    reviews: "120,000",
    price: "₹499",
    image: "",
  },
  {
    id: 2,
    title: "Master Python 3 Programming",
    instructor: "Jose Portilla",
    rating: 4.6,
    reviews: "95,000",
    price: "₹449",
    // image: "https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg",
  },
  {
    id: 3,
    title: "C++ from Beginner to Expert",
    instructor: "John Doe",
    rating: 4.7,
    reviews: "80,000",
    price: "₹399",
    image: "https://img-c.udemycdn.com/course/240x135/1576854_9aeb_3.jpg",
  },
  {
    id: 4,
    title: "React JS Complete Guide",
    instructor: "Max Schwarzmüller",
    rating: 4.9,
    reviews: "150,000",
    price: "₹599",
    image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
  },
];

export default function LearningZone() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">🎓 Courses For You</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {dummyCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* <Image
            //   src={course.image}
              alt={course.title}
              width={400}
              height={200}
              className="w-full h-[160px] object-cover"
            /> */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">{course.title}</h2>
              <p className="text-sm text-gray-600">By {course.instructor}</p>
              <div className="flex items-center mt-2 space-x-2">
                <span className="text-yellow-500 font-semibold">{course.rating} ⭐</span>
                <span className="text-xs text-gray-500">({course.reviews})</span>
              </div>
              <p className="mt-2 text-indigo-600 font-bold text-lg">{course.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
