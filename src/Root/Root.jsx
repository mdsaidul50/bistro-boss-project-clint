import { Outlet, useLocation } from "react-router-dom";
import Fotter from "../Pages/Home/Share/Fotter";
import Navbar from "../Pages/Home/Share/Navbar";


const Root = () => {
    const location = useLocation();
    const noHeardFooter = location.pathname.includes("login")
    return (
        <div>
            {noHeardFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           { noHeardFooter || <Fotter></Fotter>}
        </div>
    );
};

export default Root;