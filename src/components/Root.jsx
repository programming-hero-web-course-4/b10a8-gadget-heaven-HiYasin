import React, { useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { Helmet } from "react-helmet";
import { createContext } from 'react';
export const DashboardContext = createContext([]);

const Root = () => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    console.log(cart,wishlist);
    return (
        <DashboardContext.Provider value={[cart, setCart, wishlist, setWishlist]}>

            <div>
                <Helmet>
                    <title>Gagdet Heaven | Home</title>
                </Helmet>
                <Navbar></Navbar>
                <div className='bg-gray-200'>
                    <Outlet />
                </div>
                <Footer></Footer>
            </div>

        </DashboardContext.Provider>
    );
};

export default Root;