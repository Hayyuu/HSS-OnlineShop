import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='main'>
      <nav>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
      </nav>
      <Outlet />
      <p>By Hayat Ahimed</p>
    </div>
  )
}

export default App
