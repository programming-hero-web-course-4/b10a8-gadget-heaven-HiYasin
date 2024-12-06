import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className='bg-gray-200'>
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;