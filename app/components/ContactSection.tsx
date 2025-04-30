'use client'

import { FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import MotionWrapper from './MotionWrapper'
import Image from 'next/image'

const ContactSection = () => {
  return (
    <MotionWrapper className=" py-16 px-6 md:px-20">
      {/* Logos Row */}
      <div className="flex flex-wrap justify-center gap-10 mb-14">
        {['Ai ', 'telegram', 'github', 'Discord', 'instagram', 'stackoverflow'].map((logo, i) => (
          <img
            key={i}
            src={`/logos/${logo}.png`} // Ensure these exist in /public/logos/
            alt={logo}
            className="h-6 md:h-8 object-contain"
          />
        ))}
      </div>

      {/* Main Contact Section */}
      <div className="grid grid-cols-1 text-white md:grid-cols-3 gap-8 bg-zinc-600 shadow-xl rounded-2xl p-10 items-center">
        {/* Blue Section */}
        <div className="bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center text-lg h-32 md:h-full md:text-xl">
          CONTACT
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-2">Support</h4>
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <FaPhoneAlt className="text-gray-300" />+91 9098842899
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <FaEnvelope className="text-white" /> support@mail.com
            </div>
          </div>
          {/* Sales */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-2">Sales</h4>
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <FaPhoneAlt className="text-white " /> +987 654 3210
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <FaEnvelope className="text-gray-300" /> sales@mail.com
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-4 flex items-center gap-2 bg-white border border-gray-200 px-6 py-2 rounded-full shadow hover:shadow-md transition">
            Contact us <FaArrowRight className="text-blue-500" />
          </button>
        </div>

        {/* Map Image */}
        <div>
          <img
            src="/map.png" // Make sure this exists in /public/images
            alt="map"
            className="w-full rounded-xl"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-14 text-sm text-gray-400 flex-wrap gap-6 border-t pt-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-5" />
          create
        </div>

        {/* Nav Links */}
        <div className="space-x-4">
          {['ABOUT US', 'PRODUCTS', 'PRESS', 'CAREERS', 'CONTACT US'].map(link => (
            <a key={link} href="#" className="hover:text-blue-500 transition">{link}</a>
          ))}
        </div>

        {/* Social/Indicators */}
        <div className="flex gap-3">
          <div className="w-4 h-4 rounded-full bg-gray-400"></div>
          <div className="w-4 h-4 rounded-full bg-gray-400"></div>
          <div className="w-4 h-4 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </MotionWrapper>
  )
}

export default ContactSection
