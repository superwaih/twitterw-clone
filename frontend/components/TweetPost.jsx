import React, { useEffect, useState } from 'react'
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { UploadIcon, DotsHorizontalIcon } from "@heroicons/react/outline"
import { HeartIcon } from "@heroicons/react/solid"
import { FcLike } from "react-icons/fc";
import Image from 'next/image';

import { useAuthContext } from '../context/AuthProvider';
import axios from 'axios';
import apiRoutes from '../services/routes';
import { useUserContext } from '../context/UserProvider';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const TweetPost = ({ post }) => {
    const { user, username } = useAuthContext()
    const { LikeDislikeTweet } = useUserContext()
    const [like, setLike] = useState(post?.likes?.length)


    const [isLiked, setIsLike] = useState(false)

    // useEffect(() => {
    //     console.log(post?.likes?.length)
    //     console.log(post?.likes?.includes(username))
    // }, [user, post?.likes])

    const handleLikeTweet = () => {
        LikeDislikeTweet(post?._id)
        setLike(isLiked ? like - 1 : like + 1)
        setIsLike(!isLiked)
    }
    return (
        <div className='flex p-2 w-full space-x-4 justify-between border-t border-b border-slate-800 mt-2'>
            <div className="profile h-12 w-12 rounded-3xl">
                <Image
                    width={100}
                    height={100}
                    className='rounded-full'
                    src={user?.profilPicture ? user.profilPicture : "/person/noAvatar.png"}
                    alt=""
                />
            </div>
            <div className='flex flex-grow flex-col space-x-4' >

                <div className='post ' >
                    <div className="user-details flex">
                        <h2>{post?.username}</h2>
                        <p>@{post?.username}</p>
                    </div>
                    <p className='leading-20 '>
                        {post?.tweet}

                    </p>
                </div>
                <div className="icons flex justify-between">
                    <div className="comment-btn cursor-pointer flex space-x-2">
                        <FaRegComment className='w-4 h-6' />
                        <p>{post?.comments?.length}</p>
                    </div>
                    <div className="retweet cursor-pointer space-x-2 flex">
                        <FaRetweet className='w- h-6' />
                        <p>3</p>
                    </div>
                    <div
                        onClick={handleLikeTweet}
                        className="like-tweet cursor-pointer space-x-2 flex">
                        {isLiked ? <AiFillHeart className='w-4 h-6 text-red-600' /> :

                            <AiOutlineHeart className='w-4 h-6' />}

                        <p>{like}</p>
                    </div>
                    <div className="share-tweet cursor-pointer space-x-2 flex ">
                        <UploadIcon className='w-4 h-6' />
                    </div>
                </div>
            </div>
            <div className='cursor-pointer'>
                <Menu>
                    <MenuButton as={Button}>
                    <DotsHorizontalIcon className='w-4 h-6' />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Report this tweet</MenuItem>
                        <MenuItem>Remove from list</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
                
            </div>
        </div>
    )
}

export default TweetPost