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
        Codemapers is Reimagining Cloud Learning for the Next Billion Coders.
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
        Codemapers, a tech-forward cloud development platform based in India, is on a mission to democratize coding education and cloud-based software development. The platform offers accessible tools tailored for students, especially in remote and under-resourced areas.

Codemapers provides a wide range of services including a free cloud IDE, remote virtual PC access, secure code storage, real-time code execution, and a dedicated learning environment. The company aims to empower learners and aspiring developers by offering cost-free, accessible, and scalable solutions that bridge the digital divide.

Through open-source contribution, hands-on learning zones, and inclusive tech innovation, Codemapers is working to build a future where quality tech education is not limited by geography or economic background.
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
