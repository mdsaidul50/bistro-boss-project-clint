import { Helmet } from "react-helmet-async";
import Cover from "./Cover";
import img from '../../assets/menu/banner3.jpg'
import useMenu from "../../hooks/usemenu";
import Section from "../../Component/section/Section";
import MenuItems from "./MenuItems";
import bgdessert from "../../assets/menu/dessert-bg.jpeg"
import bgsalad from "../../assets/menu/salad-bg.jpg"
import bgdrinks from "../../assets/menu/soup-bg.jpg"
import bgpizza from "../../assets/menu/pizza-bg.jpg"


const Menu = () => {
    const [item]=useMenu()
    const dessert =item.filter(menu =>menu.category ==="dessert")
    const drinks =item.filter(menu =>menu.category ==="drinks")
    const salad =item.filter(menu =>menu.category ==="salad")
    const pizza =item.filter(menu =>menu.category ==="pizza")
    const offered =item.filter(menu =>menu.category ==="offered")



    return (
        <div>
            <Helmet>
                <title> BISTRO|MENU </title>
            </Helmet>

            <Cover img={img} title="OUR MENU" discrption='Would you like to try a dish?'></Cover>
         
            <Section subheading='Donot miss' heading="TODAY'S OFFER"></Section>
           <MenuItems items={offered}>
           </MenuItems>

           {/* dessert items */}

           
           <MenuItems items={dessert}title="dessert" img ={bgdessert} > </MenuItems>
           <MenuItems items={salad}title="salad" img ={bgsalad} > </MenuItems>
           <MenuItems items={drinks}title="drinks" img ={bgdrinks} > </MenuItems>
           <MenuItems items={pizza}title="pizza" img={bgpizza} > </MenuItems>
           
         
        </div>
    );
};

export default Menu;