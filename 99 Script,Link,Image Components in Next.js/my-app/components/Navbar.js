"use client"
import React, { useState } from 'react'
import Link from 'next/link';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">MyApp</h1>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-500">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Services</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
