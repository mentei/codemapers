'use client'

import { FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import MotionWrapper from './MotionWrapper'
import Image from 'next/image'

const socialIcons = [
  { name: 'ai', src: '/logos/ai.png' },
  { name: 'telegram', src: '/logos/telegram.png' },
  { name: 'github', src: '/logos/github.png' },
  { name: 'discord', src: '/logos/discord.png' },
  { name: 'instagram', src: '/logos/instagram.png' },
  { name: 'stackoverflow', src: '/logos/stackoverflow.png' }
]

const ContactSection = () => {
  return (
    <MotionWrapper className="py-16 px-6 md:px-20 bg-black text-white">
      {/* Social Icons Row */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {socialIcons.map((icon, i) => (
          <div
            key={i}
            className="bg-zinc-800 p-3 rounded-full hover:scale-105 hover:shadow-md transition"
          >
            <Image
              src={icon.src}
              alt={icon.name}
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Contact Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-zinc-700 rounded-3xl p-10">
        {/* Left Box */}
        <div className="bg-purple-600 text-white font-bold text-center rounded-2xl flex items-center justify-center text-xl md:text-2xl py-20">
          CONTACT
        </div>

        {/* Info + Button */}
        <div className="space-y-6 text-gray-200 text-sm md:text-base">
          {/* Support Info */}
          <div>
            <h4 className="font-semibold mb-2 text-white">Support</h4>
            <div className="flex items-center gap-2">
              <FaPhoneAlt /> +91 9098842899
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope /> support@mail.com
            </div>
          </div>

          {/* Sales Info */}
          <div>
            <h4 className="font-semibold mb-2 text-white">Sales</h4>
            <div className="flex items-center gap-2">
              <FaPhoneAlt /> +987 654 3210
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope /> sales@mail.com
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-6 flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg hover:bg-gray-100 transition">
            Contact us <FaArrowRight className="text-blue-500" />
          </button>
        </div>

        {/* Map */}
        <div className="flex justify-center items-center">
          <Image
            src="/map.png"
            alt="Map"
            width={300}
            height={200}
            className="w-full max-w-[300px] rounded-xl object-cover"
          />
        </div>
      </div>
    </MotionWrapper>
  )
}

export default ContactSection
