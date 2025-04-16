import React from 'react'
import Footer from './Footer'

const Nav = (props) => {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Menu</li>
        <Footer/>
      </ul>
    </div>
  )
}

export default Nav
