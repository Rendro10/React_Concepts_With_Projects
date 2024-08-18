import React, { useState } from 'react'
// import './App.css'

const App = () => {
  const [color,setColor] = useState("olive");
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      hello

      <div className="fixed flex fex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white padding px-3 py-2 rounded-xl cursor-pointer">
            <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"green"}}onClick={()=>setColor("green")}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"blue"}}onClick={()=>setColor("blue")}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"grey"}}onClick={()=>setColor("grey")}>Grey</button>
        </div>
      </div>
    </div>
  )
}

export default App
