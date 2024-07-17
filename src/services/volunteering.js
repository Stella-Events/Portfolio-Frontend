import { apiClients } from "./config"

export const apiGetAllVolunteering = () => {
    return apiClients.get("/volunteerings")
};

export const apiAddVolunteering = () => {
    return apiClients.post("/volunteerings")
};

export const apiUpdateVolunteering = () => {
    return apiClients.patch(`/volunteerings/${id}`)
};

export const apiDeleteVolunteering = () => {
    return apiClients.delete(`/volunteerings/${id}`)
};