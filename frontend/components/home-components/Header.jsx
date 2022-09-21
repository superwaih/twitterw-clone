import React, { useState } from 'react'
import {SparklesIcon} from "@heroicons/react/outline"
import { useRouter } from 'next/router'
import { useDisclosure } from "@chakra-ui/react";

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


import ChangeTweestsModal from '../modals/PostNewTweetModal'
import { useAuthContext } from '../../context/AuthProvider';

const Header = () => {
   const {user} = useAuthContext()
  const[openModal, setOpenModal] = useState(false)
  const { isOpen,  onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const handleChangeTweet = () =>{
   
      setOpenModal(!openModal)
  }
 

  return (
     <div className="hidden fixed sm-w-2/5 max-w-2xl md:min-w-[400px] lg:min-w-[540px] xl:min-w-[600px] md:flex h-12 bg-black justify-between p-2"> 
        <div className='' >
        <h1 className='cursor-pointer capitalize ' >{router.route.slice(1)}</h1>
          </div>
          <div className='bg-black' >
          <Popover colorScheme='blackAlpha' >
            <PopoverTrigger>
                <SparklesIcon onClick={onOpen} className='h-6 cursor-pointer w-6' />
            </PopoverTrigger>
            <PopoverContent >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Confirmation!</PopoverHeader>
                <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            </PopoverContent>
        </Popover>
            
              

            
          </div>
       
          {/* {onOpen && <ChangeTweestsModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />} */}
           

     </div>
    
  )
}

export default Header