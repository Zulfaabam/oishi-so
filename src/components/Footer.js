import React from 'react'
import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-dark-90 py-12 space-y-6">
      <div className="flex justify-center items-center gap-3">
        <img src="/logo-white.png" alt="website logo" className="" />
        <h1 className="text-2xl font-bold italic text-white">Oishi-so</h1>
      </div>
      <div>
        <p className="text-white text-center">
          The only thing we are serious about is food.
        </p>
        <p className="text-white text-center">Contact us on</p>
      </div>
      <div className="text-white flex justify-center gap-6">
        <FaPinterestSquare size="1.5rem" />
        <FaInstagram size="1.5rem" />
        <FaTwitter size="1.5rem" />
        <FaFacebookSquare size="1.5rem" />
      </div>
    </footer>
  )
}
