// apiService.js
import axios from 'axios';

const baseURL = 'https://all-easy-tool-backend.vercel.app/';

const apiService = axios.create({
    baseURL,
});

export const fetchData = async (endpoint) => {
    try {
        const response = await apiService.get(endpoint);
        console.log("res", response);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // You can handle errors as needed
    }
};
