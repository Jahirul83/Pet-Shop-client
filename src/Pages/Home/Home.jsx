import { useContext, useEffect, useState } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import FAQ from "../FAQ/FAQ";
import Banner from "./Banner/Banner";
import PetCards from "../Pets/PetCards";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Home = () => {
    const { dark } = useContext(AuthContext);
    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#333333',
    };
    const [pets, setPets] = useState([]);
    useEffect(() => {
        fetch('https://pet-shop-server-neon.vercel.app/pets')
            .then(res => res.json())
            .then(data => setPets(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div style={containerStyle}>
                <h2 className="text-3xl font-semibold text-center p-6">Pets</h2>
            </div>
            <div style={containerStyle} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                {
                    pets?.slice(0, 3).map(pet => <PetCards
                        key={pet._id}
                        pet={pet}
                    ></PetCards>
                    )
                }

            </div>
            <h2 style={containerStyle} className="text-3xl font-semibold text-center p-6"><Link to='/allPet' className="btn btn-primary">show all Pets</Link></h2>
            <About></About>
            <Contact></Contact>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;