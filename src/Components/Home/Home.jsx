import Navber from "../Nav/Navber";
import Footer from "../Footer/Footer"
import Banner from "../Banner/Banner";
import About from "./About/About";
import Services from "./services/Services";

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;