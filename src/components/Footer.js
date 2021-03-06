import React from 'react'
import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark-90 pt-12 pb-8 space-y-6">
      <NavLink to="/" className="flex justify-center items-center gap-3">
        <img src="/logo-white.png" alt="website logo" />
        <h1 className="text-2xl md:text-3xl font-bold italic text-white">
          Oishi-so
        </h1>
      </NavLink>
      <div className="text-white text-center md:text-xl">
        <p>The only thing we are serious about is food.</p>
        <p>Contact us on</p>
      </div>
      <div className="text-white flex justify-center gap-6">
        <FaPinterestSquare className="text-2xl md:text-4xl cursor-pointer" />
        <FaInstagram className="text-2xl md:text-4xl cursor-pointer" />
        <FaTwitter className="text-2xl md:text-4xl cursor-pointer" />
        <FaFacebookSquare className="text-2xl md:text-4xl cursor-pointer" />
      </div>
      <p className="text-white text-center md:text-lg">
        Coded by{' '}
        <a
          href="https://abams.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-primary transition-all"
        >
          Abam
        </a>
      </p>
    </footer>
  )
}
