'use client';
import { LiaArrowRightSolid } from "react-icons/lia";
import Image from 'next/image';

const CommunitySection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-gradient-to-br from-blue-900 to-black flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
        {/* Gradient Box */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center font-extrabold text-2xl flex items-center justify-center rounded-lg h-40 shadow-lg">
          OUR <br /> COMMUNITY
        </div>

        {/* Top Right Image */}
        <div className="relative h-40 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/community-1.jpg"
            alt="Community Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Bottom Left Image */}
        <div className="relative h-40 rounded-lg overflow-hidden col-span-2 shadow-lg">
          <Image
            src="/community-2.jpg"
            alt="Community Image 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6">
          Where curiosity meets collaboration, and ideas spark innovation.
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          The **Codemapers community** is built on **support, inclusivity, and limitless learning**. We believe in **empowering learners** from every corner of the world—because **big ideas don’t need big cities**. Whether you're a beginner or an expert, we’ve created a **safe space to grow, build, and connect** with like-minded innovators.
        </p>

        <button className="inline-flex items-center bg-white text-black border border-gray-300 shadow-lg rounded-full px-6 py-3 font-bold hover:bg-gray-100 transition">
          Join Us
          <LiaArrowRightSolid className='ml-3 text-blue-500'/>
        </button>
      </div>
    </section>
  );
};

export default CommunitySection;
