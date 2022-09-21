import React from 'react'
import Image from "next/image"
import { useAuthContext } from '../../../context/AuthProvider'
const SideBarFooter = ({Icon}) => {
  const {user, username } = useAuthContext()

  return (
    <div className='flex space-x-2 mt-auto
    
    text-[#d9d9d9] hoverAnimation xl:ml-auto xl:-mr-5
    items-center p-4 justify-between hover:bg-gray-900  hover:rounded-3xl ' >
        <div className="profile h-12 w-12 rounded-3xl">
          <Image
          width={100}
          height={100}
          className='rounded-full'
            src={user?.profilPicture ? user.profilPicture : "/person/noAvatar.png" }
            alt=""
          />
        </div>
       <div className='lg:flex items-center space-x-4 hidden font-medium' >
       <div className="user-details">
            <h2>Name</h2>
            <p>@{username}</p>
        </div>
        <div className="icon">
        <Icon className=" w-4 h-5 xl:inline ml-10" />
        </div>
       </div>
    </div>
  )
}

export default SideBarFooter