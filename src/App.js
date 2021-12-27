import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import { createBrowserHistory } from 'history'
import RestaurantDetails from './pages/RestaurantDetails'
import PaymentSuccessful from './pages/PaymentSuccessful'
import { CartContext } from './context/CartContext'

const history = createBrowserHistory()

const getCartListFromLocalStorage = () => {
  const stringifiedCartList = localStorage.getItem('cartData')
  const parsedCartList = JSON.parse(stringifiedCartList)
  if (parsedCartList === null) {
    return []
  }
  return parsedCartList
}

function App() {
  const [cartList, setCartList] = useState(getCartListFromLocalStorage)

  const removeAllCartItems = () => {
    setCartList([])
  }

  const incrementCartItemQuantity = (id) => {
    setCartList(
      cartList.map((eachCartItem) => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return { ...eachCartItem, quantity: updatedQuantity }
        }
        return eachCartItem
      })
    )
  }

  const decrementCartItemQuantity = (id) => {
    const productObject = cartList.find(
      (eachCartItem) => eachCartItem.id === id
    )
    if (productObject.quantity > 1) {
      setCartList(
        cartList.map((eachCartItem) => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return { ...eachCartItem, quantity: updatedQuantity }
          }
          return eachCartItem
        })
      )
    } else {
      removeCartItem(id)
    }
  }

  const removeCartItem = (id) => {
    const updatedCartList = cartList.filter(
      (eachCartItem) => eachCartItem.id !== id
    )
    setCartList(updatedCartList)
  }

  const addCartItem = (product) => {
    const productObject = cartList.find(
      (eachCartItem) => eachCartItem.id === product.id
    )
    if (productObject) {
      setCartList(
        cartList.map((eachCartItem) => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = product.quantity

            return { ...eachCartItem, quantity: updatedQuantity }
          }

          return eachCartItem
        })
      )
    } else {
      const updatedCartList = [...cartList, product]
      setCartList(updatedCartList)
    }
  }

  localStorage.setItem('cartData', JSON.stringify(cartList))

  return (
    <Router history={history}>
      <CartContext.Provider
        value={{
          cartList,
          addCartItem,
          removeCartItem,
          incrementCartItemQuantity,
          decrementCartItemQuantity,
          removeAllCartItems,
        }}
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/restaurant/:restaurantId"
              element={<RestaurantDetails />}
            />
            <Route path="/payment-successful" element={<PaymentSuccessful />} />
          </Routes>
        </div>
      </CartContext.Provider>
    </Router>
  )
}

export default App
