import { apiClient } from "./config"

export const apiGetEducation = async () => {
    return apiClient.get("/education")
};

export const AddEducation = async () => {
    return apiClient.post("/education")
};

export const UpdateEducation = async () => {
    return apiClient.patch(`/education/${id}`)
};

export const DeleteEducation = async () => {
    return apiClient.delete(`/education/${id}`)
};