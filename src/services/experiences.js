import { apiClients } from "./config"

export const apiGetExperiences = async() => {
    return apiClients.get("/experiences");
};

export const apiAddExperience = async() => {
    return apiClients.post("/experiences");
};

export const apiUpdateExperience = async () => {
    return apiClients.patch(`/experiences/${id}`);
};

export const apiDeleteExperience = async () => {
    return apiClients.delete(`/experiences/${id}`)
};