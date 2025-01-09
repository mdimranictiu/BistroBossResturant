import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../components/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import { GiPrivate } from "react-icons/gi";
import AllUsers from "../Pages/Dashboard/Cart/AllUsers/AllUsers";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'menu',
            element: <PrivateRoute><Menu></Menu></PrivateRoute>
        },
        {
            path:'order',
            element: <PrivateRoute><Order></Order></PrivateRoute>
        },
        {
            path:'order/:category',
            element: <Order></Order>
        },
        {
            path:'login',
            element: <Login></Login>
        },
        {
            path:'register',
            element: <Register></Register>
        }
      ]
    },
    {
      path:"/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
          
        },
        {
          path:'users',
          element:<AllUsers></AllUsers>
          
        }
      ]
    }
  ]);