import React from 'react';

const Footer = () => {
    return (
        <div className='mb-10'>
            <div className='text-center'>
                <h1 className='font-bold text-4xl my-3'>Gadget Heaven</h1>
                <p className='text-[#09080F99]'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className='my-8'/>
            <div className='flex flex-col md:flex-row justify-center gap-10 md:gap-20 lg:gap-36'>
                <div className='text-center'>
                    <h3 className='text-xl font-bold mb-3 '>Services</h3>
                    <ul className='list-none text-base text-[#09080F99] '>
                        <li>Products Support</li>
                        <li>Order Tracking</li>
                        <li>Shipping & Delivery</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div className='text-center'>
                    <h3 className='text-xl font-bold mb-3'>Company</h3>
                    <ul className='list-none text-base text-[#09080F99]'>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='text-center'>
                    <h3 className='text-xl font-bold mb-3'>Legal</h3>
                    <ul className='list-none text-base text-[#09080F99]'>
                        <li>Terms of Services</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;