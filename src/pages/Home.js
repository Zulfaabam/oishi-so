import React from 'react'
import Navbar from '../components/Navbar'

import { AiOutlineLeftSquare, AiOutlineRightSquare } from 'react-icons/ai'
import CarouselCard from '../components/CarouselCard'
import Restaurants from '../components/Restaurants'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pb-12">
        <div className="mb-6">
          <CarouselCard />
        </div>
        <div className="px-6">
          <h1 className="text-2xl font-bold text-dark mb-3">
            Popular Restaurants
          </h1>
          <p className="text-xs font-medium text-dark-50 mb-4">
            Select Your favourite restaurant special dish and make your day
            happy...
          </p>
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
