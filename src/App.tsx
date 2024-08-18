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

import { loader as landingLoader } from './pages/Landing';

import { loader as productsLoader } from './pages/Products';

import { loader as singleProductLoader } from './pages/SingleProduct';

import { action as registerAction } from './pages/Register';

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
      },
      { path: 'cart', element: <Cart />, errorElement: <ErrorElement /> },
      { path: 'orders', element: <Orders />, errorElement: <ErrorElement /> },
    ],
  },
  { path: '/login', element: <Login />, errorElement: <Error /> },
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
