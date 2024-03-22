import React from 'react'
import { useState } from 'react'

export default function App4() {
    const[num,setNum]=useState()
    const[result,setResult]=useState()
    function calc(){
        setResult(()=>num*num)
    }
  return (
    <div>
        <input onChange={(e)=>setNum(e.target.value)} type='text'></input>
        <button onClick={calc}>Submit</button>
        <hr></hr>
        {result}
    </div>
  )
}
