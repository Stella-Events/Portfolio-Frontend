import { apiClient } from "./config";

export const apiAddProfile = async (payload) => {
  return apiClient.post("/profiles", payload);
};

export const apiGetProfile = async () => {
  return apiClient.get("/profiles");
};

export const apiUpdateProfile = async (id, payload) => {
  return apiClient.patch(`/profiles/${id}`, payload);
};