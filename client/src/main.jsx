import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OrderHistory from './pages/OrderHistory';
import Success from './pages/Success';
import WishList from './pages/WishList';
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import NewArrivals from './pages/NewArrivals'
import Profile from './pages/Profile'; 
import MissingOrder from './pages/MissingOrder'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/orderHistory',
        element: <OrderHistory />
      }, {
        path: '/products/:id',
        element: <Detail />
      }, {
        path: '/success',
        element: <Success />
      }, {
        path: 'WishList',
        element: <WishList />
      }, {
        path:'/men',
        element: <Men/>
      }, {
        path:'/women',
        element: <Women/>
      }, {
        path:'/kids',
        element: <Kids/>
      }, {
        path:'/newarrivals',
        element: <NewArrivals/>
      }, {
        path:'/profile',
        element: <Profile/>
      }, {
        path:'/missingorder',
        element: <MissingOrder/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
