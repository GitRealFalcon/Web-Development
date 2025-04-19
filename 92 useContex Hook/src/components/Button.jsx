import React, { useContext } from 'react'
import Cmp1 from './Cmp1'
import { couterContext } from '../context/context'

const Button = () => {
    const value = useContext(couterContext)
    
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><Cmp1/> Hi iam button</button>
    </div>
  )
}

export default Button
