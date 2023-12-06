import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationCard = ({ donation }) => {
    const {
        _id,
        petName,
        petImage,
        maxDonationAmount,
        donatedAmount
    } = donation;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={petImage} alt="Shoes" className="rounded-xl w-60 h-60" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{petName}</h2>
                    <p>maxDonationAmount: {maxDonationAmount}</p>
                    <p>donatedAmoun: {donatedAmount}</p>
                    <div className="card-actions">
                        <Link to={`/donationDetails/${_id}`}><button className="btn btn-primary">details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;
DonationCard.propTypes = {
    donation: PropTypes.object
}