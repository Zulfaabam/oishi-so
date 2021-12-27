import React from 'react'
import { CartContext } from '../context/CartContext'

export default function CartTotal({ orderPlaced }) {
  return (
    <CartContext.Consumer>
      {(value) => {
        const { cartList } = value

        let totalOrderCost = 0

        cartList.forEach((eachCartItem) => {
          totalOrderCost += eachCartItem.cost * eachCartItem.quantity
        })

        const onClickPlaceOrder = () => {
          orderPlaced()
        }

        return (
          <div className="border-t-2 border-dashed mt-6 py-6 md:pr-10">
            <div className="flex justify-between text-[#3E4C59] font-medium md:text-2xl">
              <h1>Order Total:</h1>
              <p>$ {totalOrderCost}</p>
            </div>
            <button
              className="bg-primary text-white text-xs px-4 py-2 rounded-lg block ml-auto mt-6"
              onClick={onClickPlaceOrder}
            >
              Place Order
            </button>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}
