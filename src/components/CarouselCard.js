import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
// import Cookies from 'js-cookie'

export default function CarouselCard() {
  const [carouselImg, setCarouselImg] = useState()

  useEffect(() => {
    async function getCarouselImg() {
      const jwtToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'
      try {
        const res = await axios.get(
          'https://apis.ccbp.in/restaurants-list/offers',
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        )
        // console.log(res.data.offers)
        setCarouselImg(res.data.offers)
      } catch (err) {
        console.error(err)
      }
    }

    getCarouselImg()
  }, [])
  return (
    <div>
      <Carousel autoPlay showThumbs={false} showStatus={false} infiniteLoop>
        {carouselImg === undefined
          ? 'Loading'
          : carouselImg.map((img) => {
              return (
                <div key={img.id} className="">
                  <img src={img.image_url} alt="" className="object-cover" />
                </div>
              )
            })}
      </Carousel>
    </div>
  )
}