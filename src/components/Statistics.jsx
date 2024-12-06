import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
const Statistics = () => {
    const products = useLoaderData();
    return (
        <div className="max-w-screen-xl mx-auto p-8">
            <Helmet>
                <title>Gadget Heaven | Statistics</title>
            </Helmet>
            <h2 className="text-3xl my-5">Statistics</h2>
            <div className="flex justify-center">
                <BarChart width={1000} height={500} data={products}>
                    <XAxis dataKey="product_name" stroke="#9538E2" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="price" fill="#9538E2" barSize={30} />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;