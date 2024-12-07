import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { useContext } from "react";
import { DashboardContext } from "./Root";


const ProductDetails = () => {
    const products = useLoaderData();
    const param = useParams();
    //console.log(param);
    //console.log(products.length);
    const product = products.find((p) => p.product_id == parseInt(param.product_id));
    const { product_id, product_name, image_url, category, price, rating, description, availability, specification } = product;
    //console.log(product);

    const [cart, setCart, wishlist, setWishlist] = useContext(DashboardContext);
    const handleCart=(id)=>{
        const newCart = [...cart];
        if(newCart.find(x=>x === id)){
            toast.error("This product has already been added to the cart!");
        }else{
            newCart.push(id);
            setCart(newCart);
            toast.success("Added product to cart successfully");
        }
    }

    const handlewishlist=(id)=>{
        const newWishlist = [...wishlist];
        if(newWishlist.find(x=>x === id)){
            toast.error("This product has already been added to the wish list!");
        }else{
            newWishlist.push(id);
            setWishlist(newWishlist);
            toast.success("Added product to wish list successfully");
        }
    }
    //console.log(cart);
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | {category}</title>
            </Helmet>
            <div className="text-center bg-[#9538E2] text-white h-[500px]">
                <div className="max-w-screen-md mx-auto pt-[100px]">
                    <h2 className="text-3xl font-bold ">Product Details</h2>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-8 max-w-screen-lg mx-auto bg-white p-8 rounded-3xl -translate-y-[40%]">
                <div className="col-span-6 rounded-xl flex justify-center items-center bg-gray-500/20 overflow-hidden">
                    <img src={image_url} alt="{product_name}" className="w-full h-full object-contain object-center"/>
                </div>
                <div className="flex flex-col gap-2 justify-between items-start col-span-6">
                    <h3 className="text-3xl font-semibold">{product_name}</h3>
                    <p>Price: {price} $</p>
                    <div>
                        <div
                            className={`border ${availability ? 'border-green-500 bg-green-500/30' : 'border-red-500 bg-red-500/30'} rounded-full px-4 py-1`}>{availability ? 'In Stock' : 'Out of Stock'}
                        </div>
                    </div>
                    <p className={'text-base text-gray-500'}>{description}</p>
                    <h3 className={'text-xl font-semibold'}>Specification:</h3>
                    <ol className={'list-decimal ml-5 text-base text-gray-500'}>
                        {
                            specification.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ol>
                    <h3 className={'text-xl font-semibold'}>Rating:</h3>
                    <div className={'flex items-center'}>
                        <ReactStars
                            count={5}
                            size={24}
                            value={rating}
                            isHalf={true}
                            edit={false}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <span className={'text-base text-gray-500 font-semibold bg-gray-500/10 ml-2 px-4 py-1 rounded-full'}>{rating}</span>
                    </div>
                    <div className="space-x-3 flex">
                        <button onClick={()=>{handleCart(product_id)}} className={`btn rounded-full text-lg text-white font-semibold bg-[#9538E2]`}>
                            Add to Cart <IoCartOutline className="text-2xl text-white" />
                            </button>
                        <button onClick={()=>{handlewishlist(product_id)}} className={wishlist.find(x=> x === product_id)?`btn btn-disabled rounded-full text-lg font-extrabold text-[#9538E2] border border-[#9538E2]`:`btn rounded-full text-lg font-extrabold text-[#9538E2] border border-[#9538E2]`}>
                            <IoHeartOutline />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;