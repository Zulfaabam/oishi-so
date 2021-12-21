import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
