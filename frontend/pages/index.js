import Head from 'next/head'
import Image from 'next/image'
import {BsTwitter} from "react-icons/bs"
import { AiFillApple } from "react-icons/ai";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDisclosure } from "@chakra-ui/react";


// import banner from "../public/assests/images/"


import {useTheme} from "next-themes"
import LoginModal from '../components/modals/LoginModal';
import StepOneSignUpModal from '../components/modals/SignUpModal';

export default function Home() {
  useEffect(() => {
    if(localStorage.token && localStorage.user){
      router.push("/home")
    }
  })
  const router = useRouter()
  const {onOpen, isOpen, onClose} = useDisclosure()
  return (
    <div className='flex h-screen bg-black flex-col-reverse md:flex-row'>
      <Head>
        <title>Twitter Clone</title>
      </Head>
       <div className='w-full md:max-h-[90%] bg-[url("/banner.png")] md:w-3/5'>
       {/* <Image
          width={720}
          height={700}
          
          objectFit="contain"
          src="/banner.png"
          alt=""
        /> */}
       </div>
      <div className='flex w-full md:w-2/5 space-y-12 text-white px-8 flex-col'>
      <div className="logo pt-20 ">
           <BsTwitter className="h-8 w-8" />
        </div>
        <h1 className='text-7xl font-bold text-white'>Happening Now</h1>
        <h2 className='text-3xl font-semibold' >Join Twitter Now</h2>
        <div className='flex flex-col space-y-4'>
        <button className='bg-white p-3 flex items-center justify-center text-black font-semibold rounded-3xl w-full sm:w-80 text-center' > 
        <AiFillApple className='w-8 h-6' />
         <span>Sign up with Apple </span>
         </button>
        <button
          onClick={() =>{
            router.push(
              `/?modal=flow-register`,
              `/?modal=flow-register`,
              { scroll: false }
            )}
          }
        className='bg-blue-400 text-center p-3 text-white font-semibold rounded-3xl w-full sm:w-80' >Sign up with button or em...</button>
        </div>

        <div className="sign-up flex flex-col space-y-4">
          <p className='font-bold' >Already have an account?</p>
          <button
              onClick={() =>{
                router.push(
                  `/?modal=flow-login`,
                  `/?modal=flow-login`,
                  { scroll: false }
                )}
              }
          className='bg-inherit outline text-blue-400 outline-slate-500 hover:opacity-80 font-bold outline-1 rounded-3xl w-full  sm:w-80 p-3'>Sign in</button>
        </div>
      </div>

         
   
  
      {router.query.modal === "flow-login" && <LoginModal modal={router.query.modal === "flow-login"} />}
      {router.query.modal === "flow-register" && <StepOneSignUpModal modal={router.query.modal === "flow-register"} />}

     
    </div>
  )
}

