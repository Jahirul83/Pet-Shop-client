import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    let isAdmin = 0;

    if (user.email == "jumman@gmail.com") {
        isAdmin = 1;
    }

    return (
        <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto mt-[50px]">

            {/* <p>{user.email}</p>
            <p>isAdmin : {isAdmin}</p> */}
            <div className="w-full lg:w-64 min-h-screen bg-orange-300 mr-[20px] space-y-10">
                <ul className="menu">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/user">user</NavLink> </li>
                            <li><NavLink to="/dashboard/allPet">All pet</NavLink> </li>
                            <li><NavLink to="/dashboard/allDonation">All Donations</NavLink> </li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/myCart">My cart</NavLink> </li>
                                <li><NavLink to="/dashboard/myCart">My cart</NavLink> </li>

                                <li><NavLink to="/dashboard/allPet">add pet</NavLink> </li>

                            </>
                    }
                    <div></div>
                    <li><NavLink to="/">Home</NavLink> </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;