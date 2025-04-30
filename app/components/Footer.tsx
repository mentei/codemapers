import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-8 text-center shadow-lg">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg font-semibold tracking-wide">
          &copy; {new Date().getFullYear()} Learn4All. Built with ❤️ for Bharat.
        </p>
        <p className="mt-2 text-gray-300 text-sm">
          Empowering minds, one code at a time. Join us in shaping the future. 🚀
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
