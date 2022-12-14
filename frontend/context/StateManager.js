import AuthProvider from "./AuthProvider"
import UserProvider from "./UserProvider"

const StateManager = ({children}) =>{
    return(
        <AuthProvider>
            <UserProvider>
            {children}
            </UserProvider>
        </AuthProvider>
    )
}

export default StateManager