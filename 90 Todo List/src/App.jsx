import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container flex flex-col bg-violet-200 mx-auto w-1/2 p-2 rounded-xl m-10 min-h-[80vh]">
        <div className="input-todo w-full flex justify-center">
          <form className="addtodo flex items-center flex-col w-1/2 text-center mb-6">
            <h2 className='text-lg font-bold text-blue-400'>Add A TODO</h2>
            <input type="text" className='m-3 rounded-sm p-2 bg-gray-300 w-full' required placeholder='Entar Your todo' />
            <button type='submit' className='btn px-3 py-2 w-23'>Submit</button>
          </form>
        </div>
        <div className='w-full h-1 bg-gray-500'></div>
        <h2 className='font-bold text-lg m-5'>YOUR TODOS</h2>
        <div className="todos">
          <div className="todo flex items-center gap-10">
            <div className="text p-5 bg-green-300 rounded-xl font-bold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="buttons ">
              <button className='btn mr-3  px-3 py-1'>Edit</button>
              <button className='btn  px-3 py-1'>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
