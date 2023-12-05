import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../assets/user.png"
import swal from "sweetalert";


const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);


    const handleLogout = () => {
        LogOut()
        .then(() => {
            swal(" Logout Successful", "You clicked the button!", "success");
        }).catch((err) => {
            console.log(err);
        });

    }
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/services'>services</NavLink></li>
        <li><NavLink to='/about'>about</NavLink></li>
        <li><NavLink to='/event'>event</NavLink></li>
        {/* <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li> */}
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-red-600 font-bold">Pet Shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end mr-3">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL ? user.photoURL : userDefaultPic} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                   
                                    <Link className="ml-3 mb-2" to="/profile"><li>Profile</li></Link>
                                    <Link className="ml-3" to="/register"><li>Register</li></Link>
                                    <li><a onClick={handleLogout}>Logout</a></li>
                                </ul>
                            </div>
                            :
                            <Link to='/login'><button className="btn text-white bg-orange-500">Login</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;