
import { NavLink, useLocation, Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { DashboardContext } from "./Root";
const Navbar = () => {
    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/discount">Discount</NavLink></li>
    </>

    let currentLocation = useLocation();
    // console.log(currentLocation);
    let currentPath = currentLocation.pathname;
    let bgText = "bg-[#9538E2] text-white";
    const homePath = ["/", "/smart-phone", "/laptop", "/smart-watch", "/gaming-console", "/tablet"];
    // currentPath === '/'? bgText = "bg-[#9538E2] text-white":bgText = "bg-white text-black";
    // console.log(currentPath);

    if (homePath.includes(currentPath)) {
        bgText = "bg-[#9538E2] text-white mt-5";
        // console.log("true");
    } else {
        bgText = "bg-white text-black";
        // console.log("false");
    }

    //this is for cart and heart icon
    const [cart, setCart, wishlist, setWishlist] = useContext(DashboardContext);

    //console.log(wishlist);
    return (
        <div className="max-w-11/12 mx-auto px-[5%]">
            <div className={`navbar px-[5%] py-4 rounded-t-2xl ${bgText}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <NavLink to='/' className="font-bold text-xl">Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-4 ">


                        <div className="indicator">
                            <span className="indicator-item badge bg-black border-none text-white">{cart.length}</span>
                            <Link to="/dashboard">
                            <button className="btn bg-white rounded-full text-black"><GrCart /></button>
                            </Link>
                            
                        </div>



                        <div className="indicator">
                            <span className="indicator-item badge bg-black border-none text-white">{wishlist.length}</span>
                            <Link to="/dashboard">
                            <button className="btn bg-white rounded-full text-black"><FaRegHeart /></button>
                            </Link>
                        </div>


                </div>
            </div >
        </div >
    );
};

export default Navbar;