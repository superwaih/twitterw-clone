import React, { useState } from 'react'
import { Tabs } from './sidebar-components/Tabs'
import { BsTwitter } from "react-icons/bs";
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import { useDisclosure } from '@chakra-ui/react';

import { AiOutlineUser } from "react-icons/ai";

import {HashtagIcon, HomeIcon, BellIcon, BookmarkIcon,
    User, DotsCircleHorizontalIcon,MailIcon , BookOpenIcon
} from "@heroicons/react/outline"
import { RiQuillPenFill } from "react-icons/ri";
import SideBarFooter from './sidebar-components/Footer';
import PostNewTweetModal from '../modals/PostNewTweetModal';


export const tabsName = [
    {name:"home", path: "/home", iconName: HomeIcon}, 
    {name:"explore", path: "/explore", iconName: HashtagIcon}, 
    {name:"notifications", path: "/notifications", iconName: BellIcon},
    {name:"messages", path: "/messages", iconName: MailIcon}, 
    {name:"bookmarks", path: "/bookmarks", iconName: BookmarkIcon}, 
    {name: "lists", path: "/lists", iconName: BookOpenIcon},
     {name: "profile", path: "/user", iconName: AiOutlineUser},
    {name: "more", path: "/more", iconName: DotsCircleHorizontalIcon},
  
]

export const Sidebar = () => {
    const {onOpen, isOpen, onClose } = useDisclosure()
    const router = useRouter()
    const [selectedTab, setSelectedtab] = useState(router.route.slice(1))
    
    
    const handleChange = () => {
        console.log(selectedTab)
    }
  return (
    <div className='relative hidden sm:inline-block h-screen max-w-[600px] pr-4 space-y-8 xl:min-w-[300px] border-slate-700 border-r' >
        <div className="logo p-2 ">
           <BsTwitter className="h-8 w-8" />
        </div>
        <div className=''>
            {tabsName.map((tab, index) =>{ 
                return(
                <Link key={index} href={tab.path}>
                    <a>
                    <Tabs key={index} Icon={tab.iconName} tab={tab.name}   />
                    </a>
                </Link>
                )

            })}


        </div>

        {/*tweet button  */}
        <div className='hidden lg:inline-flex w-full text-center items-center justify-center' >
        <button onClick={onOpen}  className='p-4 ml-auto  text-center hover:opacity-90 transition duration-150  w-full bg-[#1d9bf0] shadow-md hover:bg-[#1a8cd8] rounded-3xl' >
            Tweet
        </button>
        </div>
        <div className="lg:hidden rounded-full bg-[#1A8CD8] p-4 hover:opacity-80">
            <button onClick={onOpen}>
                <RiQuillPenFill className="w-4 h-4" />
            </button>
        </div>

        <div className="profile fixed bottom-4">
            <SideBarFooter Icon={DotsCircleHorizontalIcon}  />
        </div>

        

        {onOpen && <PostNewTweetModal onClose={onClose} isOpen={isOpen} onOpen={onOpen} />}
       
    </div>
  )
}
