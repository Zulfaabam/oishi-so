import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseCircleFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="w-full relative bg-white">
      <div className="max-w-6xl flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="website logo" />
          <h1 className="text-2xl font-bold italic text-primary">Oishi-so</h1>
        </div>
        <div className="cursor-pointer" id="hamburger">
          <GiHamburgerMenu size="1.5rem" />
        </div>
      </div>
      <div
        className="absolute w-full z-10 bg-white left-0 right-0 hidden lg:flex justify-between items-center px-6 py-4"
        id="menu"
      >
        <div className="flex gap-6 items-center">
          <NavLink to="/" className="font-medium text-dark-70">
            Home
          </NavLink>
          <NavLink to="/cart" className="font-medium text-dark-70">
            Cart
          </NavLink>
          <NavLink
            to="/cart"
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Login
          </NavLink>
        </div>
        <div>
          <RiCloseCircleFill size="1.5rem" />
        </div>
      </div>
    </nav>
  )
}
