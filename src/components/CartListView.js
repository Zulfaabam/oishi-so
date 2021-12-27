import React, { useState } from 'react'
import { CartContext } from '../context/CartContext'
import PaymentSuccessful from '../pages/PaymentSuccessful'
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
          <div>
            {parsedCartList.map((item) => {
              return <CartItem key={item.id} cartItem={item} value={value} />
            })}
            <CartTotal orderPlaced={orderPlaced} />
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}
