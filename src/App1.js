import React from 'react';
import "./App1.css"
import Home from './Home';


export default function App1() {
  return (
    <div>
        <div className='dv'>Hello World</div>
        <div>Good Afternoon</div>
        <p>This is paragraph.I am ne to HTML</p>
        <Home name="john" age={22}/>
    </div>

  )
}
