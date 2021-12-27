import React from 'react'
import CartEmpty from '../components/CartEmpty'
import CartListView from '../components/CartListView'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { CartContext } from '../context/CartContext'

export default function Cart() {
  return (
    <CartContext.Consumer>
      {(value) => {
        const { cartList } = value
        const isCartEmpty = cartList.length === 0

        return (
          <div>
            <Navbar />
            <div>{isCartEmpty ? <CartEmpty /> : <CartListView />}</div>
            <Footer />
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}
