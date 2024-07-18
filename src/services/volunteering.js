import { apiClient } from "./config"

export const apiGetAllVolunteering = () => {
    return apiClient.get("/volunteerings")
};

export const apiAddVolunteering = () => {
    return apiClient.post("/volunteerings")
};

export const apiUpdateVolunteering = () => {
    return apiClient.patch(`/volunteerings/${id}`)
};

export const apiDeleteVolunteering = () => {
    return apiClient.delete(`/volunteerings/${id}`)
};