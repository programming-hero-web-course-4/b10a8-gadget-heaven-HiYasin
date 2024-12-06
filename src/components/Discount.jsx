
import { Helmet } from 'react-helmet';
import img from '../assets/discount.jpg'
import DiscountCard from './DiscountCard';
const Discount = () => {
    const discountProduct = [
        {
            "product_id": 9,
            "product_name": "ASUS ROG Zephyrus G14",
            "price": 1499,
            "discount_price": 749.5,
            "availability": true,
            "specification": [
                "Screen Size: 14 inches",
                "Processor: AMD Ryzen 9 6900HS",
                "Storage Options: 512GB, 1TB",
                "RAM: 16GB, 32GB",
                "Operating System: Windows 11"
            ],
            "description": "Compact gaming laptop with powerful Ryzen 9 and a high-refresh-rate display.",
            "rating": 4.8,
            "category": "Laptop",
            "image_url": "https://i.ibb.co.com/h8FMKVw/09-ASUS-ROG-Zephyrus-G14.png",
            "orientation": "flex-row-reverse"
        },
        {
            "product_id": 18,
            "product_name": "Xbox Series X",
            "price": 499,
            "discount_price": 249.5,
            "availability": true,
            "specification": [
                "Processor: AMD Zen 2 8-Core",
                "Graphics: AMD RDNA 2 12 TFLOPS",
                "Storage Options: 1TB SSD",
                "Features: 4K Gaming, 120 FPS Support"
            ],
            "description": "Microsoft's next-gen console with stunning graphics and ultra-fast SSD.",
            "rating": 4.9,
            "category": "Gaming Console",
            "image_url": "https://i.ibb.co.com/m5H5ZzT/17-Xbox-Series-X.png",
            "orientation": "flex-row"
        }
    ];
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Discount</title>
            </Helmet>
            <div className='bg-[#9538E2]'>
                <div className='flex flex-col md:flex-row w-11/12 mx-auto px-[5%] py-10 gap-10 items-center'>
                    <div>
                        <img src={img} alt="Discount" className='rounded-2xl' />
                    </div>
                    <div className="text-center text-white  flex flex-col gap-7">
                        <h1 className="text-5xl font-bold">Gadget Deals You Can’t Resist – Up to 50% OFF!</h1>
                        <p>Discover unbeatable deals on the latest gadgets! From smart devices to tech accessories, enjoy huge discounts for a limited time. Upgrade your tech game today – shop now and save big!</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    {
                        discountProduct.map(product => <DiscountCard product={product}></DiscountCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Discount;