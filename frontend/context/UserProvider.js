import { useAuthContext } from "./AuthProvider";
import toast from "../components/toast.component"
import apiRoutes from "../services/routes";
import axios from "axios";
import { createContext, useContext, useState } from "react";


const UserContext = createContext()

const client = axios.create({
    baseURL: "https://twitterwclonedapi.herokuapp.com",

})

export const useUserContext = () => useContext(UserContext)

const UserProvider = ({children}) => {
    const {token, username, user, authenticated} = useAuthContext()
    const [tweets, setTweets] = useState([])
    const[isLoading, setIsLoading] = useState(false)

const PostTweet = async (data) => {
        setIsLoading(true)
        try {
            const res = await client.post(apiRoutes.POST_TWEET, data)

            if(res.status > 200 && res.status < 400){
               toast("new tweet add", "tweet sent", "success")
               setIsLoading(false)
               setTweets((prev) => [res.data, ...prev])
            }
        } catch (error) {
            console.log(error)
            toast("An error occured", "tweet not sent", "error")

            setIsLoading(false)
            
        }
    }

    const LikeDislikeTweet = async(tweetId) =>{
        try {
            const res = client.put(apiRoutes.LIKE_DISLIKE_TWEETS(tweetId), username)
            toast("tweet liked or disliked")
        } catch (error) {
         console.log(error)   
        }

    }

    const GetUserTweets = async()=>{
        setIsLoading(true)
        try {
            if(authenticated){
                const tweets = await client.get(apiRoutes.GET_USER_TWEETS(username))
                setTweets(other => [tweets.data, ...other])
            }
            
        } catch (error) {
            setIsLoading(false)
            toast("An error occured", "not logged in", "error")


        }
    }

    return(
        <UserContext.Provider
        value={{
            GetUserTweets,
            tweets,
            setTweets,
            LikeDislikeTweet,
            PostTweet,
        }}
        
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider