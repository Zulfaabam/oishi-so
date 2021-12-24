import React from 'react'
import Navbar from '../components/Navbar'
import CarouselCard from '../components/CarouselCard'
import Restaurants from '../components/Restaurants'
import Footer from '../components/Footer'
// import Sort from '../components/Sort'

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
          <div>
            <Restaurants />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
