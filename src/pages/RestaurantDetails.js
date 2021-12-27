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
        setRestaurant({
          costForTwo: res.data.cost_for_two,
          cuisine: res.data.cuisine,
          id: res.data.id,
          imageUrl: res.data.image_url,
          itemsCount: res.data.items_count,
          location: res.data.location,
          name: res.data.name,
          opensAt: res.data.opens_at,
          rating: res.data.rating,
          reviews: res.data.reviews_count,
        })
        // console.log(res.data.food_items)
        setFood(
          res.data.food_items.map((f) => ({
            cost: f.cost,
            foodType: f.food_type,
            id: f.id,
            imageUrl: f.image_url,
            name: f.name,
            rating: f.rating,
          }))
        )
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
          <RestaurantBanner restaurantItem={restaurant} />
        )}
      </div>
      <div className="space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-8 px-4 mb-12 max-w-6xl md:px-6 mx-auto">
        {food === undefined ? (
          <Loading />
        ) : (
          food.map((item) => {
            return <Foods key={item.id} foodItem={item} />
          })
        )}
      </div>
      <Footer />
    </div>
  )
}
