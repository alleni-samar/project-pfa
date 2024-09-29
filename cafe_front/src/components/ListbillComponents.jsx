import React, { useEffect, useState } from 'react';
import { listBills, deleteBill as deleteBillService } from '../services/BillService';
import { useNavigate } from 'react-router-dom';

const ListbillComponents = () => {
  const [bills, setBills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBills();
  }, []);

  const getAllBills = async () => {
    try {
      const response = await listBills();
      console.log(response.data);
      setBills(response.data);
    } catch (error) {
      console.error('Error fetching bills:', error.response ? error.response.data : error.message);
    }
  };

  const deleteBill = async (id) => {
    try {
      await deleteBillService(id);
      getAllBills();
    } catch (error) {
      console.error('Error deleting bill:', error.response ? error.response.data : error.message);
    }
  };

  const createBill = () => {
    navigate(`/save-bill`);
  };

  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <button className='btn btn-success' onClick={createBill}>Add New Bill</button>
        <h2 className='text-center'>List of Bills</h2>
      </div>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Bill Id</th>
            <th>Bill Date</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Name</th>
            <th>Payment</th>
            <th>Product Detail</th>
            <th>Total Amount</th>
            <th style={{ width: '150px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.id}</td>
              <td>{bill.bill_date}</td>
              <td>{bill.contact_number}</td>
              <td>{bill.email}</td>
              <td>{bill.name}</td>
              <td>{bill.payment}</td>
              <td>{bill.product_detail}</td>
              <td>{bill.total_amount}</td>
              <td>
                <button className='btn btn-danger btn-sm mx-1' onClick={() => deleteBill(bill.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListbillComponents;
