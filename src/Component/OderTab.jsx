/* eslint-disable react/prop-types */
import FoodCard from "./FoodCard/FoodCard";


const OderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-3">
            {
                 
                    items.map(item =><FoodCard key={item._id} item={item}></FoodCard>)
                
            }
        </div>
    );
};

export default OderTab;