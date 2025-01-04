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
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
          
        }
      ]
    }
  ]);