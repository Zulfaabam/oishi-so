import React, { useState } from 'react'
import { CartContext } from '../context/CartContext'
import PaymentSuccessful from './PaymentSuccessful'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

export default function CartListView() {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const orderPlaced = () => {
    setIsOrderPlaced(!isOrderPlaced)
  }

  return (
    <CartContext.Consumer>
      {(value) => {
        const stringifiedCartList = localStorage.getItem('cartData')
        const parsedCartList = JSON.parse(stringifiedCartList)

        return isOrderPlaced ? (
          <PaymentSuccessful />
        ) : (
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-8 md:py-10">
            <div className="hidden md:flex md:justify-between px-12 mb-6 text-dark-60 text-xl font-medium">
              <p>Item</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            <div className="space-y-6">
              {parsedCartList.map((item) => {
                return <CartItem key={item.id} cartItem={item} value={value} />
              })}
            </div>
            <CartTotal orderPlaced={orderPlaced} />
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}
