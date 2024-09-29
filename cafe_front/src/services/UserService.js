import axios from "axios";
const REST_API_BASE_URL='http://localhost:9091/api/users';

export const listUsers = () =>{
    return axios.get(REST_API_BASE_URL);
}
export const getUserById = (id) => {
    return axios.get(`${REST_API_BASE_URL}/${id}`);
};
export const updateUser = (id, user) => axios.put(`${REST_API_BASE_URL}/${id}`, user);