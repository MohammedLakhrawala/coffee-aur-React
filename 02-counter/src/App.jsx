import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

  const add = () => {
    if(counter<20)
     setCounter(counter+1)
  }

  const remove = () => {
    if(counter>0) setCounter(counter-1)
  }

  return (
    <>
      <h1>Mohammed's Coding Space</h1>
      <p>counter:- {counter}</p>
      <button onClick={add}>Add counter</button>
      <button onClick={remove}>decrease counter</button>

    </>
  )
}

export default App
