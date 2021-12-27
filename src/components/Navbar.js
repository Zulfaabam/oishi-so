import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseCircleFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const openMenu = () => {
    setMenuIsOpen(true)
  }

  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  const menu = () => {
    return (
      <div
        className="absolute w-full z-10 bg-white left-0 right-0 flex justify-between items-center px-6 py-4"
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
            to="/login"
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Login
          </NavLink>
        </div>
        <div className="cursor-pointer" onClick={() => closeMenu()}>
          <RiCloseCircleFill className="text-2xl" />
        </div>
      </div>
    )
  }

  return (
    <nav className="w-full relative bg-white">
      <div className="max-w-6xl flex justify-between items-center px-6 py-4 mx-auto">
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="website logo" />
          <h1 className="text-2xl font-bold italic text-primary">Oishi-so</h1>
        </NavLink>
        <div className="cursor-pointer sm:hidden" onClick={() => openMenu()}>
          <GiHamburgerMenu className="text-2xl" />
        </div>
        <div className="hidden sm:flex gap-6 items-center">
          <NavLink to="/" className="font-medium text-dark-70">
            Home
          </NavLink>
          <NavLink to="/cart" className="font-medium text-dark-70">
            Cart
          </NavLink>
          <NavLink
            to="/login"
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Login
          </NavLink>
        </div>
      </div>
      {menuIsOpen ? menu() : ''}
    </nav>
  )
}
