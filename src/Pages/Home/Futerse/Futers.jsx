import Section from "../../../Component/section/Section";
import img from '../../../assets/home/featured.jpg'
import '../Futerse/futers.css'
const Futers = () => {
    return (
        <div className="futers-item bg-fixed">
            
            <Section subheading="Check it out" heading="FROM OUR MENU">

            </Section>
            <div className="flex text-white justify-center items-center px-12 py-12 ">
                <div>
                    <img src={img} alt="" />
                </div>
               <div className="space-y-4 ml-6">
               <p>March 20, 2023</p>
                <p>WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Voluptatum dolor error veniam labore aliquid perferendis neque,
                  voluptate quisquam, nemo eligendi molestiae iusto, excepturi 
                amet consequuntur. Nemo eum fuga nostrum dignissimos.</p>
                <button className="btn btn-outline btn-primary border-0 border-b-2">Primary</button>
               </div>
            </div>
         
        </div>
    );
};

export default Futers;