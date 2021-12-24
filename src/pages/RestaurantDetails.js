import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Loading from '../components/Loading'
import { AiFillStar } from 'react-icons/ai'

export default function RestaurantDetails() {
  const { restaurantId } = useParams()
  const [restaurant, setRestaurant] = useState()
  const [food, setFood] = useState()

  useEffect(() => {
    async function getRestaurant() {
      const jwtToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'
      try {
        const res = await axios.get(
          `https://apis.ccbp.in/restaurants-list/${restaurantId}`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        )
        // console.log(res)
        // console.log(res.data)
        setRestaurant(res.data)
        // console.log(res.data.food_items)
        setFood(res.data.food_items)
      } catch (err) {
        console.error(err)
      }
    }

    getRestaurant()
  }, [restaurantId])

  return (
    <div>
      <Navbar />
      <div className="mb-8 ">
        {restaurant === undefined ? (
          <Loading />
        ) : (
          <div className="bg-[#333] h-48 flex justify-center items-center gap-4 overflow-hidden md:h-80 2xl:h-96 md:px-6">
            <img
              src={restaurant.image_url}
              alt="restaurant"
              className="rounded-full lg:rounded-lg w-56 lg:w-80 xl:w-96 2xl:w-[445px] -ml-16 -mt-14 md:mt-0 md:ml-0 aspect-square lg:aspect-auto"
            />
            <div className="text-white">
              <div className="space-y-2 mb-4">
                <h1 className="font-medium md:text-4xl">{restaurant.name}</h1>
                <p className="text-xs md:text-base">{restaurant.cuisine}</p>
                <p className="text-xs md:text-sm">{restaurant.location}</p>
              </div>
              <div className="flex text-xs">
                <div className="border-r pr-4">
                  <div className="flex items-center gap-1 md:text-sm">
                    <AiFillStar color="#fff" />
                    <strong>{restaurant.rating}</strong>
                  </div>
                  <p className="text-dark-20">
                    {restaurant.reviews_count} Ratings
                  </p>
                </div>
                <div className="pl-4">
                  <strong className="md:text-sm">
                    $ {restaurant.cost_for_two}
                  </strong>
                  <p className="text-dark-20">Cost for two</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-8 px-4 mb-12 max-w-6xl md:px-6 mx-auto">
        {food === undefined ? (
          <Loading />
        ) : (
          food.map((f) => {
            return (
              <div key={f.id} className="flex gap-4">
                <img
                  src={f.image_url}
                  alt={f.name}
                  className="w-40 h-[100px] rounded-lg md:w-[255px] md:h-[150px] object-cover"
                />
                <div className="flex flex-col justify-center">
                  <h2 className="font-bold text-dark-70 md:text-lg">
                    {f.name}
                  </h2>
                  <p className=" text-dark-50 text-sm font-medium">
                    $ {f.cost}
                  </p>
                  <div className="flex gap-1 items-center">
                    <AiFillStar color="#FFCC00" />
                    <strong className="text-sm">{f.rating}</strong>
                  </div>
                  <button className="text-primary border border-primary rounded-lg w-11 text-xs py-1">
                    ADD
                  </button>
                </div>
              </div>
            )
          })
        )}
      </div>
      <Footer />
    </div>
  )
}
