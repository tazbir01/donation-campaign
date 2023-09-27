import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Header = () => {


    return (
        <div>
            <div className="md:navbar bg-base-100 max-w-6xl mx-auto mt-8 ">
                <div className="navbar-start">
                    <img className="w-52 z-20" src={logo} alt="" />
                </div>
                <div className=" navbar-end flex text-red">
                    <ul className="menu menu-horizontal px-1 z-20">
                        <li className="font-medium"> <NavLink to="/" className={({ isActive , isPending}) =>
                            isActive
                                ? "text-red-500 font-semibold underline"
                                : isPending 
                                ?""
                                : ""
                        }>Home
                        </NavLink>
                        </li>
                        <li className="font-medium"> <NavLink to="/donation" className={({ isActive, isPending }) =>
                            isActive
                                ? "text-red-500 font-semibold underline "
                                : isPending
                                    ? " "
                                    : ""
                        }>Donation
                        </NavLink>
                        </li>
                        <li className="font-medium"> <NavLink to="/statistics" className={({ isActive, isPending }) =>
                            isActive
                                ? "text-red-500 font-semibold underline cursor-none"
                                : isPending
                                    ? ""
                                    : ""
                        }>Statistics</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;