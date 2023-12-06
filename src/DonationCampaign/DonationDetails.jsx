import { useLoaderData } from "react-router-dom";


const DonationDetails = () => {
    const donation = useLoaderData();
    const {
        // _id,
        petName,
        petImage,
        maxDonationAmount,
        donatedAmount
    } = donation;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={petImage} className="max-w-sm rounded-lg shadow-2xl w-full" />
                <div>
                    <h1 className="text-5xl font-bold">{petName}</h1>
                    <p className="py-3">maxDonationAmount: {maxDonationAmount}</p>
                    <p className="py-3">donatedAmount: {donatedAmount}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;