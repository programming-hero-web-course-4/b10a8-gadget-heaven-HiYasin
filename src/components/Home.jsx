import React from 'react';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <div className='max-w-11/12 mx-auto px-[5%]'>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;