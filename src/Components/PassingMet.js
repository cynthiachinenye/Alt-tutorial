import React, { useState } from 'react'

const PassingMet = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
    <h1>Count{count}</h1>
    <button onClick={setCount(count+1)}>increment</button>
    <button onClick={setCount(count-1)}>decrement</button>
      
    </div>
  )
}

export default PassingMet




