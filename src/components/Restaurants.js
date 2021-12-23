import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'

import Loading from './Loading'

export default function Restaurants() {
  const [restaurant, setRestaurant] = useState()

  useEffect(() => {
    async function getRestaurant() {
      const jwtToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'
      const offset = 1
      const limit = 9
      try {
        const res = await axios.get(
          `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        )
        console.log(res)
        console.log(res.data.restaurants)
        setRestaurant(res.data.restaurants)
      } catch (err) {
        console.error(err)
      }
    }

    getRestaurant()
  }, [])

  return (
    <div>
      <div className="space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-8 lg:grid-cols-3">
        {restaurant === undefined ? (
          <Loading />
        ) : (
          restaurant.map((r) => {
            return (
              <div key={r.id} className="flex gap-4">
                <img
                  src={r.image_url}
                  alt={r.name}
                  className="w-40 h-[100px] rounded-lg "
                />
                <div className="flex flex-col justify-center">
                  <h2 className="font-bold text-dark-70 md:text-lg">
                    {r.name}
                  </h2>
                  <p className="text-xs text-dark-50 md:text-sm">{r.cuisine}</p>
                  <div className="flex gap-1 items-center">
                    <AiFillStar color="#FFCC00" />
                    <strong className="text-sm">{r.user_rating.rating}</strong>
                    <p className="text-xs text-dark-50">
                      ({r.user_rating.total_reviews} reviews)
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
