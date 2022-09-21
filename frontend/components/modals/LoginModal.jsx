
import { useRouter } from "next/router";
import Modal from "../Modal";
import {FaTimes} from "react-icons/fa"
import { useAuthContext } from "../../context/AuthProvider";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";






function LoginModal({ modal }) {
  const {token, loginUser, loading} = useAuthContext() 
  const [post, setPost] = useState(null);
  const { register, handleSubmit } = useForm();
  const[showPassword, setShowPassword] = useState(false)
  
  const onSubmit = async (data) => {
    console.log(data);
    const newData = {
      email: data.email,
      password: data.password
    }

    loginUser(newData)
  
  }

  const closeOnEscapeKeyDown = (e) => {
    if((e.charCode || e.keyCode ) === 27){

    }
  }

  const router = useRouter();

 

  return (
    <>
      <Modal show={modal}>
        <div onClick={e => e.stopPropagation()} className="bg-black relative shadow-2xl w-4/5 md:w-2/5 items-center justify-center flex flex-col rounded-2xl text-white p-12" >
          <div className="flex">
            <div onClick={() =>
              router.push("/")
            } className="absolute cursor-pointer p-2 top-2 left-2">
              <FaTimes className="h-6 w-6 text-white" />
            </div>
            <AiOutlineTwitter className="h-12 w-12 text-white" />
          </div>
          <div className='flex flex-col space-y-4'>
            <button className='bg-white p-3 flex text-[13px] sm:text-[16px] items-center justify-center text-black font-semibold rounded-3xl w-full sm:w-80 text-center' >
              <AiFillApple className='md:w-8 w-4 md:h-6 h-4' />
              <span>Continue with Apple </span>
            </button>
            <button className='bg-white text-[13px] sm:text-[16px] p-3 flex items-center justify-center text-black font-semibold rounded-3xl w-full sm:w-80 text-center' >
              <AiOutlineGoogle className='md:w-8 w-4 md:h-6 h-4' />
              <span>Continue with Google </span>
            </button>
          </div>
          <form className="flex space-y-5 flex-col py-4 text-white" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Enter phone number, email or username" className="input-box" {...register("email", { required: true, maxLength: 20 })} />
            <div className="relative">
              <input className="bg-inherit w-full sm:w-80 outline-slate-400 outline outline-1 p-3"
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••••"
                {...register("password", { required: true, validate: "password", pattern: /^[A-Za-z]+$/i })} />
              <button

                type="button"
                className="absolute right-[10px] top-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Eye />
              </button>
            </div>

            {/* <button
                        className="bg-white p-3 block w-full mb-7 hover:bg-blue-800"
                        type="submit"
                        name="Sign In"
                        disabled={loading}
                      >
                        {loading ? (
                          <span className="block w-full">
                            <CgSpinner className="animate-spin h-6 w-6 mx-auto text-center" />
                          </span>
                        ) : (
                          <span>Login</span>
                        )}
                  </button> */}

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
                <span>Sign in</span>
              )}

            </button>


            {/* <button type="submit" 
            className='bg-white p-3 flex items-center justify-center text-black 
            font-semibold rounded-3xl w-full sm:w-80 text-center hover:opacity-90 focus:bg-blue-300' > 
         <span>Sign in </span>
         </button> */}
          </form>
        </div>
      </Modal>
    </>
  );
}

export default LoginModal;


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
