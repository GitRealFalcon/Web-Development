import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [cards, setcards] = useState([])
  const fetchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setcards(data)
   
  }

  useEffect(() => {
   fetchdata()
  }, [])
  

  return (
    <>
    <div className='bg-amber-100'>

    <Navbar/>
      <div className="container flex gap-3 flex-wrap m-3">
          {cards.map((card)=>{
            return <div key={card.id} className="card w-60 p-3 rounded-xl bg-amber-200">
              <h1 className='text-2xl font-bold mb-3 uppercase'>{card.title}</h1>
              <p className='font-semibold mb-3 capitalize'>{card.body}</p>
              <div className='font-extrabold text-center'>from user {card.userId}</div>
            </div>
          })}
        </div>
          </div>
    </>
  )
}

export default App
