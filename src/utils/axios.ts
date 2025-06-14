import axios, {type AxiosInstance} from 'axios';

// Function to create an Axios instance with common configuration
const createAxiosInstance = (baseURL: string): AxiosInstance => {
    return axios.create({
        baseURL,
    });
};

const axfetch = createAxiosInstance(import.meta.env.VITE_BACKEND_URL as string);

export default axfetch;
