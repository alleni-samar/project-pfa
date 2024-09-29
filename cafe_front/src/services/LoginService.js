import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:9091/api/auth/login';

export const login = async (email, password) => {
    try {
        const response = await axios.post(REST_API_BASE_URL, { email, password });
        return response.data;  // Return the response data directly
    } catch (error) {
        throw new Error('Login failed');  // Throw an error for handling in the component
    }
};
