import { useState } from 'react'
import './App.css'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center">
      <h1 className="font-bold text-2xl text-blue-900">
        <Login />
      </h1>
    </div>
  )
}

export default App
