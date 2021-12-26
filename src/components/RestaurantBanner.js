import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function RestaurantBanner({
  image,
  name,
  cuisine,
  location,
  rating,
  reviews,
  costForTwo,
}) {
  return (
    <div className="bg-[#333] h-48 flex justify-center items-center gap-4 overflow-hidden md:h-80 2xl:h-96 md:px-6">
      <img
        src={image}
        alt="restaurant"
        className="rounded-full lg:rounded-lg w-56 lg:w-80 xl:w-96 2xl:w-[445px] -ml-16 -mt-14 md:mt-0 md:ml-0 aspect-square lg:aspect-auto"
      />
      <div className="text-white">
        <div className="space-y-2 mb-4">
          <h1 className="font-medium md:text-4xl">{name}</h1>
          <p className="text-xs md:text-base">{cuisine}</p>
          <p className="text-xs md:text-sm">{location}</p>
        </div>
        <div className="flex text-xs">
          <div className="border-r pr-4">
            <div className="flex items-center gap-1 md:text-sm">
              <AiFillStar color="#fff" />
              <strong>{rating}</strong>
            </div>
            <p className="text-dark-20">{reviews} Ratings</p>
          </div>
          <div className="pl-4">
            <strong className="md:text-sm">$ {costForTwo}</strong>
            <p className="text-dark-20">Cost for two</p>
          </div>
        </div>
      </div>
    </div>
  )
}
