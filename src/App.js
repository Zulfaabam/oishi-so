import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import { createBrowserHistory } from 'history'
import RestaurantDetails from './pages/RestaurantDetails'

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/restaurant/:restaurantId"
            element={<RestaurantDetails />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
