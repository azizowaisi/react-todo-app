import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

function AuthProvider({children}) {

    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password){

        if(username === "azizowaisi" && password === "dummy"){
            setAuthenticated(true)
            return true
        } 

        setAuthenticated(false)
        
        return false
    }

    function logout(){
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider