import React from 'react'
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai'
import { CartContext } from '../context/CartContext'

export default function CartItem({ cartItem }) {
  return (
    <CartContext.Consumer>
      {(value) => {
        const { incrementCartItemQuantity, decrementCartItemQuantity } = value
        const { id, name, quantity, cost, imageUrl } = cartItem

        const decreaseQuantity = () => {
          decrementCartItemQuantity(id)
        }

        const increaseQuantity = () => {
          incrementCartItemQuantity(id)
        }

        return (
          <div className="flex items-center gap-4">
            <div>
              <img
                src={imageUrl}
                alt={name}
                className="w-[136px] h-[90px] object-cover"
              />
            </div>
            <div>
              <h2 className="font-medium text-sm">{name}</h2>
              <div className="flex gap-2 items-center">
                <AiOutlineMinusSquare
                  className="text-2xl"
                  onClick={decreaseQuantity}
                />
                <p>{quantity}</p>
                <AiOutlinePlusSquare
                  className="text-2xl"
                  onClick={increaseQuantity}
                />
              </div>
              <p className="text-primary font-bold">$ {cost * quantity}</p>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}
