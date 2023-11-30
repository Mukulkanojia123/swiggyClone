import logo from './logo.svg';
import './App.css';
import AppLayout from './conponents/AppLayout';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import store from './utils/redux/Store';
import { Provider } from 'react-redux';
import Body from './conponents/Body';

const approuter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout/>,
    children : [
      {
        path : '/',
        element : <Body/>
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
