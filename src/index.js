import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './Components/Contact';
// import About from './Components/About';
import Error from './Components/Error';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Body from './Components/Body';
import RestaurantMenu from "./Components/RestaurantMenu"
import Cart from "./Components/Cart"



const About = lazy(()=>import("./Components/About"));


const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element:<Body/>
      },
      {
        path: "/about",
        element:<Suspense fallback={<h1 className='mt-20'>Loading....</h1>}  ><About/></Suspense>
      },
      {
        path:"/contact",
        element : <Contact name={"ShubhamBorade"}/>
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


