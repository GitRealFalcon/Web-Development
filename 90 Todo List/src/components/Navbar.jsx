import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex p-3 bg-slate-700 text-white gap-6 items-center'>
        <div className="logo">
            <span className='font-bold text-xl '>iTask</span>
        </div>
        <ul className="flex gap-3">
            <li className='cursor-pointer hover:font-bold transition-all duration-100'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-100'>Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar
