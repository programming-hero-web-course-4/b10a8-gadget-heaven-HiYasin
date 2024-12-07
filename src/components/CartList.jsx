import { useState, useEffect } from "react";
import { getList } from '../utility/addToDb';
import ListedProducts from "./ListedProducts";
import { useLoaderData } from "react-router-dom";
import { HiAdjustmentsVertical } from "react-icons/hi2";
const CartList = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const allProducts = useLoaderData();
    console.log(allProducts);

    useEffect(() => {
        const storedCartList = getList('cartlist');

        const findCartProducts = allProducts.filter(product => storedCartList.includes(product.product_id));
        setCartProducts(findCartProducts);
    }, []) 
    console.log(cartProducts.length)

    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <div className="flex justify-between item py-10">
                <h1 className="text-3xl font-bold">Cart</h1>
                <div className="flex items-center gap-5">
                    <div>
                        <p className="text-2xl font-bold">Total Price: 999 $</p>
                    </div>
                    <div>
                        <button className="bg-gradient-to-b from-violet-600 to-pink-500 p-0.5 rounded-full">
                            <p className="px-5 py-2 bg-white rounded-full flex gap-2 items-center text-violet-600 font-bold text-lg">Sort by price <HiAdjustmentsVertical className="text-2xl font-extrabold"/></p>
                        </button>
                    </div>
                    <div>
                        <button className="bg-gradient-to-b from-violet-600 to-pink-500 rounded-full">
                            <p className="px-5 py-[10px] text-lg text-white font-semibold">Purchase</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="space-y-10">
                {
                    cartProducts.map(product => (
                        <ListedProducts key={product.product_id} product={product}></ListedProducts>
                    ))
                }
            </div>
        </div>
    );
};

export default CartList;