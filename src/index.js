import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './Components/Contact';
import About from './Components/About';
import Error from './Components/Error';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Body from './Components/Body';

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
        element:<About/>
      },
      {
        path:"/contact",
        element : <Contact/>
      }
    ],
    errorElement: <Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


