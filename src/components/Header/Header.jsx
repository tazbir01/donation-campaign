import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 max-w-6xl mx-auto mt-8">
                <div className="navbar-start">
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    <img className="w-52" src={logo} alt="" />
                </div>
                <div className="navbar-end flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <NavLink to="/">Home</NavLink></li>
                        <li> <NavLink to="/donation">Donation</NavLink></li>
                        <li> <NavLink to="/statistics">Statistics</NavLink></li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Header;