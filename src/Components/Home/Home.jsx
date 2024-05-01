import Navber from "../Nav/Navber";
import Footer from "../Footer/Footer"
import Banner from "../Banner/Banner";
import About from "./About/About";

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;