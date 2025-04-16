import { useState } from 'react'

import './App.css'
import Login from './Components/Login'
import Login2 from './Components/Login2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login />


    {/* iss ham data ke form me aese show kr sakte hay */}

    {/* <Login2 /> */}
     
    </>
  )
}

export default App
