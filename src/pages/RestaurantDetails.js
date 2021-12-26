import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Loading from '../components/Loading'
import RestaurantBanner from '../components/RestaurantBanner'
import Foods from '../components/Foods'

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
          <RestaurantBanner
            image={restaurant.image_url}
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            location={restaurant.location}
            rating={restaurant.rating}
            reviews={restaurant.reviews_count}
            costForTwo={restaurant.cost_for_two}
          />
        )}
      </div>
      <div className="space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-8 px-4 mb-12 max-w-6xl md:px-6 mx-auto">
        {food === undefined ? (
          <Loading />
        ) : (
          food.map((f) => {
            return (
              <Foods
                key={f.id}
                image={f.image_url}
                name={f.name}
                cost={f.cost}
                rating={f.rating}
              />
            )
          })
        )}
      </div>
      <Footer />
    </div>
  )
}
