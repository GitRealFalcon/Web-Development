import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("naeem")
  const [form, setform] = useState({ Email: "", Phone: "" })

  const handleChange = (e) => {
    setform({...form,[e.target.name]:e.target.value})
    console.log(form);
    
  }



  const handleClick = () => {
    alert("Hey I am Click")
  }
  const handleOver = () => {
    alert("Hey I am Mouse Over")
  }

  return (
    <>
      <div className="butt">
        <button onClick={handleClick}>Click me</button>
      </div>

      <div className="container" onMouseOver={handleOver}>

      </div>
      <input type="text" name='Email' value={form.Email} onChange={handleChange} />
      <input type="text" name='Phone' value={form.Phone} onChange={handleChange} />
    </>
  )
}

export default App
