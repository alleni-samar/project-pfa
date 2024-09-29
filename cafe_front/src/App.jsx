import React from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListbillComponents from './components/ListbillComponents';
import BillComponents from './components/BillComponents';
import ListUserComponents from './components/ListUserComponents';
import ListProductComponents from './components/ListProductComponents';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import HomeComponent from './components/HomeComponent';
import DashboardComponent from './components/DashboardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductComponents from './components/ProductComponents';

import CategoryList from './components/CategoryList';
import AddCategory from './components/AddCategory';
import UpdateCategory from './components/UpdateCategory';

import UserComponents from './components/UserComponents';
import OrderFormComponents from './components/OrderFormComponents';
import OrderSummaryComponents from './components/OrderSummaryComponents';
import AllProComponents from './components/AllProComponents';

import Home2Components from './components/Home2Components';



function App() {
    return (
        <Router>
            <div className="content-container">
                <HeaderComponent />
                <Routes>
                    <Route path='/users' element={<ListUserComponents />} />
                    <Route path='/products' element={<ListProductComponents />} />
                    
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/signup' element={<SignupComponent />} />
                    <Route path='/update-user/:id' element={<UserComponents />} />
                    <Route path='/update-product/:id' element={<ProductComponents />} />
                    <Route path='/dash' element={<DashboardComponent />} />
                    <Route path='/products' element={<ListProductComponents/>} />
                    <Route path='/home' element={<HomeComponent />} />
                    <Route path='/orders' element={<OrderFormComponents />} />
                  { /* <Route path='/' element={<HomeComponent />} />*/}
                    <Route path='/save-product' element={<ProductComponents />} />
                    <Route path="/order-summary" element={<OrderSummaryComponents/>} />
                         {/* Bill Routes */}
                    <Route path='/bills' element={<ListbillComponents />} />
                    <Route path='/save-bill' element={<BillComponents />} />
                    <Route path='/delete-bill/:id' element={<BillComponents />} />


                    <Route path="/allPro" element={<AllProComponents />} />



                    <Route path='/category' element={<CategoryList/>} />


                    <Route path="/add-category" element={<AddCategory />} />
                    <Route path="/update-category/:id" element={<UpdateCategory />} />


                    <Route path="/" element={<Home2Components />} />

                </Routes>
                <FooterComponent />
            </div>
        </Router>
    );
}

export default App;
