
import { NavLink, useLocation } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
const Navbar = () => {
    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="statistics">Statistics</NavLink></li>
        <li><NavLink to="dashboard">Dashboard</NavLink></li>
        <li><a>Others</a></li>
    </>

    let currentLocation = useLocation();
    let currentPath = currentLocation.pathname;
    let bgText = "";
    currentPath === '/'? bgText = "bg-[#9538E2] text-white":bgText = "bg-white text-black";
    return (
        <div className={`navbar bg-base-100 px-[5%] rounded-t-2xl ${bgText}`}>
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
                <NavLink to='/' className="btn btn-ghost font-bold text-xl">Gadget Heaven</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-4 ">
                <button className="btn bg-white rounded-full text-blac"><GrCart /></button>
                <button className="btn bg-white rounded-full text-black"><FaRegHeart /></button>
            </div>
        </div>
    );
};

export default Navbar;