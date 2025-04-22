import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-blue-700">Learn</h3>
          <p className="mt-2 text-gray-600">Choose courses based on your interest and learn at your pace.</p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-blue-700">Teach & Earn</h3>
          <p className="mt-2 text-gray-600">Teach what you know and earn by helping others grow.</p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-blue-700">PC Rentals</h3>
          <p className="mt-2 text-gray-600">Apply for low-cost PCs to continue your learning journey.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
