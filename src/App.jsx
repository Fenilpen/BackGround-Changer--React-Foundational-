import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("")

  return (
    <>
     <div className='main-display' style={{backgroundColor: color}} >
        <div className='color-bar'>
          <div className='button-bar'>
            <button
            onClick={()=> setColor("red")}
            >Red</button>
            <button
             onClick={()=> setColor("blue")}
            >Blue</button>
            <button
             onClick={()=> setColor("green")}
            >Green</button>
            <button
             onClick={()=> setColor("olive")}
            >Olive</button>
            <button
             onClick={()=> setColor("yellow")}
            >Yellow</button>
            <button
             onClick={()=> setColor("grey")}
            >Grey</button>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
