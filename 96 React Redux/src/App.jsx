import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './redux/counter/counterSlice'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      the value is {count}
      <button onClick={() => dispatch(incrementByAmount(4))}>+</button>
    </>
  )
}

export default App
