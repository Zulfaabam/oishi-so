import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full">
      <div className="max-w-6xl flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="website logo" />
          <h1 className="text-2xl font-bold italic text-primary">Oishi-so</h1>
        </div>
        <div>
          <GiHamburgerMenu size="1.5rem" />
        </div>
      </div>
    </nav>
  )
}
