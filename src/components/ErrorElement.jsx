import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="text-center h-[100vh] translate-y-1/3">
            <h2 className="text-5xl my-5">404</h2>
            <h3 className="text-3xl">Error! Page Not Found.</h3>
            <Link to="/"><button className="btn btn-outline btn-success">Go to home</button></Link>
        </div>
    );
};

export default ErrorElement;