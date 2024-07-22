import { apiClient } from "./config";

export const apiGetUserDetails = async (username) => {
  return apiClient.get(`/auth/${username}`);
};