import About from "../About/About";
import Contact from "../Contact/Contact";
import FAQ from "../FAQ/FAQ";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;