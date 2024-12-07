import { useState } from "react";
import { Helmet } from "react-helmet";
import CartList from './CartList';
import Wishlist from './Wishlist';
const Dashboard = () => {
    const [list, setList] = useState('cart');
    let btnBg = '';
    let btnBg2='';
    list === 'cart'? btnBg='border border-white':btnBg='bg-[#9538E2] border border-white text-white';
    list === 'wishlist'? btnBg2='border border-white':btnBg2='bg-[#9538E2] border border-white text-white';
    
    //console.log(list);
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Dashboard</title>
            </Helmet>
            <div className="text-center bg-[#9538E2] text-white pt-16 pb-10">
                <div className="max-w-screen-md mx-auto">
                    <h2 className="text-4xl font-bold my-5">Dashboard</h2>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="space-x-5 my-5">
                    <button onClick={()=>setList('cart')} className={`btn rounded-full px-8 text-xl ${btnBg}`}>Cart</button>
                    <button onClick={()=>setList('wishlist')} className={`btn rounded-full text-xl ${btnBg2}`}>Wishlist</button>
                </div>
            </div>
            <div>
                {
                    list === 'cart' && <CartList></CartList>
                    
                }
                {
                    list === 'wishlist' && <Wishlist></Wishlist>
                }
            </div>
        </div>
    );
};

export default Dashboard;