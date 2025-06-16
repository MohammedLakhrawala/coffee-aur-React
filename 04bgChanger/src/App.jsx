import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
        <button className="outline-none rounded-xl  p-3 w-19" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
        <button className="outline-none rounded-full p-2" style={{backgroundColor: "green"}}
        onClick={() => setColor("green")}>green</button>
        <button className="outline-none rounded-full p-2" style={{backgroundColor: "blue"}}
        onClick={() => setColor("blue")}>BLue</button>
        <button className="outline-none rounded-full p-2" style={{backgroundColor: "purple"}}
        onClick={() => setColor("purple")}>Purple</button>
      </div>
      </div>

    </div>
  )
}

export default App
