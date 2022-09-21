import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import toast from "../components/toast.component"
import apiRoutes from "../services/routes"



const client = axios.create({
    baseURL: "https://twitterwclonedapi.herokuapp.com",

})

const AuthContext = createContext()

export const useAuthContext =() => useContext(AuthContext)

const AuthProvider = ({children}) => {
    const[loading, setLoading] = useState(false)
    const router = useRouter()
    const [authenticated, setAuthenticated] = useState(true)
    const[totalTweets, setTotalTweets] = useState([])
    const[username, setUsername] = useState("")
    const[token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    useEffect(() => {
        if(localStorage.token && localStorage.user){
            const userInfo = JSON.parse(localStorage.user)
            setUser(userInfo)
            setToken(localStorage.token)
            setUsername(userInfo["username"])

             router.push("/home")

        }
     
    }, [])
    

    const fetchUserTweets = () => {
        
    }
    const loginUser = async (data) =>{
        setLoading(true)
        try {
            const login = await client.post(apiRoutes.AUTH_LOGIN, data)
            if(login.data){
                const userinfo = login.data.user
                setUser(userinfo)
                setToken(login.data?.token)
                setUsername(login.data?.user.username)
                setAuthenticated(true)
                router.push("/home")
                toast("Wow so easy!", "logged in", "success")
                setLoading(false)
                console.log(userinfo)
                localStorage.setItem("user", JSON.stringify(userinfo))
                localStorage.setItem("token", login.data.token)
            }
            
        } catch (error) {
            console.log(error)
            toast("An error occured", "not logged in", "error")
            setLoading(false)
        }
        

    }

    const logout = () =>{
        localStorage.clear()
        router.push("/")
    }
    return (
        
        <AuthContext.Provider
        value={{
            loginUser,
            loading,
            username,
            token,
            authenticated,
            user
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider