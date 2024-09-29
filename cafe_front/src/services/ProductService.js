import axios from "axios";

const PRODUCT_API_BASE_URL = 'http://localhost:9091/api/products';

export const listProducts = () => {
    return axios.get(PRODUCT_API_BASE_URL);
};

export const createProduct = (product) => axios.post(PRODUCT_API_BASE_URL, product);

export const getProductById = (id) => axios.get(`${PRODUCT_API_BASE_URL}/${id}`);

export const updateProduct = (id, product) => axios.put(`${PRODUCT_API_BASE_URL}/${id}`, product);
export const deleteProduct = (id , product)=>axios.delete(`${PRODUCT_API_BASE_URL}/${id}`,product);