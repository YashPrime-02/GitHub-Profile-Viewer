import axios from "axios";

/**
 * Read base URL from environment variables
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

/**
 * Fetch user profile
 */
export const fetchUser = async (username) => {
  try {
    const { data } = await api.get(`/users/${username}`);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "API Error");
  }
};

/**
 * Fetch repositories
 */
export const fetchRepos = async (username) => {
  try {
    const { data } = await api.get(`/users/${username}/repos`);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "API Error");
  }
};