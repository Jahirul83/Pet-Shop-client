import { useContext, useEffect, useState } from "react";
import PetCards from "./PetCards";
import { AuthContext } from "../../providers/AuthProvider";

const AllPet = () => {
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
        <div style={containerStyle} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
            {
                pets?.map(pet => <PetCards
                    key={pet._id}
                    pet={pet}
                ></PetCards>
                )
            }
        </div>
    );
};

export default AllPet;