import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'

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
      <h1>restaurants</h1>
      {restaurant === undefined
        ? 'Loading'
        : restaurant.map((r) => {
            return (
              <div key={r.id}>
                <img src={r.image_url} alt={r.name} />
                <h2>{r.name}</h2>
                <p>{r.cuisine}</p>
                <p>
                  <AiFillStar size="1.5rem" color="#FFCC00" />{' '}
                  <strong>{r.user_rating.rating}</strong> (
                  {r.user_rating.total_reviews} reviews)
                </p>
              </div>
            )
          })}
    </div>
  )
}
