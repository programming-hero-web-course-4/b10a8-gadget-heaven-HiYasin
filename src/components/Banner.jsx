import image from '../assets/banner.jpg'
import { Link } from 'react-router-dom'
const Banner = () => {
    return (
        <div className="relative">
            <div className="text-center text-white bg-[#9538E2] flex flex-col gap-7 p-[5%] rounded-b-2xl h-[700px]">
                <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <h2>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</h2>
                <Link to="/dashboard"><button className="rounded-full bg-white text-xl font-bold px-8 py-4 text-[#9538E2]">Shop Now</button></Link>
            </div>
            {/* <div className='rounded-xl p-4 bg-green-500 bg-opacity-30 w-[80%] mx-auto overflow-hidden h-[500px] -translate-y-[40%]'>
                <img src={image} alt="Banner" className='object-cover object-center'/>
            </div> */}
            <div className={'border-2 border-white mx-auto bg-white/30 rounded-3xl w-[80%] h-[650px] p-4 overflow-hidden -translate-y-[50%]'}>
                <img src={image} alt="banner_image" className={'w-full h-full object-cover object-center rounded-2xl'} />
            </div>
        </div>
    );
};

export default Banner;