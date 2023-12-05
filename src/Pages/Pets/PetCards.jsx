import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PetCards = ({ pet }) => {
    const { _id, location, image, age, name, short_description } = pet;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Age: {age} years old</p>
                    <p>Location: {location}</p>
                    <p>{short_description}</p>
                    <div className="card-actions">
                        <Link to={`/petDetails/${_id}`}><button className="btn btn-primary">details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetCards;
PetCards.propTypes = {
    pet: PropTypes.object
}