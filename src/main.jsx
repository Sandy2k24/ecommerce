import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage';
import HomePage from './Pages/Home/HomePage';
import Catalogue from './Pages/Catalogue/Catalogue';
import Cart from './Pages/Cart/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/ecommerce/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // This signifies that this route is the default child route
        element: <Navigate to="/ecommerce/home" />
      },
      {
        path: "home",
        element: <HomePage />
      },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "catalogue",
        element:<Catalogue />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)


{/* <div className="w-full flex justify-center items-center">
      <div className="text-center">
        <img src="https://t3.ftcdn.net/jpg/04/76/93/14/360_F_476931472_LAGw6ZUxORq3FtjP9gRR8YLJcfrCrIFs.jpg" alt="Empty cart" className="w-64 mx-auto" />
        <h6 className="text-sm mb-10">No Items Found</h6>
      </div>
    </div> */}
