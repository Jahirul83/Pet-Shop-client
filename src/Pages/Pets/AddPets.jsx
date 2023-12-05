import axios from "axios";
import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../providers/AuthProvider";


const AddPets = () => {
    const { dark } = useContext(AuthContext);
    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#333333',
    };
    const handleAddPet = e => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const age = form.age.value;
        const location = form.location.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const short_description = form.short_description.value;
        const image = form.image.value;
        const available = true;

        const fromInfo = { name, age, location, category, rating, short_description, image, available }

        console.log(fromInfo);


        axios.post('https://pet-shop-server-neon.vercel.app/pets', fromInfo)
            .then(res => {
                console.log(res);
                swal("Good job!", "You clicked the button!", "success");
            })
            .catch(err => {
                console.log(err);
            });

    }
    return (
        <div style={containerStyle}>
            <div className="p-10">
                <form onSubmit={handleAddPet}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">NAME</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">AGE</span>
                            </label>
                            <input type="text" name="age" placeholder="age" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="location" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">

                                <select name="category" className="input input-bordered w-full">
                                    <option value="CAT">CAT</option>
                                    <option value="DOG">DOG</option>
                                    <option value="Bird">Bird</option>
                                    <option value="Fish">Fish</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                type="number"
                                name="rating"
                                placeholder="Rating"
                                className="input input-bordered w-full"
                                min="1"
                                max="5"
                                step="1"
                            />
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
                            <span className="label-text">Short description</span>
                        </label>
                        <textarea type="text" defaultValue="short_description" name="short_description" placeholder="short description" className="textarea textarea-bordered textarea-sm w-full" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Add books" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPets;