'use client';
import { LiaArrowRightSolid } from "react-icons/lia";
import Image from 'next/image';

const WorkSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-gradient-to-br from-gray-900 to-black flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
        {/* Gradient Box */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-center font-extrabold text-2xl flex items-center justify-center rounded-lg h-40 shadow-lg">
          OUR <br /> WORK
        </div>

        {/* Top Right Image */}
        <div className="relative h-40 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/work-1.jpg"
            alt="Work Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Bottom Left Image */}
        <div className="relative h-40 rounded-lg overflow-hidden col-span-2 shadow-lg">
          <Image
            src="/work-2.jpg"
            alt="Work Image 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mb-6">
          Creating impact through innovation and collaboration.
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          At **Codemapers**, we **turn ideas into solutions** that matter. From groundbreaking tech tools to developer-friendly platforms, we **bridge the gap** between learning and real-world applications. We work with **communities, students, and innovators** to build projects that empower **the next generation of creators**.
        </p>

        <button className="inline-flex items-center bg-white text-black border border-gray-300 shadow-lg rounded-full px-6 py-3 font-bold hover:bg-gray-100 transition">
          See Our Work
          <LiaArrowRightSolid className='ml-3 text-blue-500'/>
        </button>
      </div>
    </section>
  );
};

export default WorkSection;
