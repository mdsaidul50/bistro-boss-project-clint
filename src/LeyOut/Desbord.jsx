import { FaHome, FaShapes } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCard from "../hooks/useCard";
import useAdmin from "../hooks/useAdmin";


const Desbord = () => {
    const [card]=useCard()
    const [isAdmin]=useAdmin()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu space-y-3">
                   {
                    isAdmin ?<>
                    <li>
                        <NavLink to={"/desbord/home"}>
                           <FaHome></FaHome>Admin Home </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/desbord/manage"}>
                           <FaHome></FaHome>Manage item </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/desbord/additem"}>
                           <FaShapes></FaShapes> Add item </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/desbord/alluser"}>
                           <FaShapes></FaShapes> All Users ()</NavLink>
                    </li>
                    </>:
                    <>
                     <li>
                        <NavLink to={"/desbord/home"}>
                           <FaHome></FaHome>User Home </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/desbord/reservetion"}>
                           <FaShapes></FaShapes> Reservetion </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/desbord/card"}>
                           <FaShapes></FaShapes> my Card ({card.length})</NavLink>
                    </li>
                    </>
                   }
                   

                    {/* shere the nav link */}
                    <div className="divider"></div> 
                    <li>
                        <NavLink to={"/"}>
                           <FaHome></FaHome>Home </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/menu"}>
                           <FaHome></FaHome>menu </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contack"}>
                           <FaHome></FaHome>contack</NavLink>
                    </li>
                </ul>

            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Desbord;