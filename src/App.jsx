import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center">
      <h1 className="font-bold text-2xl text-blue-900">
        React and Tailwind with Vitejs!
      </h1>
    </div>
  )
}

export default App
