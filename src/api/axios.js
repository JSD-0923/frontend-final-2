import axios from "axios";

export const apiAxios = axios.create({
    baseURL: "https://backend-final-2-gosr.onrender.com"
});

apiAxios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }

)
apiAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }

)
