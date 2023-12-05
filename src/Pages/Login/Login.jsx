import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import swal from "sweetalert";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../providers/AuthProvider";



const Login = () => {
    const { Login, SignInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState(''); 
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        Login(email, password)
            .then((result) => {
                console.log(result?.user);
                setError('');
                swal("Good job!", "You clicked the button!", "success");
                navigate(location?.state ? location.state : '/');
            }).catch((err) => {
                console.log(err)
                setError(err);
            });
    }

    const handleGoogleLogin= () => {
        SignInWithGoogle()
        .then((result) => {
            console.log(result?.user);
            swal("Good job!", "You clicked the button!", "success");
            navigate(location?.state ? location.state : '/');
        }).catch((err) => {
            console.error(err);
        });
    }


    
    return (
        <div>
            <div style={{ backgroundImage: 'url(https://i.ibb.co/p1bYw4x/blob-scene-haikei.png)' } }className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card-body bg-orange-300 rounded-lg">
                        <h2 className="text-4xl text-center font-bold">Please Login</h2>
                        <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div>
                                <p className="text-center">or <br />
                                    <button onClick={handleGoogleLogin} className="btn btn-block"><FcGoogle></FcGoogle>Google</button>
                                </p>
                                <p>if You do not have an account <Link className="btn btn-link" to='/register'>Register</Link></p>
                                {
                                    error && <p className="text-red-600">{error.message}</p>
                                }
                            </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Login;