// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './components/Root';
import ErrorElement from './components/ErrorElement';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Statistics from './components/Statistics';
import Others from './components/Others';
import ProductDetails from './components/ProductDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/public/fakeData.json'),
        children:[
          {
            path: ":category"
          }
        ]
      },
      {
        path:":category/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/public/fakeData.json')
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>        
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"others",
        element: <Others></Others>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
