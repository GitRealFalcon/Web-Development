import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
        <div className="flex mt-4 md:mt-0 space-x-4">
          <a href="#" className="text-sm hover:text-gray-400 transition">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-gray-400 transition">Terms of Service</a>
          <a href="#" className="text-sm hover:text-gray-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

