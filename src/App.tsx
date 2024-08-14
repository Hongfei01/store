import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAppSelector } from './hooks';

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <SingleProduct /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'cart', element: <Cart /> },
      { path: 'orders', element: <Orders /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
]);

function App() {
  const { name } = useAppSelector((state) => state.userState);
  console.log(name);
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
