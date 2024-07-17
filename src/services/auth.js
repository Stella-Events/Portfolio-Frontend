import { apiClients } from "./config"

export const apiSignup = async(payload) => {
    return apiClients.post("/auth/signup", payload); 
};

export const apiLogin = async(payload) => {
    return apiClients.post("/auth/token", payload); 
};

export const apiCheckUsernameExists = async(username) => {
    return apiClients.get(`/auth/${username}`); 
};

