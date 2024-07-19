import { apiClient } from "./config";

export const apiGetAllProjects = async () => {
    return apiClient.get("/projects")
};

export const apiAddProject = async () => {
    return apiClient.post("/projects")
};

export const apiUpdateProject = async () => {
    return apiClient.patch(`/projects/${id}`)
};

export const apiDeleteProject = async () => {
    return apiClient.delete(`/projects/${id}`)
};