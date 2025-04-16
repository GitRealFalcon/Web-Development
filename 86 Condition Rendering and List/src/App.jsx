import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [showbtn, setshowbtn] = useState(false)

  const [todos, setTodos] = useState([
    {
      title: "todo 1",
      desc: "desc 1"
    },
    {
      title: "todo 2",
      desc: "desc 2"
    },
    {
      title: "todo 3",
      desc: "desc 3"
    }
  ])

  // const Todo = ({todo}) => {
  //   return (<>
  //     <div className='Todo'>{todo.title}</div>
  //     <div className='Todo'>{todo.desc}</div>
  //   </>)
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    {todos.map(todo=>{
      // return <Todo key={todo.title} todo ={todo}/>
      return (<div key={todo.title}>
           <div className='Todo'>{todo.title}</div>
           <div className='Todo'>{todo.desc}</div>
         </div>)
    })}
          <div className="card">
            {showbtn && <button>test btn</button>}
            {/* {showbtn ? <button>test btn</button>:""} */}
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <button onClick={() => setshowbtn(!showbtn)}>click</button>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
  )
      }

      export default App
