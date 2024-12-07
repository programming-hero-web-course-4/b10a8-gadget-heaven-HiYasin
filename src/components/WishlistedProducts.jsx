import { MdDeleteForever } from "react-icons/md";
import { addToList, removeFromList } from "../utility/addToDb";
import { useContext } from "react";
import { DashboardContext } from "./Root";
import { toast } from "react-toastify";
const WishlistedProducts = ({ product }) => {
    const { product_id, image_url, product_name, description, price } = product;

    const [cart, setCart, wishlist, setWishlist] = useContext(DashboardContext);
    const handleCart=(id)=>{
        const newCart = [...cart];
        const newWishlist = [...wishlist];
        if(newCart.find(x=>x === id)){
            toast.error("This product has already been added to the cart");
        }else{
            newCart.push(id);
            setCart(newCart);
            newWishlist.splice(newWishlist.indexOf(id), newWishlist.indexOf(id)+1);
            console.log(newWishlist.indexOf(id), newWishlist.indexOf(id)+1);
            setWishlist(newWishlist);
            toast.success("Product added to the cart successfully");
        }
    }
    const removeFromCart = (id) => {
        const currentCart = [...wishlist];
        const updatedCart = currentCart.filter((item) => item!== id);
        setWishlist(updatedCart);
        toast.success("Product is removed from wish list successfully");
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
                <div>
                    <button onClick={()=>{handleCart(product_id)}} className="text-lg text-white font-medium px-5 py-2 rounded-full bg-[#9538E2]">Add to Cart</button>
                </div>
            </div>
            <div className="flex-none w-14 flex place-items-center">
                <button onClick={()=>{removeFromCart(product_id)}}>
                    <MdDeleteForever className="text-4xl text-red-500" />
                </button>
            </div>
        </div>
    );
};

export default WishlistedProducts;