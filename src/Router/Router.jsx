import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";

import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
// import Checkout from "../Components/Pages/checkeout/Checkout";
import ServicesBooking from "../Components/servicesBooking/ServicesBooking";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path :'/login',
        element : <Login></Login>
      },
      
      {
        path: '/register',
        element: <Register></Register>
      },
      // {
      //   path : '/checkout/:id',
      //   element : <Checkout></Checkout> ,
      //   loader : ({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
        
      // },
      {
        path : '/booking/:id' ,
        element : <ServicesBooking></ServicesBooking>,
        loader : ({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
      }
    ]
  },
]);

export default Router;