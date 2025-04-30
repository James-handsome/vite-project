import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <div className="app-container">
          <h1>Vite + React + Tailwind CSS</h1>
         main
         <span>{count}</span>
     </div>
    </>
  )
}

export default App
