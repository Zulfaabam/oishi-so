import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CartEmpty() {
  return (
    <div className="flex flex-col justify-center items-center mb-16">
      <img src="/no-orders.png" alt="no order" className="w-52 mb-8 md:w-96" />
      <h1 className="text-dark-80 text-xl md:text-3xl font-medium mb-3">
        No Orders Yet!
      </h1>
      <p className="text-sm md:text-base text-dark-50 mb-6 px-16 text-center">
        Your cart is empty. Add something from the menu.
      </p>
      <NavLink to="/" className="bg-primary text-white px-4 py-2 rounded-lg">
        Order Now
      </NavLink>
    </div>
  )
}
