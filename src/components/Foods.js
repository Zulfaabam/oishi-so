import React, { useState } from 'react'
import {
  AiFillStar,
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
} from 'react-icons/ai'
import { CartContext } from '../context/CartContext'

export default function Foods({ foodItem }) {
  const [quantity, setQuantity] = useState(0)

  return (
    <CartContext.Consumer>
      {(value) => {
        const {
          addCartItem,
          incrementCartItemQuantity,
          decrementCartItemQuantity,
        } = value
        const { id, imageUrl, name, cost, rating } = foodItem

        const onClickAdd = () => {
          setQuantity(quantity + 1)
          addCartItem({ ...foodItem, quantity: quantity + 1 })
        }

        const onDecreaseQuantity = () => {
          setQuantity(quantity - 1)
          decrementCartItemQuantity(id)
        }

        const onIncreaseQuantity = () => {
          setQuantity(quantity + 1)
          incrementCartItemQuantity(id)
        }

        return (
          <div className="flex gap-4">
            <img
              src={imageUrl}
              alt={name}
              className="w-40 h-[100px] rounded-lg md:w-[255px] md:h-[150px] object-cover"
            />
            <div className="flex flex-col justify-center">
              <h2 className="font-bold text-dark-70 md:text-lg">{name}</h2>
              <p className=" text-dark-50 text-sm font-medium">$ {cost}</p>
              <div className="flex gap-1 items-center">
                <AiFillStar color="#FFCC00" />
                <strong className="text-sm">{rating}</strong>
              </div>
              {quantity === 0 ? (
                <button
                  className="text-primary border border-primary rounded-lg w-11 text-xs py-1"
                  onClick={onClickAdd}
                >
                  ADD
                </button>
              ) : (
                <div className="flex gap-2 items-center">
                  <AiOutlineMinusSquare
                    className="text-2xl cursor-pointer"
                    onClick={onDecreaseQuantity}
                  />
                  <p>{quantity}</p>
                  <AiOutlinePlusSquare
                    className="text-2xl cursor-pointer"
                    onClick={onIncreaseQuantity}
                  />
                </div>
              )}
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}
