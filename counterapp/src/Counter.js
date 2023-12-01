import React, { useState } from 'react'
import './App.css'

const Counter = () => {
    const [count, setcount] = useState(0)
    const add = () =>{
        setcount(count + 1)
    }
    const even = () =>{
        setcount(count - 1)
    }
  return (
    <div>
       <h1>Counter App</h1>
      <div className="container">
        <div className="btn" onClick={add}>
          <span className="sign">+</span>
          </div>
        <span className='number'>{count}</span>
        <div className="btn" onClick={even}>
          <span className="sign">-</span>
          </div>
      </div>
    </div>
  )
}

export default Counter
