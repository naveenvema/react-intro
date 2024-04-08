import React from 'react'

export default function App3() {
    function greet(name,digi) {
        alert(name,digi)
        
    }
  return (
    <div>
        <button onClick={()=>greet('john','javadeveloper')}>Details</button>
        <br></br> <br></br>
        <button onClick={()=>greet('Naveen','python web developer')}>details</button>
    </div>
  )
}
