import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContex } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCard from "../../../hooks/useCard";

const Navbar = () => {
  const { user, logout } = useContext(AuthContex)

  const [card]=useCard()
  const logouthendel = () => {
    logout()
      .then()
      .catch(error => console.log(error))
  }

  const navlink = <>
    <li><NavLink to={"/"}>HOME</NavLink></li>
    <li><NavLink to={"/menu"}>MENU</NavLink></li>
    <li><NavLink to={"/oder/salad"}>ODERS</NavLink></li>
    
   


    {
      user ? <>
        <li onClick={logouthendel}><NavLink to={"/login"}> LOG OUT </NavLink></li>
      </> : <>
        <li><NavLink to={"/login"}>LOG IN</NavLink></li>
      </>
    }
  </>
  return (
    <div className="navbar fixed z-10 bg-black text-white max-w-4xl opacity-20  mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navlink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlink}
        </ul>
      </div>
      <div className="navbar-end">
      <li>
      <NavLink to={"/desbord"}>
        <button className="btn ">
        <FaShoppingCart />
          <div className="badge badge-secondary">+{card.length}</div>
        </button>

      </NavLink></li>
      </div>
    </div>
  );
};

export default Navbar;