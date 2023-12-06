import axios from "axios";
import swal from "sweetalert";

// const {
//     _id,
//     
//     
//     ,
//     
// } = donation;
const CreateDonation = () => {
    const handleAddPet = e => {

        e.preventDefault();
        const form = e.target;
        const petName = form.name.value;
        const petImage = form.image.value;
        const maxDonationAmount = form.maxDonationAmount.value;
        const donatedAmount = form.donatedAmount.value;

        const fromInfo = { petName, petImage, maxDonationAmount, donatedAmount }

        console.log(fromInfo);


        axios.post('https://pet-shop-server-neon.vercel.app/donations', fromInfo)
            .then(res => {
                console.log(res);
                swal("Good job!", "You clicked the button!", "success");
            })
            .catch(err => {
                console.log(err);
            });

    }
    return (
        <div>
            <div className="p-10">
                <form onSubmit={handleAddPet}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pet NAME</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Image Url" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">maxDonation Amount</span>
                        </label>
                        <textarea type="text" defaultValue="maxDonationAmount" name="maxDonationAmount" placeholder="maxDonation Amount" className="textarea textarea-bordered textarea-sm w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">donated Amount</span>
                        </label>
                        <textarea type="text" defaultValue="donatedAmount" name="donatedAmount" placeholder="donated Amount" className="textarea textarea-bordered textarea-sm w-full" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Add Pets" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateDonation;