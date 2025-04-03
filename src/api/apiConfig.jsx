import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL2;
const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000, // Timeout sau 5 giây
    headers: {
        "Content-Type": "application/json",
    },
});

export default api; 