import React from 'react'
import "./card.css"


const Card = (props) => {
  return (
    <div className='card'>
      <img src="./src/assets/program.avif" alt="coding" width={200} style={{border:"2px solid black"}}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
