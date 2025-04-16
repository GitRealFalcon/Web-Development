import React from 'react'

const Navbar = () => {
  return (
    <div className='h-10 bg-amber-400 flex flex-col justify-center '>
      <ul className='flex gap-3 list-none m-3'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
