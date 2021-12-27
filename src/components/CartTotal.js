import React from 'react'
import { CartContext } from '../context/CartContext'

export default function CartTotal({ orderPlaced }) {
  return (
    <CartContext.Consumer>
      {(cartList) => {
        let totalOrderCost = 0
        cartList.forEach((eachCartItem) => {
          totalOrderCost += eachCartItem.cost * eachCartItem.quantity
        })
        const onClickPlaceOrder = () => {
          orderPlaced()
        }

        return (
          <div>
            <h1>Order Total:</h1>
            <div>
              <p>$ {totalOrderCost}</p>
              <button onClick={onClickPlaceOrder}>Place Order</button>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}
