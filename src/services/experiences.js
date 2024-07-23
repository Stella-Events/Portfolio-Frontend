import { apiClient } from "./config"

export const apiAddExperience = async() => {
    return apiClient.post("/experiences");
};

export const apiGetExperiences = async() => {
    return apiClient.get("/experiences");
};

export const apiGetExperienceById = async (id) => {
    return apiClient.get(`/experiences/${id}`);
  };

export const apiUpdateExperience = async (id, payload) => {
    return apiClient.patch(`/experiences/${id}`, payload);
};

export const apiDeleteExperience = async (id) => {
    return apiClient.delete(`/experiences/${id}`)
};