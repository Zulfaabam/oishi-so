import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function PaymentSuccessful() {
  return (
    <CartContext.Consumer>
      {(value) => {
        const { removeAllCartItems } = value

        const clearCart = () => {
          removeAllCartItems()
        }

        return (
          <div>
            <div className="flex flex-col justify-center items-center my-16">
              <BsFillCheckCircleFill
                color="#22C55e"
                className="mb-6 text-5xl md:text-7xl"
              />
              <h1 className="text-dark-80 text-xl md:text-3xl font-medium mb-3">
                Payment Successful!
              </h1>
              <p className="text-sm md:text-base text-dark-50 mb-8 px-10 text-center">
                Thank you for ordering. <br /> Your payment is successfully
                completed.
              </p>
              <NavLink
                to="/"
                className="bg-primary text-white px-4 py-2 rounded-lg"
                onClick={clearCart}
              >
                Go to Home Page
              </NavLink>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}
