import { apiClients } from "./config";

export const apiAddProfile = async () => {
    return apiClients.post("/profiles");
};