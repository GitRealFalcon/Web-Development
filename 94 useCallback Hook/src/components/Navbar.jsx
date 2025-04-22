import React from 'react'
import { memo } from 'react';

const Navbar = ({adjuctive,getAdjuctive}) => {
    console.log("Rendured");
    
  return (
    <div>
      Navbar is {adjuctive}
      <button onClick={()=>{getAdjuctive()}}>{getAdjuctive()}</button>
    </div>
  )
}

export default memo(Navbar)
