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
