import { apiClient } from "./config"

export const apiAddVolunteering = (payload) => {
    return apiClient.post("/volunteerings", payload)
};

export const apiGetAllVolunteering = () => {
    return apiClient.get("/volunteerings")
};

export const apiGetVolunteeringById = async (id) => {
    return apiClient.get(`/volunteerings/${id}`);
  };

export const apiUpdateVolunteering = (id, payload) => {
    return apiClient.patch(`/volunteerings/${id}`, payload)
};

export const apiDeleteVolunteering = (id) => {
    return apiClient.delete(`/volunteerings/${id}`)
};