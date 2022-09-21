import React from 'react'
import { useRouter } from 'next/router'
export const Tabs = ({Icon, tab }) => {
  const router = useRouter()
  const routeName = router.route.slice(1)

  return (
    <div className='space-y-4 flex hoverAnimation text-center' >
        <div className='flex p-2 md:flex cursor-pointer  space-x-4'>
        <Icon className={router.route.slice(1) === tab ? "h-8 w-8 font-bold capitalize " :  "h-8 w-8 capitalize"} />
        <p  className={router.route.slice(1) === tab ? "hidden lg:inline-flex font-bold  capitalize" :  "hidden lg:inline-flex capitalize"} >{tab}</p>
        </div>
    </div>
  )
}
