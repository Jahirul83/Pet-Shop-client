import { useLoaderData} from "react-router";


const PetDetails = () => {
    const petDetails = useLoaderData();
    const { image, name, age, category, location, short_description, rating } = petDetails;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl w-full" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-3">description: {short_description}</p>
                    <p className="py-3">Age: {age}</p>
                    <p className="py-3">Category : {category}</p>
                    <p className="py-3">location: {location}</p>
                    <p className="py-3">rating: {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;