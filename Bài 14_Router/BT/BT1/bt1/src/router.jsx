import {createBrowserRouter , Outlet } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Admin from './Admin';
import ProductDetail from './ProductDetail';
const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        {
          path: '/',
          element: (
            <div>
              <Home/>
            </div>
          ),
        },
        {
          path: '/product/:productId',
          element: <ProductDetail />,
        },
        {
            path: '/admin',
            element : <Admin/>
        }
      ],
    },
  ]);
  export default router;