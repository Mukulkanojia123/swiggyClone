import logo from './logo.svg';
import './App.css';
import AppLayout from './conponents/AppLayout';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import store from './utils/redux/Store';
import { Provider } from 'react-redux';
import Body from './conponents/Body';
import RestaurantMenu from './conponents/RestaurantMenu';
import Cart from './conponents/Cart';
import SearchPage from './conponents/SearchPage';

const approuter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout/>,
    children : [
      {
        path : '/',
        element : <Body/>
      },
      {
       path : 'restaurant/:resId',
       element:<RestaurantMenu/> 
      },
      {
          path : 'cart',
          element : <Cart/>
      },
      {
        path : '/search',
        element : <SearchPage/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <Provider store={store}>
    <RouterProvider router={approuter}/>
    </Provider>
    </div>
  );
}

export default App;
