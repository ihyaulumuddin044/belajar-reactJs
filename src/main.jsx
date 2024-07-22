import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './assets/Pages/Login.jsx';
import RegisterPage from './assets/Pages/Register.jsx';
import ErrorPage from './assets/Pages/404.jsx';
import ProdactPage from './assets/Pages/Product.jsx';
import ProfilePage from './assets/Pages/Profile.jsx';
import DetailsProductPage from './assets/Pages/detailProduct.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Navbar from './assets/Layouts/Navbar.jsx';
import DarkModeContextProvider from './context/DarkMode.jsx';
import { TotalPriceProvider } from './context/TotalPriceContext.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/product",
    element: <ProdactPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailsProductPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
