import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function Foods({ image, name, cost, rating }) {
  return (
    <div className="flex gap-4">
      <img
        src={image}
        alt={name}
        className="w-40 h-[100px] rounded-lg md:w-[255px] md:h-[150px] object-cover"
      />
      <div className="flex flex-col justify-center">
        <h2 className="font-bold text-dark-70 md:text-lg">{name}</h2>
        <p className=" text-dark-50 text-sm font-medium">$ {cost}</p>
        <div className="flex gap-1 items-center">
          <AiFillStar color="#FFCC00" />
          <strong className="text-sm">{rating}</strong>
        </div>
        <button className="text-primary border border-primary rounded-lg w-11 text-xs py-1">
          ADD
        </button>
      </div>
    </div>
  )
}
