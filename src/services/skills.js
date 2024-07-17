import { apiClients } from "./config"

export const apiAddSkill = async (payload) => {
    return apiClients.post("/skills", payload);
};

export const apiGetSkills = async () => {
    return apiClients.get("/skills");
};

export const apiGetSkillById = async () => {
    return apiClients.get(`/skills/${id}`);
};

export const apiUpdateSkill = async () => {
    return apiClients.patch(`/skills/${id}`);
};

export const apiDeleteSkill = async () => {
    return apiClients.delete(`/skills/${id}`);
};