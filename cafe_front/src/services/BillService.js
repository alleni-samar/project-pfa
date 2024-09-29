// services/BillService.js
import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:9091/api/bills';

export const listBills = () => {
    return axios.get(REST_API_BASE_URL);
}

export const getBillById = (id) => {
    return axios.get(`${REST_API_BASE_URL}/${id}`);
};

export const createBill = (bill) => {
    return axios.post(REST_API_BASE_URL, bill);
};

export const deleteBill = (id) => {
    return axios.delete(`${REST_API_BASE_URL}/${id}`);
};
