import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { DashboardContext } from "./Root";

import { toast } from "react-toastify";
const ListedProducts = ({ product }) => {

    const { image_url, product_name, description, price, product_id } = product;

    const [cart, setCart] = useContext(DashboardContext);
    const removeFromCart = (id) => {
        const currentCart = [...cart];
        const updatedCart = currentCart.filter((item) => item!== id);
        setCart(updatedCart);
        toast.error("Product deleted from the cart!");
    };
    console.log(cart);

    return (
        <div className="flex max-h-56 bg-white rounded-xl p-8 gap-10 ">
            <div className="flex-none w-72 overflow-hidden bg-[#D9D9D9] rounded-lg">
                <img src={image_url} alt={product_name} className="w-full h-full object-contain object-center" />
            </div>
            <div className="grow flex flex-col justify-between">
                <h2 className="text-3xl font-semibold">{product_name}</h2>
                <p className="text-lg text-gray-500"><span className="text-black font-medium">Description: </span>{description}</p>
                <h3 className="text-xl font-bold">Price: {price}$</h3>
            </div>
            <div className="flex-none w-14 flex place-items-center">
                <button onClick={()=>removeFromCart(product_id)}>
                    <MdDeleteForever className="text-4xl text-red-500" />
                </button>
            </div>
        </div>
    );
};

export default ListedProducts;