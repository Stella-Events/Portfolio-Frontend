import { apiClients } from "./config"

export const apiSignup = async(payload) => {
    return apiClients.post("/auth/signup", payload); 
};

export const apiLogin = async(payload) => {
    return apiClients.post("/auth/login", payload); 
};

export const apiCheckUsernameExists = async(userName) => {
    return apiClients.get(`/auth/${userName}`); 
};

