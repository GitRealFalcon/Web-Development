"use client"
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      navbar {count} 
      <button onClick={()=>setCount((prev)=>prev +1)}>Click Me</button>
    </div>
  )
}

export default Navbar
