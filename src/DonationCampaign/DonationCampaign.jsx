import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const DonationCampaign = () => {
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        // fetch('donationData.json')
        fetch('https://pet-shop-server-neon.vercel.app/donations')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
            {
                donations?.map(donation => <DonationCard
                    key={donation._id}
                    donation={donation}
                ></DonationCard>
                )
            }
        </div>
    );
};

export default DonationCampaign;