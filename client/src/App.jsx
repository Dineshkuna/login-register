// import { useState } from 'react'

// import './App.css'
import Login from './Login'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App
