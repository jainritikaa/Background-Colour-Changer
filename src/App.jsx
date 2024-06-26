import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("pink")

  return (
    <><div className="container" style={{ backgroundColor: color }}>
    <div className="options">
      <button className="red" style={{ backgroundColor: "red" }} onClick={()=> setColor("red")}>
      </button>
      <button className="orange" style={{ backgroundColor:"orange" }}onClick={()=> setColor("orange")}>
      </button>
      <button className="yellow"style={{ backgroundColor:"yellow" }}onClick={()=> setColor("yellow")}>
      </button>
      <button className="green"style={{ backgroundColor:"green" }}onClick={()=> setColor("green")}>
      </button>
      <button className="blue"style={{ backgroundColor:"blue" }}onClick={()=> setColor("blue")}>
      </button>
      <button className="indigo"style={{ backgroundColor:"indigo"}}onClick={()=> setColor("indigo")}>
      </button>
      <button className="violet"style={{ backgroundColor:"violet"}}onClick={()=> setColor("violet")}>
      </button>
      <button className="white"style={{ backgroundColor:"white"}}onClick={()=> setColor("white")}>
      </button>
      <button className="black"style={{ backgroundColor:"black"}}onClick={()=> setColor("black")}>
      </button></div></div>
    </>
        )
}

export default App
