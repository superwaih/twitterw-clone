import React, { useState } from 'react'
import { useAuthContext } from '../../context/AuthProvider'
import Modal from '../Modal'
import { useForm } from 'react-hook-form'
import {FaTimes} from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import { CgSpinner } from "react-icons/cg";
import { useRouter } from 'next/router'





const StepOneSignUpModal = ({modal}) => {
  const router = useRouter()
  const {loading} = useAuthContext()
  const {register, handleSubmit} = useForm()
  const[showPassword, setShowPassword] = useState(false)


  const onSubmit = async(data) =>{
    console.log(data)
  }
  return (
    <>
    <Modal  show={modal}>
    <div className="bg-black relative shadow-2xl w-4/5 md:w-2/5 items-center justify-center flex flex-col rounded-2xl text-white p-12" >
          <div className="flex">
            <div onClick={() =>
              router.push("/")
            } className="absolute cursor-pointer p-2 top-2 left-2">
              <FaTimes className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2>Create your account</h2>
          <form className="flex space-y-5 flex-col py-4 text-white" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Name" className="bg-inherit w-full sm:w-80 outline outline-slate-500 outline-1 p-3" {...register("email", { required: true, maxLength: 20 })} />
            <input placeholder="Email" className="bg-inherit w-full sm:w-80 outline outline-slate-500 outline-1 p-3" {...register("email", { required: true, maxLength: 20 })} />
            <div>
              <h3>Date of birth</h3>
              <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
              
              <select name="month" id=""></select>
              <select name="day" id=""></select>
              <select name="year" id="">
               
              </select>

            </div>
            
          


            <button className="bg-white p-3 flex items-center 
                justify-center text-black font-semibold hover:opacity-90
                    focus:bg-blue-300 rounded-3xl sm:w-80 
                "
              type="submit"
              disabled={loading}
            >
              {loading ? (<span>
                <CgSpinner className="animate-spin h-6 w-6 mx-auto text-center" />
              </span>) : (
                <span>Sign Up</span>
              )}

            </button>

          </form>
        </div>
    </Modal>
    </>
  )
}

export default StepOneSignUpModal


const Eye = ({ props }) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14.5887C3.582 14.5887 0 9.90275 0 8.58875C0 7.27474 3.582 2.58875 8 2.58875C12.418 2.58875 16 7.27474 16 8.58875C16 9.90275 12.418 14.5887 8 14.5887ZM8 12.5887C9.06087 12.5887 10.0783 12.1673 10.8284 11.4172C11.5786 10.667 12 9.64961 12 8.58875C12 7.52788 11.5786 6.51046 10.8284 5.76032C10.0783 5.01017 9.06087 4.58875 8 4.58875C6.93913 4.58875 5.92172 5.01017 5.17157 5.76032C4.42143 6.51046 4 7.52788 4 8.58875C4 9.64961 4.42143 10.667 5.17157 11.4172C5.92172 12.1673 6.93913 12.5887 8 12.5887ZM8 10.5887C7.46957 10.5887 6.96086 10.378 6.58579 10.003C6.21071 9.62789 6 9.11918 6 8.58875C6 8.05831 6.21071 7.5496 6.58579 7.17453C6.96086 6.79946 7.46957 6.58875 8 6.58875C8.53043 6.58875 9.03914 6.79946 9.41421 7.17453C9.78929 7.5496 10 8.05831 10 8.58875C10 9.11918 9.78929 9.62789 9.41421 10.003C9.03914 10.378 8.53043 10.5887 8 10.5887Z"
      fill="#A3ACB9"
    />
  </svg>
);