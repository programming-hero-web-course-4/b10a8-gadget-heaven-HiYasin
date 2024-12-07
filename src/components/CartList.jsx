import { useState, useEffect, useContext } from "react";
import ListedProducts from "./ListedProducts";
import { Link, useLoaderData } from "react-router-dom";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { DashboardContext } from "./Root";
import { toast } from "react-toastify";
import successImg from '../assets/Group.png'
const CartList = () => {

    //get context
    const [cart, setCart, wishlist, setWishlist] = useContext(DashboardContext);

    const [cartProducts, setCartProducts] = useState([]);
    const allProducts = useLoaderData();

    useEffect(() => {
        const storedCartList = [...cart];

        const findCartProducts = allProducts.filter(product => storedCartList.includes(product.product_id));
        setCartProducts(findCartProducts);
    }, [])

    let totalPrice = 0;
    for (const product of cartProducts) {
        totalPrice += product.price;
    }
    const cost = totalPrice;
    //sort

    const handleSort = () => {
        const sortedList = [...cartProducts].sort((a, b) => b.price - a.price);
        setCartProducts(sortedList);
        toast.success("Sort successfully");
    }

    const purchase = () => {

        setCart([]);
        setCartProducts([]);


    }

    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <div className="modal" role="dialog" id="my_modal_8">
                <div className="modal-box flex flex-col items-center max-w-96">
                    <div>
                        <img src={successImg} alt="Purchase" />
                    </div>
                    <h3 className="font-bold text-lg">Payment Successfully</h3>
                    <p className="py-4">Thanks for purchasing.</p>
                    <div className="modal-action">
                        <Link to="/" className="btn">Close</Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-between item py-10">
                <h1 className="text-3xl font-bold">Cart</h1>
                <div className="flex items-center gap-5">
                    <div>
                        <p id="price" className="text-2xl font-bold">Total Price: {totalPrice}$</p>
                    </div>
                    <div>
                        <button onClick={handleSort} className="bg-gradient-to-b from-violet-600 to-pink-500 p-0.5 rounded-full">
                            <p className="px-5 py-2 bg-white rounded-full flex gap-2 items-center text-violet-600 font-bold text-lg">Sort by price <HiAdjustmentsVertical className="text-2xl font-extrabold" /></p>
                        </button>
                    </div>
                    <div>
                        <button className="bg-gradient-to-b from-violet-600 to-pink-500 rounded-full">
                            <a href="#my_modal_8" onClick={purchase} className={cartProducts.length === 0 ? `px-5 py-[10px] text-lg text-white font-semibold inline-block btn-disabled` : `px-5 py-[10px] text-lg text-white font-semibold inline-block`}>Purchase</a>
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