// app/components/PressSection.tsx
import Image from "next/image";

const images = [
  { src: "/city1.jpg", alt: "City Image 1" },
  { src: "/city2.png", alt: "City Image 2" },
];

const PressSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20  flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* Left Content */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Infiniti software solutions plans global expansion
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
          Infiniti software solutions, a Chennai based travel technology service provider to corporate, 
          claims to be leading the space in India. The company offers diverse solutions for the travel 
          and aviation industry such as SME tool, expense management, group revenue management, business 
          travel management, airline forecasting tool, and airline CRM solution.
        </p>
        <button className="flex items-center border border-gray-300 rounded-full px-6 py-2 hover:bg-gray-50 transition text-sm font-medium">
          Read more
          <span className="ml-3 bg-blue-600 text-white p-2 rounded-full">→</span>
        </button>
      </div>

      {/* Right Grid */}
      <div className="flex-1 grid grid-cols-2 gap-4 max-w-lg">
        <div className="bg-blue-600 text-white font-bold text-lg flex items-center justify-center rounded-lg min-h-[130px]">
          PRESS
        </div>
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="overflow-hidden rounded-lg col-span-2">
          <Image
            src="/city3.avif"
            alt="City Image 3"
            width={600}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PressSection;
