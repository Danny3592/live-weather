import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainHeader from './layout/MainHeader.jsx';
import Home from './pages/Home.jsx';
import WeatherApp from './pages/weatherApp.jsx';
import { Provider } from 'react-redux';
import store from './store/store.jsx';

// 設定路由
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/user',
    element: <MainHeader />,
    children: [
      {
        path: 'weather',
        element: <WeatherApp />,
      },
    ],
  },
]);
   
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
};

export default App;
