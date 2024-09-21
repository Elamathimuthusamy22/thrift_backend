// Admin.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';
import './Admin.css'; // Ensure you have some basic styling

const Admin = () => {
    return (
        <div className='admin'>
            <Sidebar />
            <div className='content'>
                <Routes>
                    <Route path="addproduct" element={<AddProduct />} />
                    <Route path="listproduct" element={<ListProduct />} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;
