import { BiSolidDiscount } from "react-icons/bi";
const DiscountCard = ({ product }) => {
    const { product_name, image_url, description, price, specification, orientation, discount_price } = product;
    return (
        <div className={`flex ${orientation} gap-8 max-w-screen-xl mx-auto p-8 rounded-3xl py-20`}>
            <div className="rounded-xl flex justify-center items-center bg-gray-500/20 overflow-hidden max-h-[400px] p-10">
                <img src={image_url} alt="{product_name}" className="w-full h-full object-contain object-center" />
            </div>
            <div className="flex flex-col gap-2 items-start">
                <h3 className="text-3xl font-semibold">{product_name}</h3>
                <p>Price: <span className="line-through">{price}</span> $</p>
                <p className="text-2xl text-red-500">{discount_price} $</p>
                <p className={'text-base text-gray-500'}>{description}</p>
                <h3 className={'text-xl font-semibold'}>Specification:</h3>
                <ol className={'list-decimal ml-5 text-base text-gray-500'}>
                    {
                        specification.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ol>
                <div className="flex gap-5 bg-red-500 px-10 py-2 rounded-full mt-2">
                    <BiSolidDiscount className="text-5xl text-white"/>
                    <h3 className="text-4xl text-white mt-1">50%</h3>
                </div>
            </div>
        </div>
    );
};

export default DiscountCard;