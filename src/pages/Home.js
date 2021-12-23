import React from 'react'
import Navbar from '../components/Navbar'

import { AiOutlineLeftSquare, AiOutlineRightSquare } from 'react-icons/ai'
import CarouselCard from '../components/CarouselCard'
import Restaurants from '../components/Restaurants'
import Footer from '../components/Footer'
import Sort from '../components/Sort'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pb-12">
        <div className="mb-6">
          <CarouselCard />
        </div>
        <div className="px-6 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-dark mb-3 md:text-3xl">
            Popular Restaurants
          </h1>
          <div className="sm:flex sm:justify-between sm:items-center sm:border-b sm:pb-6 sm:mb-12">
            <p className="text-xs md:text-base font-medium text-dark-50 mb-4 sm:mb-0">
              Select Your favourite restaurant special dish and make your day
              happy...
            </p>
            <Sort />
          </div>
          <div>
            <Restaurants />
          </div>
          <div className="flex gap-2 justify-center mt-8">
            <AiOutlineLeftSquare size="1.5rem" className="cursor-pointer" /> 1 /
            20 <AiOutlineRightSquare size="1.5rem" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
