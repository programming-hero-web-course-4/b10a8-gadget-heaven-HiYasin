import { Link } from "react-router-dom";

const Product = ({product}) => {


    const { product_id, product_name, image_url, category, price } = product;


    return (
        <div className={'bg-white rounded-2xl p-5 flex flex-col gap-y-4'}>
            <div className={'bg-[#D9D9D9] rounded-xl flex justify-center items-center'}>
                <img src={image_url} alt="gadget_image" className={'h-52'}/>
            </div>
            <h2 className='text-xl font-semibold'>{product_name}</h2>
            <p className='text-lg font-semibold text-gray-500'>Price: {price} $</p>
            <div className='my-1'>
                <div className={`w-full`}>
                    <button className='bg-gradient-to-b from-[#9538E2] to-pink-500 p-0.5 rounded-full cursor-pointer'>
                        <Link to={`/${category}/${product_id}`}><div className='bg-white w-full h-full px-5 py-2 rounded-full text-[#9538e2] text-lg font-bold'>View Details</div></Link>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Product;