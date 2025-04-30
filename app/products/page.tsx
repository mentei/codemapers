'use client';
import { LiaArrowRightSolid } from "react-icons/lia";
import Image from 'next/image';
import Link from "next/link";

const ProductsSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-gradient-to-br from-black to-gray-900 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
        {/* Gradient Box */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-center font-extrabold text-2xl flex items-center justify-center rounded-lg h-40 shadow-lg">
          OUR <br /> PRODUCTS
        </div>

        {/* Top Right Image */}
        <div className="relative h-40 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/pagess/product1.png"
            alt="Products Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Bottom Left Image */}
        <div className="relative h-40 rounded-lg overflow-hidden col-span-2 shadow-lg">
          <Image
            src="/pagess/product2.png"
            alt="Products Image 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mb-6">
          Code without limits—empowering every developer, everywhere.
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Codemapers provides next-gen development tools designed for **accessibility and performance**. Whether it's our **Cloud IDE**, **Remote PC Access**, or **Open Source Contributions**, we aim to **bridge the gap** between dreamers and doers—making technology more **inclusive, powerful, and limitless**.
        </p>

       
        <button className="inline-flex items-center bg-white text-black border border-gray-300 shadow-lg rounded-full px-6 py-3 font-bold hover:bg-gray-100 transition">
  <Link href="/login" passHref>
    <span className="flex items-center">
      Explore Products <LiaArrowRightSolid className="ml-3 text-blue-500"/>
    </span>
  </Link>
</button>

      </div>
    </section>
  );
};

export default ProductsSection;
