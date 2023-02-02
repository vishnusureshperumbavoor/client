import React, { useState } from 'react'

function UseState() {
  const [Count, setCount] = useState(0)
  return (
    <div>
      <h1>useState</h1>
      <h2>Count : {Count}</h2>
      <button onClick={()=>setCount(Count+1)}>Increment</button><br />
      <button onClick={()=>setCount(Count-1)}>Decrement</button>
    </div>
  )
}

export default UseState