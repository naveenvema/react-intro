import React from 'react'

export default function App2() {
    function greet() {
        alert("HELLO")
    }
  return (
    <div>
        <button onClick={greet}>Click</button>
        <h1 onClick={greet}>Cart</h1>
    </div>
  );
}
