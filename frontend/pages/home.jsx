import React from 'react'
import NewTweet from '../components/home-components/NewTweet'
import Layout from '../components/Layout'
import TweetPost from '../components/TweetPost'
import { useAuthContext } from '../context/AuthProvider'
import { useState, useEffect } from 'react'
import { CgSpinner } from 'react-icons/cg'
import { useUserContext } from '../context/UserProvider'
import apiRoutes from '../services/routes'
import axios from 'axios'
import { useRouter } from 'next/router'

const client = axios.create({
  baseURL: "https://twitterwclonedapi.herokuapp.com",

})

const Home = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const {token, user, username} = useAuthContext()
  console.log(username)
  const{ GetUserTweets, tweets, setTweets} = useUserContext()

  const fetchTweets = async () =>{
    setLoading(true)
    try {
      if(username){
        const res = await client.get(apiRoutes.GET_USER_TWEETS(username))
      if(res.data){
        setTweets(res.data)
      }
      }
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(() =>  {
    setLoading(true)
    try {
      fetchTweets()
      setLoading(false)
      
    } catch (error) {
      setLoading(false)
      
    }
  }, [router])
  
  return (
   <Layout>
        <div className='w-full border-slate-700 sm:border-l sm:border-r' >
           
            <NewTweet />
           {loading ? 
           
           <CgSpinner className="animate-spin text-blue-300 h-10 w-10 mx-auto text-center" />
           :
           
           
           <div className='mt-20 md:mt-4 z-10 '  >
          {tweets?.length > 0 && (
          tweets.map((tweet) => 
             (
              <TweetPost post={tweet} key={tweet._id} />
            )
          )

      )}
           

       
           </div>
           }
            {/* Post a  */}
            {/* Tweets */}
            
       
    </div>
    </Layout>
  )
}

export default Home