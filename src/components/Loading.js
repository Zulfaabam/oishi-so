import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

export default function Loading() {
  return (
    <div className="h-48 w-full flex justify-center items-center">
      <ClipLoader color="#F7931E" />
    </div>
  )
}
