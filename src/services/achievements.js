import { apiClient } from "./config"

export const apiGetAchievements = async () => {
    return apiClient.get("/achievements");
};

export const apiAddAchievements = async () => {
    return apiClient.post("/achievements");
};

export const apiUpdateAchievement = async () => {
    return apiClient.patch(`/achievements/${id}`)
};

export const apiDeleteAchievement = async () => {
    return apiClient.delete(`/achievements/${id}`)
};