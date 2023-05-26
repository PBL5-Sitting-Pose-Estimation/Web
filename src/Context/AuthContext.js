import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../Utils/constants";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    const [token, setToken] = useState("")
    const [displayName, setDisplayName] = useState("")

    const loginUser = async (username, password) => {
        try {
            const res = await axios.post(API_URL + 'auth/login', {
                username: username,
                password: password
            });
            if(res.data.success){
                localStorage.setItem('accessToken', res.data.access_token)
                setToken(res.data.access_token)
            }
            return res.data;
        } catch(err) {
            if(err.response.data) return err.response.data
            else return { success: false, message: err.message }
        }
    }

    const loadUser = () => {
        setToken(localStorage.getItem('accessToken'))
    }

    const getUser = () => {
        return {token, displayName}
    }

    const AuthContextData = {loginUser, loadUser, getUser}

    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
