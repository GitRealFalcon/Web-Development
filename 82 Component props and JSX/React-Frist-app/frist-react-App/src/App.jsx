import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Card from './components/card'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className="cards">
      <Card title="Card 1" description="Card 1 Desc"/>
      <Card title="Card 2" description="Card 2 Desc"/>
      <Card title="Card 3" description="Card 3 Desc"/>
      <Card title="Card 4" description="Card 4 Desc"/>
      <Card title="Card 5" description="Card 5 Desc"/>
     
    </div>
    <Footer/>
    </>
  )
}

export default App
