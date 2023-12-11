import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Futers from "./Futerse/Futers";

import Oder from "./Oderline/Oder";
import Populer from "./Populer/Populer";
import Navbar from "./Share/Navbar";
import Testmonial from "./Testmonial/Testmonial";


const Home = () => {
    return (
        <div>

<Helmet>
        <title>bistro|home</title>
        
      </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <Oder></Oder>
            <Populer></Populer>
           <Futers></Futers>
           <Testmonial></Testmonial>
        </div>
    );
};

export default Home;