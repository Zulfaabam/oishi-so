import React from 'react'
import Navbar from '../components/Navbar'
import { MdOutlineSort } from 'react-icons/md'
import { AiOutlineLeftSquare, AiOutlineRightSquare } from 'react-icons/ai'
import CarouselCard from '../components/CarouselCard'
import Restaurants from '../components/Restaurants'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 pb-12">
        <div>
          <CarouselCard />
        </div>
        <div className="px-6">
          <h1>Popular Restaurants</h1>
          <p>
            Select Your favourite restaurant special dish and make your day
            happy...
          </p>
          <div className="flex gap-2">
            <MdOutlineSort size="1.5rem" />
            <form>
              <label htmlFor="sort">Sort by {}</label>
              <select
                name="sort"
                id="sort"
                className="bg-transparent cursor-pointer"
              >
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
              </select>
            </form>
          </div>
          <div>
            <Restaurants />
          </div>
          <div>
            <AiOutlineLeftSquare size="1.5rem" /> 1 / 20{' '}
            <AiOutlineRightSquare size="1.5rem" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
