import logo from './logo.svg';
import './App.css';
import AppLayout from './conponents/AppLayout';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import store from './utils/redux/Store';
import { Provider } from 'react-redux';
import Body from './conponents/Body';
import RestaurantMenu from './conponents/RestaurantMenu';

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
      // {
      //     path : 'hello',
      //     element : <RestaurantMenu/>
      // }
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
