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
          <div className="flex items-center gap-4 md:gap-8 lg:gap-14 xl:gap-[68px]">
            <div className="md:flex md:items-center md:gap-2 md:w-2/5 ">
              <img
                src={imageUrl}
                alt={name}
                className="w-[136px] h-[90px] object-cover rounded-lg"
              />
              <h2 className="hidden md:inline font-medium text-sm md:text-lg text-dark capitalize">
                {name}
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="md:hidden font-medium text-sm text-dark capitalize">
                {name}
              </h2>
              <div className="flex gap-2 items-center">
                <AiOutlineMinusSquare
                  className="text-2xl cursor-pointer"
                  onClick={decreaseQuantity}
                />
                <p className="font-medium">{quantity}</p>
                <AiOutlinePlusSquare
                  className="text-2xl cursor-pointer"
                  onClick={increaseQuantity}
                />
              </div>
              <p className="text-primary font-bold md:hidden">
                $ {cost * quantity}
              </p>
            </div>
            <div className="hidden md:block md:ml-auto md:mr-12">
              <p className="text-primary font-bold">$ {cost * quantity}</p>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}
