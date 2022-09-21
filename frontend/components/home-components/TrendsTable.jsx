import React from 'react'
import Trends from './trends-component/Trends'

const TrendsTable = () => {
  return (
    <div className='py-4 px-2 hidden md:block space-y-2 bg-[#1D1F23]  rounded-2xl ml-4' >
        <h2 className='text-white'>Trends for you</h2>

        <Trends />
        <Trends />
        <Trends />
        <Trends />
        <Trends />
        <Trends />
    </div>
  )
}

export default TrendsTable