import { apiClient } from "./config";

export const apiAddProfile = async () => {
    return apiClient.post("/profiles");
};