import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";

import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";


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
      }
    ]
  },
]);

export default Router;