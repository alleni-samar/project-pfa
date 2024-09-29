import React, { useEffect, useState } from 'react';
import { listProducts, deleteProduct as deleteProductService } from '../services/ProductService';
import { useNavigate } from 'react-router-dom';

const ListProductComponents = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
  }, []);

  function getAllProducts() {
    listProducts()
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function updateProduct(id) {
    navigate(`/update-product/${id}`);
  }

  function deleteProduct(id) {
    console.log(id);
    deleteProductService(id).then((response) => {
      getAllProducts();
    }).catch(error => {
      console.error(error);
    });
  }

  function save() {
    navigate(`/save-product`);
  }

  return (
    <div className='container'>
      <h2 className='text-center'>List of Products</h2>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Description</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Status</th>
            <th style={{ width: '300px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.description}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.status}</td>
              <td>
                <button className='btn btn-info mx-2' onClick={() => updateProduct(product.id)}>Update</button>
                <button className='btn btn-danger mx-2' onClick={() => deleteProduct(product.id)}>Delete</button>
                <button className='btn btn-success mx-2' onClick={() => save()}>Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default ListProductComponents;
