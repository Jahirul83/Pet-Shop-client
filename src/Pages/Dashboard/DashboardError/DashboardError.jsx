import { Link } from "react-router-dom";


const DashboardError = () => {
    return (
        <div>
            <h2 className="text-3xl">Login As Admin or You can login with regular id password</h2>
            <p>admin email: jumman@gmail.com</p>
            <p>admin password: 111111A@</p>
            <Link className="btn btn-primary" to="/login">go to Login page</Link>
        </div>
    );
};

export default DashboardError;