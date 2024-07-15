import axios from 'axios'

// Base URL Configuration
const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClients = axios.create(
    {
        baseURL: baseUrl, 
        // withCredentials: (true)   
    });
