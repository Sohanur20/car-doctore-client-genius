import { Outlet } from "react-router-dom";
import Navber from "../Components/Nav/Navber";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div className="container mx-auto">
           <Navber></Navber>
            <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;