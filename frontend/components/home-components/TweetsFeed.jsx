import React, { useEffect, useState } from 'react'
import { useUserContext } from '../../context/UserProvider'
import TweetPost from '../TweetPost'

const TweetsFeed = () => {
  const {GetUserTweets, tweets} = useUserContext()
  const [loading, setLoading] = useState(false)




 
  return (
    <div className='' >
      {tweets?.length > 0 && (
          tweets.map((tweet) => {
            return (
              <TweetPost tweet={tweet} key={tweet._id} />
            )
          })

      )}
          <TweetPost />

          <TweetPost />
            <TweetPost />
            <TweetPost />
            <TweetPost />
            <TweetPost />
            <TweetPost />
            <TweetPost />
            <TweetPost />
            <TweetPost />
            <TweetPost />
            <TweetPost />
    </div>
  )
}

export default TweetsFeed