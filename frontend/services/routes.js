const apiRoutes = {
    AUTH_REGISTER: "/api/auth/register",
    AUTH_LOGIN: "/api/auth/login",
    GET_USER_TWEETS: (username) => `/api/handle/tweets/${username}`,
    POST_TWEET: `/api/handle/tweet`,
    LIKE_DISLIKE_TWEETS: (tweet_id) => `/api/handle/tweet/like/${tweet_id}`,
    DELETE_TWEET: (tweet_id) => `/api/handle/tweet/delete/${tweet_id}`,
    UPDATE_USER: (userId) => `/api/user/update/${userId}`,
    DELETE_USER_ACCOUNT: (userId) =>`api/user/delete/${userId}`,
    GET_SINGLE_USER: (username) =>`/api/user/${username}`,
    FOLLOW_A_USER: (userId) =>`/api/user/${userId}/follow`,
    UNFOLLOW_A_USER: (userId) => `/api/user/${userId}/unfollow`,
    GET_USER_FRIENDS: (userId) => `/api/user/friends/${userId}`
}

export default apiRoutes;