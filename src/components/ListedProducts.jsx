import { MdDeleteForever } from "react-icons/md";
const ListedProducts = ({ product }) => {
    const { image_url, product_name, description, price } = product;
    return (
        <div class="flex max-h-56 bg-white rounded-xl p-8 gap-10 ">
            <div class="flex-none w-72 overflow-hidden bg-[#D9D9D9] rounded-lg">
                <img src={image_url} alt={product_name} className="w-full h-full object-contain object-center" />
            </div>
            <div class="grow flex flex-col justify-between">
                <h2 className="text-3xl font-semibold">{product_name}</h2>
                <p className="text-lg text-gray-500"><span className="text-black font-medium">Description: </span>{description}</p>
                <h3 className="text-xl font-bold">Price: {price}$</h3>
            </div>
            <div class="flex-none w-14 flex place-items-center">
                <button>
                    <MdDeleteForever className="text-4xl text-red-500" />
                </button>
            </div>
        </div>
    );
};

export default ListedProducts;