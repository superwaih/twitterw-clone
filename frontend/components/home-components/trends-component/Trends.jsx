import React from 'react'
import {DotsCircleHorizontalIcon} from "@heroicons/react/outline"

const Trends = () => {
  return (
    <div className='py-2  cursor-pointer hover:bg-[#343840] hover:w-full hover:opacity-70 '>
        <div className='flex justify-between'>
            <h3 className='text-[#71767B]' >Trending in Nigeria</h3>
            <DotsCircleHorizontalIcon className='w-4 h-4' />
        </div>
        <div className="trend-keyword text-white">
            Papaya
        </div>
        <div className="numTweets text-[#71767B] ">
            22.5k Tweets
        </div>
    </div>
  )
}

export default Trends