import React from 'react'

export default function App3() {
    function greet(name) {
        alert(name)
    }
  return (
    <div>
        <button onClick={()=>greet('john')}>Click</button>
        <br></br>
        <button onClick={()=>greet('Naveen')}>Click</button>
    </div>
  )
}
