'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-primary text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-secondary">Premium</span>
            <span className="text-2xl font-bold">Detailing</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-secondary transition duration-300">
              Home
            </Link>
            <Link href="/services" className="hover:text-secondary transition duration-300">
              Services
            </Link>
            <Link href="/gallery" className="hover:text-secondary transition duration-300">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-secondary transition duration-300">
              Contact
            </Link>
          </div>

          {/* Book Now Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-secondary text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent transition duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 hover:bg-gray-800 rounded transition duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 hover:bg-gray-800 rounded transition duration-300"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 hover:bg-gray-800 rounded transition duration-300"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 hover:bg-gray-800 rounded transition duration-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 bg-secondary text-white rounded font-semibold hover:bg-accent transition duration-300"
              onClick={toggleMenu}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
