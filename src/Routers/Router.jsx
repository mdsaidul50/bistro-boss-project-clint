import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import ItemsOder from "../Pages/ItemsOder/ItemsOder";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";

import Desbord from "../LeyOut/Desbord";
import Card from "../Pages/Desbord/Card";
import AllUser from "../Pages/Desbord/Admin/AllUser";
import AddItems from "../Pages/Desbord/Admin/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Desbord/Admin/ManageItem";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/menu",
          element:<Menu></Menu>
        },
        {
          path:"/oder/:category",
          element:<ItemsOder></ItemsOder>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/singup",
          element:<SingUp></SingUp>
        }
        
      ]
    },
    {
      path:"/desbord",
      element:<Desbord></Desbord>,
      children:[
        {
          path:"card",
          element:<Card></Card>
        },{
          path:"alluser",
          element:<AllUser></AllUser>
        },
        {
          path:'additem',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:"manage",
          element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
        }
        
      ]
    }
  ]);