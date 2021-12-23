import React from 'react'
import { MdOutlineSort } from 'react-icons/md'

export default function Sort() {
  return (
    <div className="flex gap-2 mb-8 sm:mb-0">
      <MdOutlineSort size="1.5rem" className="text-dark-60" />
      <form>
        <label htmlFor="sort" className="text-dark-60 font-medium">
          Sort by
        </label>
        <select
          name="sort"
          id="sort"
          className="bg-transparent cursor-pointer text-dark-60 font-medium"
        >
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </form>
    </div>
  )
}
