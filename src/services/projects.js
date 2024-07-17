import { apiClients } from "./config";

export const apiGetAllProjects = async () => {
    return apiClients.get("/projects")
};

export const apiAddProject = async () => {
    return apiClients.post("/projects")
};

export const apiUpdateProject = async () => {
    return apiClients.patch(`/projects/${id}`)
};

export const apiDeleteProject = async () => {
    return apiClients.delete(`/projects/${id}`)
};