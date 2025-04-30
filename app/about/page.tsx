'use client';
import { LiaArrowRightSolid } from "react-icons/lia";
import Image from 'next/image';
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-gradient-to-br from-gray-900 to-black flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
        {/* Gradient Box */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center font-extrabold text-2xl flex items-center justify-center rounded-lg h-40 shadow-lg">
          ABOUT <br /> US
        </div>

        {/* Top Right Image */}
        <div className="relative h-40 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/about-1.jpg"
            alt="About Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Bottom Left Image */}
        <div className="relative h-40 rounded-lg overflow-hidden col-span-2 shadow-lg">
          <Image
            src="/about-2.jpg"
            alt="About Image 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
          Turning dreams into reality, one line of code at a time.
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Codemapers is more than just a platform—it’s a movement. We empower students and developers from every corner of the world, ensuring that <span className="text-white font-semibold">no dream is limited by geography</span>. With cutting-edge tech and developer-friendly tools, we help turn **ambition into action**.
        </p>

        <button className="inline-flex items-center bg-white text-black border border-gray-300 shadow-lg rounded-full px-6 py-3 font-bold hover:bg-gray-100 transition">
        <Link href='/login' passHref>  Explore More</Link>
          <LiaArrowRightSolid className='ml-3 text-blue-500'/>
        </button>
      </div>
    </section>
  );
};

export default About;
