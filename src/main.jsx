

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './components/Root';
import ErrorElement from './components/ErrorElement';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Statistics from './components/Statistics';
import Discount from './components/Discount';
import ProductDetails from './components/ProductDetails';
// import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/public/fakeData.json'),
        children: [
          {
            path: ":category"
          }
        ]
      },
      {
        path: ":category/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/public/fakeData.json')
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        // children: [
        //   {
        //     path: "/dashboard/cart",
        //     element: <Cart></Cart>,
        //   },
        //   {
        //     path: "/dashboard/wishlist",
        //     element: <Wishlist></Wishlist>,
        //   }
        // ]
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "discount",
        element: <Discount></Discount>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
