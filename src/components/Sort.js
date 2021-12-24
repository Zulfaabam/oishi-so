import React from 'react'
import { MdOutlineSort } from 'react-icons/md'

export default function Sort({ sortOption, sortByOptions, updateOption }) {
  const onChangeSort = (event) => {
    updateOption(event.target.value)
  }

  return (
    <div className="sm:flex sm:justify-between sm:items-center sm:border-b sm:pb-6 sm:mb-12">
      <p className="text-xs md:text-base font-medium text-dark-50 mb-4 sm:mb-0">
        Select Your favourite restaurant special dish and make your day happy...
      </p>
      <div className="flex gap-2 mb-8 sm:mb-0">
        <MdOutlineSort size="1.5rem" className="text-dark-60" />
        <form>
          <label htmlFor="sort" className="text-dark-60 font-medium">
            Sort by
          </label>
          <select
            name="sort"
            id="sort"
            value={sortOption}
            className="bg-transparent cursor-pointer text-dark-60 font-medium"
            onChange={onChangeSort}
          >
            {sortByOptions.map((eachOption) => {
              return (
                <option
                  value={eachOption.value}
                  key={eachOption.id}
                  className="font-bold text-sm"
                >
                  {eachOption.displayText}
                </option>
              )
            })}
          </select>
        </form>
      </div>
    </div>
  )
}
