// app/components/ProductSliderSection.tsx
'use client';

import Slider from "react-slick";
import Image from "next/image";
import { FaBuffer } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import { FaDotCircle } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const products = [
  
    {
      title: "Codemapes Cloud IDE",
      subtitle: "Powerful Coding Environment",
      description: "A fully cloud-based development platform with multi-language support, real-time execution, and secure storage — built especially for students in remote and underserved areas.",
      logo: "/citrix.jpg",
    },
    {
      title: "Open Source",
      subtitle: "Contribute to Create Impact",
      description: "Open source contributions that aim to build inclusive tools and technologies for empowering remote learners and developers worldwide.",
      logo: "/github.png",
    },
    {
      title: "Free Learning for All",
      subtitle: "Accessible. Inclusive. Free.",
      description: "A dedicated learning zone offering free resources, coding practice, and real-time project building opportunities — no cost, no barrier.",
      logo: "/napster.jpg",
    },
    {
      title: "Remote PC Access",
      subtitle: "Learn Without Limits",
      description: "Access cloud-hosted virtual PCs and development environments from anywhere, enabling students to build and learn without worrying about local hardware limitations.",
      logo: "/pc.png",
    }
    
];

const ProductSliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full py-20 px-6 md:px-20 bg-black">
      <div className="flex gap-6 items-start">
        {/* Left Label Box */}
        <div className="hidden md:flex flex-col items-center">
          <div className="bg-blue-600 text-white font-bold text-xl text-center w-36 mt-4 rounded-lg flex items-center justify-center leading-tight">
         <h1 className="text-2xl m-4 p-4  mt-8">
         PRO <br /> DUCTS
         <FaBuffer className=" ml-2  font-bold text-white" />
         </h1>
          </div>
        </div>

        {/* Slider */}
        <div className="w-full">
          <Slider {...settings}>
            {products.map((product, idx) => (
              <div key={idx} className="p-4">
                <div className="bg-zinc-400 shadow-xl text-white rounded-lg p-6 relative h-full transition hover:shadow-2xl">
                  {/* Logo */}
                  <div className="flex items-center gap-3   mb-4">
                    <Image src={product.logo} alt={product.title} width={40} height={40} />
                    <div>
                      <h4 className="text-gray-800 font-semibold">{product.title}</h4>
                      <p className="text-sm text-gray-500">{product.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6">{product.description}</p>

                  {/* Button */}
                  <button className="flex items-center border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-50 transition text-sm font-medium">
                    Book a demo
                    <FaArrowAltCircleRight className=" ml-2  font-bold text-white y" />
                  </button>

                  {/* Dot icon */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-amber-300rounded-full text-white" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProductSliderSection;
