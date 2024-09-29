import React, { useState } from 'react';
import { createBill } from '../services/BillService';
import { useNavigate } from 'react-router-dom';

const BillComponents = () => {
  const [formData, setFormData] = useState({
    bill_date: '',
    contact_number: '',
    email: '',
    name: '',
    payment: '',
    product_detail: '',
    total_amount: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleCreateBill = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await createBill(formData);
        console.log('Bill created:', response.data);
        navigate('/bills');
      } catch (error) {
        console.error('Error creating bill:', error);
      }
    }
  };

  const validateForm = () => {
    const errorsCopy = {};
    let valid = true;

    const { bill_date, contact_number, email, name, payment, product_detail, total_amount } = formData;

    if (!bill_date.trim()) { errorsCopy.bill_date = 'Date is required'; valid = false; }
    if (!contact_number.trim()) { errorsCopy.contact_number = 'Contact number is required'; valid = false; }
    if (!email.trim()) { errorsCopy.email = 'Email is required'; valid = false; }
    if (!name.trim()) { errorsCopy.name = 'Name is required'; valid = false; }
    if (!payment.trim()) { errorsCopy.payment = 'Payment is required'; valid = false; }
    if (!product_detail.trim()) { errorsCopy.product_detail = 'Product detail is required'; valid = false; }
    if (!total_amount.trim()) { errorsCopy.total_amount = 'Total amount is required'; valid = false; }

    setErrors(errorsCopy);
    return valid;
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
          <div className='card'>
            <div className='card-header text-center'>
              <h6 className='mb-0'>Add Bill</h6>
            </div>
            <div className='card-body p-2'>
              <form onSubmit={handleCreateBill}>
                <div className='mb-2'>
                  <label className='form-label'>Date:</label>
                  <input
                    type='date'
                    name='bill_date'
                    value={formData.bill_date}
                    className={`form-control form-control-sm ${errors.bill_date ? 'is-invalid' : ''}`}
                    onChange={handleChange}
                  />
                  {errors.bill_date && <div className='invalid-feedback'>{errors.bill_date}</div>}
                </div>

                {['contact_number', 'email', 'name', 'payment', 'product_detail', 'total_amount'].map((field, idx) => (
                  <div key={idx} className='mb-2'>
                    <label className='form-label'>{field.replace(/_/g, ' ').toUpperCase()}:</label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      placeholder={field.replace(/_/g, ' ')}
                      value={formData[field]}
                      className={`form-control form-control-sm ${errors[field] ? 'is-invalid' : ''}`}
                      onChange={handleChange}
                    />
                    {errors[field] && <div className='invalid-feedback'>{errors[field]}</div>}
                  </div>
                ))}

                <button type='submit' className='btn btn-success btn-sm w-100'>Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillComponents;
