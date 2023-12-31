import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header"
import Body from "../src/components/Body"
import Footer from "../src/components/Footer"
// import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Error from "../src/components/Error";
import RestaurantMenu from "../src/components/RestaurantMenu"
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import toast, { Toaster } from 'react-hot-toast';


// lazy loading/dynamic bundling
const About = lazy(()=> import("../src/components/About"))
 
const AppLayout = () => {
  return (
   <Provider store={appStore}>
   <>
      <Header/>
       <Outlet/>
       <Toaster/>
      <Footer />
      </>
      </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      }, 
      {
        path: "about",
        element: <Suspense fallback={<h1>Loading.....</h1>}><About /></Suspense>,
        children: [{ // nested routing
          path: "profile",
          element: <Profile/>,
        }]

      },
      {
        path:"/contact",
        element: <Contact/>
       },
       {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
       },
       {
        path: "/cart",
        element: <Cart/>
       },
    ],
    errorElement:<Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);