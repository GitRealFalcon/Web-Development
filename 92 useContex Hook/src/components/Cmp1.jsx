import React from 'react'
import { useContext } from 'react'
import { couterContext } from '../context/context'

const Cmp1 = () => {
    const value = useContext(couterContext)
  return (
    <div>
     {value.count}
    </div>
  )
}

export default Cmp1
