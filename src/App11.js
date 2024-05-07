import React from 'react';
import "./App1.css"
import Home from './Home';
import Home2 from './Home2';


export default function App1() {
  return (
    <div>
        <div className='dv'>Hello World</div>
        <div>Good Afternoon</div>
        <Home2/>
        <p>This is paragraph.I am ne to HTML</p>
        <Home name="john" age={22} desig=" python web developer" insti="iin2 dreans" />      
    </div>

  )
}
