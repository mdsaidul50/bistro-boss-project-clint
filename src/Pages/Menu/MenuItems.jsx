/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PopulerCard from "../Home/Populer/PopulerCard";
import Cover from "./Cover";


const MenuItems = ({items, title,img}) => {
    return (
        
       <div className="py-10">
       { title && <Cover img={img} title={title} discrption='Would you like to try a dish?'></Cover>}
         <div className="grid lg:grid-cols-2 gap-4 py-11">
                {
                    items.map(item=><PopulerCard key={item._id}
                    item={item}>

                    </PopulerCard>)
                    
                }
            </div>
           <Link to={`/oder/${title}`}>
           <button className="btn btn-outline btn-primary border-0 border-b-2">Primary</button>
           </Link>

       </div>

    );
};

export default MenuItems;