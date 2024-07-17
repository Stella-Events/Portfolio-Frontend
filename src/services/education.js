import { apiClients } from "./config"

export const apiGetEducation = async () => {
    return apiClients.get("/education")
};

export const AddEducation = async () => {
    return apiClients.post("/education")
};

export const UpdateEducation = async () => {
    return apiClients.patch(`/education/${id}`)
};

export const DeleteEducation = async () => {
    return apiClients.delete(`/education/${id}`)
};