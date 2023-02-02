import React, { useEffect } from 'react'

function UseEffect() {
  useEffect(() => {
    console.log("page is loaded");
  
    return () => {
      second
    }
  }, [third])
  
  return (
    <div>
      <h1>useEffect</h1>
    </div>
  )
}

export default UseEffect