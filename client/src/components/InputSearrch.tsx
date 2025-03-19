import React, { memo } from 'react'
import { IoMdSearch } from 'react-icons/io'

const InputSearrch = () => {
  return (
    <div className="flex items-center border rounded-full text-13 pr-4">
      <input
        placeholder="Search..."
        type="text"
        className="bg-transparent py-1 border-none outline-none flex-1 pl-4"
      />
      <IoMdSearch />
    </div>
  )
}

export default memo(InputSearrch)
