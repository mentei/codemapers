// app/learning-Zone/[courseId]/page.tsx
import Image from "next/image";
import { Lock, PlayCircle } from "lucide-react";

export default function CourseDetail() {
  return (
    <div className="bg-white min-h-screen py-10 px-6 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column */}
        <div className="lg:w-2/3 space-y-6">
          <div className="flex items-center gap-3">
            <Image
              src="/instructor.jpg"
              alt="instructor"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">
                Photoshop Essentials: Mastering Image Editing
              </h2>
              <p className="text-sm text-gray-500">by MEHRAX</p>
            </div>
          </div>

          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
            <Image
              src="/mountains.jpg"
              alt="thumbnail"
              fill
              className="object-cover"
            />
            <PlayCircle className="w-16 h-16 text-white absolute inset-0 m-auto cursor-pointer" />
          </div>

          {/* Course Meta */}
          <div className="text-sm text-gray-600 flex gap-6">
            <span>📅 5 Dec 2025</span>
            <span>🎥 45 videos</span>
            <span>⏰ 3 hours 26 minutes</span>
          </div>

          {/* About Course */}
          <div>
            <h3 className="text-xl font-semibold mb-2">About course</h3>
            <p className="text-gray-700">
              This beginner’s Photoshop course focuses on core image editing
              principles, covering essential tools and techniques to navigate
              Adobe Photoshop confidently. Students will gain hands-on
              experience in manipulation, color correction, retouching, and
              basic design, establishing a foundational skill set for image
              enhancement and graphic editing.
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/3 bg-gray-50 rounded-xl p-6 shadow space-y-6">
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <Image src="/mountains.jpg" alt="" width={40} height={40} className="rounded-md" />
                <div>
                  <p className="text-sm font-semibold">Course Preview</p>
                  <p className="text-xs text-gray-500">02:57</p>
                </div>
              </div>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 rounded">Free</span>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-700">Basic Tools in Photoshop</p>
              <span className="text-xs text-gray-500">05:12</span>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-700">Understanding Layers</p>
              <span className="text-xs text-gray-500">06:00</span>
            </div>

            {/* Locked items */}
            {[
              ["Introduction to Masks", "03:10"],
              ["Selecting Objects", "10:44"],
              ["Using Filters for Effects", "37:36"],
            ].map(([title, time], idx) => (
              <div key={idx} className="flex justify-between items-center text-gray-400">
                <p className="text-sm flex items-center gap-2">
                  <Lock size={14} /> {title}
                </p>
                <span className="text-xs">{time}</span>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="border-t pt-4 space-y-2">
            <div className="text-red-500 text-sm">🔥 3 hours left</div>
            <div className="text-lg font-semibold">
              <span className="line-through text-gray-400 mr-2">$90</span>
              <span className="text-red-600">$60</span>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-full font-semibold">
              Add to cart
            </button>
          </div>

          {/* Actions */}
          <div className="flex justify-around pt-4 text-gray-500 text-sm">
            <span>🔗 Share</span>
            <span>🎁 Gift</span>
            <span>❓ Questions</span>
            <span>🚩 Report</span>
          </div>
        </div>
      </div>
    </div>
  );
}
