import React, { useRef, useState } from 'react'
import {PhotographIcon, GiftIcon, EmojiHappyIcon, CalendarIcon, LocationMarkerIcon} from "@heroicons/react/outline"
import { FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '../../context/AuthProvider'
import { useUserContext } from '../../context/UserProvider'



const NewTweet = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user, username, authenticated} = useAuthContext()
    const{PostTweet} = useUserContext()

    const [selectedFile, setSelectedFile] = useState(null)
    const inputRef = useRef(null)
    const[showEmoji, setShowEmoji] = useState(false)
    const[input, setInput] =useState("")
    const filePickerRef = useRef(null)
    // {console.log(inputRef.current.value)}

    const addImageToPost = (e) =>{
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(authenticated){
            const data = {
                tweet: inputRef.current.value,
                username: username,
                userId: user?._id
            }

            PostTweet(data)
            inputRef.current.value = ""
            
        }
     
       
    }
    
  return (
    <div className='hidden  md:flex border-slate-700 w-full border-b p-2 space-x-4 mt-12' >
        <div className="profile h-12 w-12 rounded-3xl">
        <Image
          width={100}
          height={100}
          className='rounded-full'
            src={user?.profilPicture ? user.profilPicture : "/person/noAvatar.png" }
            alt=""
          />
        </div>
        <div className="search flex-grow-0 w-full">
            <form
            onSubmit={handleSubmit}
            className="searchbar p-4 space-y-2">
                <textarea 
                ref={inputRef}
                value={input}
                rows="2"
                onChange={(e) => setInput(e.target.value)}
                className='outline-none text-xl tracking-wide w-full min-h-[50px]  border-none bg-inherit placeholder:text-gray-500'
                 placeholder='Whats happening?'
                 type="text" />

                 
                <p className='text-medium text-blue-400 opacity-80' >Everyone can reply</p>
                {selectedFile && (
                    <div className="relative">
                        <div
                        onClick={() => setSelectedFile(null)}
                        className="absolute h-8 w-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer">
                            <FaTimes className='text-white h-5' />
                        </div>
                        <img src={selectedFile} 
                        className="rounded-2xl max-h-80 object-contain"
                        alt="" />
                    </div>
                )}
                <div className="upload-icons flex justify-between w-full">
                    <div className="icons w-full flex p-2 space-x-4 cursor-pointer">
                        <div onClick={() => filePickerRef.current.click()}>
                        <PhotographIcon className='h-4 text-blue-800 w-4  ' />
                        <input type="file" 
                        onChange={addImageToPost}
                        hidden ref={filePickerRef} />
                        </div>
                        <GiftIcon className='h-4 text-blue-800 w-4  ' />
                        <EmojiHappyIcon 
                        onClick={() => setShowEmoji(!showEmoji)}
                        className='h-4 text-blue-800 w-4  ' />
                        <CalendarIcon className='h-4 text-blue-800 w-4 ' />
                    </div>
                    <div className='flex' >
                      <button  
                      type='submit'
                       disabled={!input && !selectedFile}
                 className='p-2
                 text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default
                 hover:opacity-90 transition duration-150  w-full bg-[#1d9bf0]' 
                    
                    >
                    Tweet
                    </button>
                    </div>
                </div>
                {showEmoji && (
                    <Picker 
                    // onSelect={addEmoji}
                    style={{
                        position: "absolute",
                        marginTop: "465px",
                        marginLeft: -40,
                        maxWidth: "320px",
                        borderRadius: "20px"
                    }}
                    theme="dark"
                    />
                )}
            </form>
        </div>
    </div>
  )
}

export default NewTweet