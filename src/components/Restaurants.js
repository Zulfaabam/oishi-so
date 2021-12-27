import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  AiFillStar,
  AiOutlineLeftSquare,
  AiOutlineRightSquare,
} from 'react-icons/ai'
import Loading from './Loading'
import { NavLink } from 'react-router-dom'
import Sort from './Sort'

export default function Restaurants({ history }) {
  const [restaurant, setRestaurant] = useState()
  const [activePage, setActivePage] = useState(1)

  const sortByOptions = [
    {
      id: 0,
      displayText: 'Highest',
      value: 'Highest',
    },
    {
      id: 1,
      displayText: 'Lowest',
      value: 'Lowest',
    },
  ]

  const [sortOption, setSortOption] = useState(sortByOptions[0].value)

  useEffect(() => {
    async function getRestaurant() {
      const jwtToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'
      const limit = 9
      const offset = (activePage - 1) * limit
      try {
        const res = await axios.get(
          `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${sortOption}`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        )
        // console.log(res)
        // console.log(res.data.restaurants)
        setRestaurant(res.data.restaurants)
      } catch (err) {
        console.error(err)
      }
    }

    getRestaurant()
  }, [activePage, sortOption])

  const updateOption = (option) => {
    setSortOption(option)
  }

  return (
    <div>
      <Sort
        sortOption={sortOption}
        sortByOptions={sortByOptions}
        updateOption={updateOption}
      />
      <div className="space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-8 lg:grid-cols-3">
        {restaurant === undefined ? (
          <Loading />
        ) : (
          restaurant.map((r) => {
            return (
              <div key={r.id} className="flex gap-4">
                <NavLink
                  to={`/restaurant/${r.id}`}
                  onClick={() => history.push(`/restaurant/${r.id}`)}
                >
                  <img
                    src={r.image_url}
                    alt={r.name}
                    className="w-40 h-[100px] object-cover rounded-lg "
                  />
                </NavLink>
                <div className="flex flex-col justify-center">
                  <NavLink
                    to={`/restaurant/${r.id}`}
                    onClick={() => history.push(`/restaurant/${r.id}`)}
                  >
                    <h2 className="font-bold text-dark-70 md:text-lg">
                      {r.name}
                    </h2>
                  </NavLink>
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
      <div className="flex gap-2 justify-center mt-8">
        <AiOutlineLeftSquare
          className="cursor-pointer text-2xl"
          onClick={() =>
            activePage === 1 ? null : setActivePage(activePage - 1)
          }
        />{' '}
        {activePage} / 4{' '}
        <AiOutlineRightSquare
          className="cursor-pointer text-2xl"
          onClick={() =>
            activePage === 4 ? null : setActivePage(activePage + 1)
          }
        />
      </div>
    </div>
  )
}
