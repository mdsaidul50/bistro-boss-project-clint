import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Cover from "../Menu/Cover";
import img from "../../assets/shop/banner2.jpg"
import { useState } from "react";
import useMenu from "../../hooks/usemenu";
import OderTab from "../../Component/OderTab";
import { useParams } from "react-router-dom";


const ItemsOder = () => {
    const categorys = ["salad" ,"pizza", "soup", "dessert","drinks"];
    const { category }= useParams()
    const initailIndex =categorys.indexOf(category)
    const [tab, settab] = useState(initailIndex)
    const [item] = useMenu()

    const dessert = item.filter(menu => menu.category === "dessert")
    const drinks = item.filter(menu => menu.category === "drinks")
    const salad = item.filter(menu => menu.category === "salad")
    const pizza = item.filter(menu => menu.category === "pizza")
    const offered = item.filter(menu => menu.category === "offered")
    console.log(salad)
    return (
        <div>
            <Cover img={img} title="OUR SHOP" discrption='Would you like to try a dish?'></Cover>
            <Tabs defaultIndex={tab} onSelect={(index) => settab(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPT</Tab>
                    <Tab>DRINKS</Tab>
                    <Tab>DESSERT</Tab>
                </TabList>
                <TabPanel>
                <OderTab items={salad}></OderTab>
                </TabPanel>
                <TabPanel><OderTab items={pizza}></OderTab></TabPanel>
                <TabPanel><OderTab items={offered}></OderTab></TabPanel>
                <TabPanel><OderTab items={drinks}></OderTab></TabPanel>
                <TabPanel><OderTab items={dessert}></OderTab></TabPanel>
            </Tabs>
        </div>
    );
};

export default ItemsOder;