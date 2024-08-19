import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  Register,
  Login,
  Checkout,
  Orders,
  About,
} from './pages';

import { ErrorElement } from '@/components';

// loaders
import { loader as landingLoader } from './pages/Landing';

import { loader as productsLoader } from './pages/Products';

import { loader as singleProductLoader } from './pages/SingleProduct';

import { loader as checkoutLoader } from './pages/Checkout';

import { loader as orderLoader } from './pages/Orders';

// actions
import { action as registerAction } from './pages/Register';

import { action as loginAction } from './pages/Login';

import { action as checkoutAction } from './components/CheckoutForm';

import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      { path: 'about', element: <About />, errorElement: <ErrorElement /> },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      { path: 'cart', element: <Cart />, errorElement: <ErrorElement /> },
      {
        path: 'orders',
        element: <Orders />,
        errorElement: <ErrorElement />,
        loader: orderLoader(store),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorElement />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
