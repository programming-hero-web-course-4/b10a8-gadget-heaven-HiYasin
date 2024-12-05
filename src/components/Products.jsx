import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Product from "./Product";
import './Products.css';
const Products = () => {

    const products = useLoaderData();
    const [currentCategory, setCategory] = useState('/');
    const [displayProducts, setDisplay] = useState(products);
    const handleFilter = (category) => {
        if (category === '/') {
            setCategory('/');
            setDisplay(products);
        } else {
            const filteredProducts = products.filter(product => product.category === category);
            setCategory(category);
            setDisplay(filteredProducts);
            
        }
    }



    return (
        <div className="px-[5%] -translate-y-64">
            <h1 className="text-5xl text-center py-5">Explore Cutting-Edge Gadgets</h1>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3">
                    <ul className="p-6 border space-y-2 bg-white rounded-2xl">
                        <li><NavLink to='/' onClick={() => { handleFilter('/') }} className="btn w-full btn-circle">All Products</NavLink></li>
                        <li><NavLink to='laptop' onClick={() => { handleFilter('Laptop') }} className="btn w-full btn-circle">Laptop</NavLink></li>
                        <li><NavLink to='tablet' onClick={() => { handleFilter('Tablet') }} className="btn w-full btn-circle">Tablet</NavLink></li>
                        <li><NavLink to='smart-watch' onClick={() => { handleFilter('Smartwatch') }} className="btn w-full btn-circle">Smart Watch</NavLink></li>
                        <li><NavLink to='gaming-console' onClick={() => { handleFilter('Gaming Console') }} className="btn w-full btn-circle">Gaming Console</NavLink></li>
                        <li><NavLink to='smart-phone' onClick={() => { handleFilter('Smartphone') }} className="btn w-full btn-circle">Smart Phones</NavLink></li>
                    </ul>
                </div>

                <div className="col-span-9 grid grid-cols-3 gap-5">
                    {
                        displayProducts.map(product => <Product key={product.product_id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;