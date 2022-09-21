import React from 'react'
import {SearchIcon} from "@heroicons/react/outline"

const SearchBar = () => {
  return (
    <div className='rounded-3xl
    flex
     focus:border-[#0A3A5A] 
     focus:border-2  mt-2 ml-2 p-4 items-center 
     w-full space-x-2 justify-between bg-[#202327]  mb-4 shadow-sm' >
        <SearchIcon className='w-4 h-4 ' />

        <input
        placeholder='Search Twitter'
        className='outline-none bg-inherit' type="text" />
    </div>
  )
}

export default SearchBar