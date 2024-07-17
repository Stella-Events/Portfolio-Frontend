import { apiClients } from "./config"

export const apiGetAchievements = async () => {
    return apiClients.get("/achievements");
};

export const apiAddAchievements = async () => {
    return apiClients.post("/achievements");
};

export const apiUpdateAchievement = async () => {
    return apiClients.patch(`/achievements/${id}`)
};

export const apiDeleteAchievement = async () => {
    return apiClients.delete(`/achievements/${id}`)
};