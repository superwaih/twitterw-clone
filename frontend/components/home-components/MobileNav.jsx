import React from 'react'
import Link from 'next/link'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  Button,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'

import {HomeIcon, BellIcon, SearchIcon, MailIcon, SparklesIcon } from "@heroicons/react/outline"

const MobileNav = () => {
  return (
    <div className='sm:hidden z-50' >
    <div className="header flex items-center p-2 justify-between border-slate-700 border-b fixed top-0 right-0 left-0 bg-black ">
       <div className='flex items-center space-x-2' >
       <div className="profile h-12 w-12 bg-white rounded-3xl">
        </div>
        <Link href="/home" >
        <h1>Home</h1>
        </Link>

       </div>

        
        <div>
        <Popover colorScheme='blackAlpha' >
            <PopoverTrigger>
                <SparklesIcon  className='h-6 cursor-pointer w-6' />
            </PopoverTrigger>
            <PopoverContent >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Confirmation!</PopoverHeader>
                <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            </PopoverContent>
        </Popover>


                   </div>
        </div>
         <div className='fixed flex bg-black p-4 cursor-pointer border-slate-700 space-x-4 left-0 right-0 bottom-0 justify-between border-t' >
         
        <Link href="/home" >
          <a>
            <HomeIcon className='w-8 h-8' />
          </a>
        </Link>
       
        <Link href="/home" >
          <a>
          <SearchIcon className='w-8 h-8' />
          </a>
        </Link>

        <Link href="/notifications" >
          <a>
          <BellIcon className='w-8 h-8' />
          </a>
        </Link>

        <Link href="/messages" >
          <a>
          <MailIcon className='w-8 h-8' />
          </a>
        </Link>
        
        
        

    </div>
    </div>
   
  )
}

export default MobileNav