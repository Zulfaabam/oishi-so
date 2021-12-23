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
        <h1 className="text-2xl md:text-3xl font-bold italic text-white">
          Oishi-so
        </h1>
      </div>
      <div>
        <p className="text-white text-center text-2xl">
          The only thing we are serious about is food.
        </p>
        <p className="text-white text-center text-2xl">Contact us on</p>
      </div>
      <div className="text-white flex justify-center gap-6">
        <FaPinterestSquare className="text-2xl md:text-5xl" />
        <FaInstagram className="text-2xl md:text-5xl" />
        <FaTwitter className="text-2xl md:text-5xl" />
        <FaFacebookSquare className="text-2xl md:text-5xl" />
      </div>
    </footer>
  )
}
