// app/components/AboutSection.tsx
'use client';
import { LiaArrowRightSolid } from "react-icons/lia";
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-black  flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
        {/* Blue Box */}
        <div className="bg-purple-600 text-white text-center font-bold text-xl flex items-center justify-center rounded-lg h-40">
          ABOUT <br /> US
        </div>

        {/* Top Right Image */}
        <div className="relative h-40 rounded-lg overflow-hidden">
          <Image
            src="/abou-1.jpg"
            alt="About 1"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Bottom Left Image */}
        <div className="relative h-40 rounded-lg overflow-hidden col-span-2">
          <Image
            src="/about-2.jpg"
            alt="About 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl text-white md:text-3xl font-semibold  mb-4">
          Never doubt that a small group of thoughtful, committed people can change the world.
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-6">
          Our endeavor has been to create world class travel and aviation technology solutions. 
          We believe in building strong partnerships with our customers to ensure that we are 
          able to deliver a robust and cost efficient solution to them.
        </p>

        <button className="inline-flex items-center bg-white text-black border border-gray-300 shadow-lg rounded-full px-6 py-3 font-medium hover:bg-gray-100 transition">
          Read more
          <LiaArrowRightSolid className='ml-3 text-blue-500'/>
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
