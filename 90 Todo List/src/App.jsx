import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("")
  const [showFinished, setshowFinished] = useState(false)

  // const [todos, setTodos] = useState([])

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let etodo = todos.filter(item => item.id === id)
    setTodo(etodo[0].todo)

    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos);
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos);
  }

  const handleAdd = () => {
    todo !== "" ? setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]) : ""
    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)

  }

  const handleCheckBox = (e) => {
    let index = todos.findIndex(item => {
      return item.id === e.target.name
    })

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)

  }


  return (
    <>
      <Navbar />
      <div className="container flex flex-col bg-violet-200 mx-auto w-1/2 p-2 rounded-xl m-10 min-h-[80vh]">
        <div className="input-todo w-full flex justify-center">
          <form className="addtodo flex items-center flex-col w-1/2 text-center mb-6">
            <h2 className='text-xl font-bold text-blue-500 flex gap-2'><img src={reactLogo} alt="logo" />iTask Todo List <img src={viteLogo} alt="vite" /></h2>
            <input onChange={handleChange} value={todo} type="text" className='m-3 rounded-sm p-2 bg-gray-300 w-full' required placeholder='Entar Your todo' />
            <button onClick={handleAdd} type='button' className='btn px-3 py-2 w-23'>Save</button>
          </form>
        </div>
        <div className='w-full h-1 bg-gray-500'></div>
        <div><input onChange={toggleFinished} type="checkbox" checked={showFinished} className='mr-2' />Show Finished</div>
        <h2 className='font-bold text-lg m-5'>YOUR TODOS</h2>
        <div className="todos">
          {todos.length === 0 && <div className='text-center'>No Todos to display</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex items-center  gap-10 m-1 justify-between">
              <div className='flex gap-2'>
                <input onChange={handleCheckBox} checked={item.isCompleted} type="checkbox" name={item.id} id='' />
                <div className={item.isCompleted ? "line-through text p-2 bg-gray-400 rounded-xl font-bold text-lg" : "text p-2 bg-green-300 rounded-xl font-bold text-lg"}>{item.todo}</div>
              </div>
              <div className="buttons ">
                <button onClick={(e) => handleEdit(e, item.id)} className='btn mr-3  px-3 py-1'><BiSolidEditAlt /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='btn  px-3 py-1'><MdDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
