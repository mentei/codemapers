'use client'
import Image from "next/image";
import { PlayCircle } from "lucide-react";

export default function CourseDetail() {
  return (
    <div className="bg-black text-white min-h-screen py-10 px-6 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column */}
        <div className="lg:w-2/3 space-y-6">
          <div className="flex items-center gap-3">
            <Image
              src="/instructor.jpg"
              alt="Instructor"
              width={50}
              height={50}
              className="rounded-full border-2 border-blue-400"
            />
            <div>
              <h2 className="text-2xl font-bold text-blue-300">
                Photoshop Essentials: Mastering Image Editing
              </h2>
              <p className="text-sm text-gray-400">by MEHRAX</p>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden border border-blue-500 shadow-neon">
            <Image src="/mountains.jpg" alt="Thumbnail" fill className="object-cover" />
            <PlayCircle className="w-16 h-16 text-blue-500 absolute inset-0 m-auto cursor-pointer hover:scale-105 transition" />
          </div>

          {/* Course Meta */}
          <div className="text-sm flex gap-6 text-blue-200">
            <span>📅 5 Dec 2025</span>
            <span>🎥 45 videos</span>
            <span>⏰ 3 hours 26 minutes</span>
          </div>

          {/* About Course */}
          <div>
            <h3 className="text-xl font-bold text-blue-300 mb-2">About Course</h3>
            <p className="text-gray-300">
              This beginner’s Photoshop course focuses on core image editing principles, covering essential tools and techniques. 
              Students will gain hands-on experience in manipulation, color correction, retouching, and basic design, establishing 
              a foundational skill set for image enhancement and graphic editing.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 bg-gray-900 rounded-xl p-6 shadow-neon space-y-6">
          <h3 className="text-blue-300 font-bold text-lg text-center">📚 Course Content</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-500">
            {[
              ["Course Preview", "02:57"],
              ["Basic Tools in Photoshop", "05:12"],
              ["Understanding Layers", "06:00"],
              ["Introduction to Masks", "03:10"],
              ["Selecting Objects", "10:44"],
              ["Using Filters for Effects", "37:36"],
            ].map(([title, time], idx) => (
              <div key={idx} className="flex justify-between items-center text-white p-2 bg-gray-800 rounded-md shadow-md">
                <p className="text-sm">{title}</p>
                <span className="text-xs">{time}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex justify-around pt-4 text-blue-400 text-sm">
            <span>🔗 Share</span>
            <span>🎁 Gift</span>
            <span>❓ Questions</span>
            <span>🚀 Enroll Free</span>
          </div>
        </div>
      </div>
    </div>
  );
}
