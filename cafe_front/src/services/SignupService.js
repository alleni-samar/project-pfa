import axios from 'axios';

const SIGNUP_API_BASE_URL = 'http://localhost:9091/api/auth/signup';

export const signupUser = async (user) => {
    try {
        const response = await axios.post(SIGNUP_API_BASE_URL, user);
        return response.data;  // Return the response data directly
    } catch (error) {
        throw new Error('Signup failed');  // Throw an error for handling in the component
    }
};
