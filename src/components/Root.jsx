import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import {Helmet} from "react-helmet";
const Root = () => {
    return (
        <div>
            <Helmet>
                <title>Gagdet Heaven | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <div className='bg-gray-200'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;