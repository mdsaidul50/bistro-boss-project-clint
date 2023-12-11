
import Section from "../../../Component/section/Section";
import PopulerCard from "./PopulerCard";
import useMenu from "../../../hooks/usemenu";


const Populer = () => {
    // const [item, setitem]=useState([])

    const [item]=useMenu()
    const itemscard =item.filter(menu =>menu.category ==="popular")



    // useEffect(()=>{
    //     fetch("menu.json")
    //     .then(res =>res.json())
    //     .then(data=>{
    //         const itemscard =data.filter(menu =>menu.category==="popular")
    //         setitem(itemscard)
    //     })
    // },[])



    return (
        <div>
            <Section subheading="Check it out"
            heading='FROM OUR MENU'>
            </Section>
            <div className="grid lg:grid-cols-2 gap-4">
                {
                    itemscard.map(items=><PopulerCard key={items._id}
                    item={items}>

                    </PopulerCard>)
                    
                }
            </div>




        </div>
    );
};

export default Populer;