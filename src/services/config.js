import axios from 'axios'

// Base URL Configuration
const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClients = axios.create(
    {
        baseURL: baseUrl, 
        // withCredentials: (true)   
    });

    const token = localStorage.getItem("accessToken")

    if(token){
        apiClients.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }