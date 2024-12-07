import { useState, useEffect, useContext } from "react";

import WishlistedProducts from "./WishlistedProducts";
import { useLoaderData } from "react-router-dom";
import { DashboardContext } from "./Root";
import { toast } from "react-toastify";

const Wishlist = () => {
    //get context
    const [cart, setCart, wishlist, setWishlist] = useContext(DashboardContext);

    const [cartProducts, setCartProducts] = useState([]);
    const allProducts = useLoaderData();

    useEffect(() => {
        const storedCartList = [...wishlist];

        const findCartProducts = allProducts.filter(product => storedCartList.includes(product.product_id));
        setCartProducts(findCartProducts);
    }, [])


    let totalPrice = 0;
    for (const product of cartProducts) {
        totalPrice += product.price;
    }

    const handleSort = () => {
        const sortedList = [...cartProducts].sort((a, b) => b.price - a.price);
        setCartProducts(sortedList);
        toast.success("Sorted Successfully");
    }
    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <div className="flex justify-between item py-10">
                <h1 className="text-3xl font-bold">Wish List</h1>
            </div>
            <div className="space-y-10">
                {
                    cartProducts.map(product => (
                        <WishlistedProducts key={product.product_id} product={product}></WishlistedProducts>
                    ))
                }
            </div>
        </div>
    );
};

export default Wishlist;