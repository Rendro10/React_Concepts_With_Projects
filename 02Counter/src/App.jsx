import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function handleIncri(){
    count++;
    setCount(count);
  }
  function handledcri(){
    count--;
    setCount(count);
  }

  return (
    <>
      <h1>This is App!</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={handleIncri}>Add Value</button>
      <button onClick={handledcri}>Sub Value</button>
    </>
  )
}

export default App
