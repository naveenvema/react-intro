import React from 'react'

export default function Home(props) {
  return (
    <div>
      <div>
      {props.name} - {props.age} - {props.desig} this is home page
      </div>

      <h1>{props.insti} this is my institute</h1>
    </div>
  )
}
