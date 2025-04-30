'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, Menu } from 'lucide-react' // npm install lucide-react
import DarkModeToggle from './DarkModeToggle'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 md:px-20 py-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
  <Image src="/logo.png" alt="logo" width={32} height={32} />
  <Link href={"/"}>
    <span className="text-3xl font-bold text-white">Codemapers</span>
  </Link>
</div>


      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <Link href="/about" className="text-2xl text-white uppercase hover:underline">About Us</Link>
        <Link href="/work" className="text-2xl text-white uppercase hover:underline">Work</Link>
        <Link href="/community" className="text-2xl text-white uppercase hover:underline">Community</Link>
        <Link href="/products" className="text-2xl text-white uppercase hover:underline">Products</Link>
        <DarkModeToggle />
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(true)}
        aria-label="Open Menu"
      >
        <Menu size={28} />
      </button>

      {/* Sidebar (Mobile Nav) */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col items-start px-6 py-10 space-y-6">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>

          {/* Sidebar Links */}
          <Link href="/about" className="text-2xl text-white uppercase" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/work" className="text-2xl text-white uppercase" onClick={() => setMenuOpen(false)}>Work</Link>
          <Link href="/community" className="text-2xl text-white uppercase" onClick={() => setMenuOpen(false)}>Community</Link>
          <Link href="/products" className="text-2xl text-white uppercase" onClick={() => setMenuOpen(false)}>Products</Link>
          <DarkModeToggle />
        </div>
      )}
    </header>
  )
}

export default Navbar;
