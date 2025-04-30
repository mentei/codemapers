// components/Navbar.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'

import DarkModeToggle from './DarkModeToggle'

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between  text-shadow-indigo-200px-6 md:px-20 py-6">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <h1 className='text-3xl'>Codemapers</h1>
        <Image src="/logo.png" alt="logo" width={32} height={32} />
        <span className="text-lg font-semibold text-black">create</span>
      </div>

      {/* Nav Links */}
      <nav className=" md:flex flex-column space-x-6 text-sm font-medium text-black">
      <Link  href='../components/aboutSection.jsx' className='text-2xl text-white uppercase  '>about us</Link>
      <Link  href='./aboutSection.jsx' className='text-2xl text-white uppercase  '>work </Link>
      <Link  href='./aboutSection.jsx' className='text-2xl text-white uppercase  '>community</Link>
      <Link  href='./aboutSection.jsx' className='text-2xl text-white uppercase  '>products</Link>

       <DarkModeToggle/>
      </nav>
    </header>
  )
}

export default Navbar
