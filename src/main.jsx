import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router';
import MainHeader from './layout/MainHeader.jsx';
import Home from './pages/Home.jsx';
import WeatherApp from './pages/weatherApp.jsx';
import Login from './pages/Login.jsx';
import { Provider } from 'react-redux';
import store from './store/store.jsx';

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
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes}>
      <StrictMode>
        <App />
      </StrictMode>
    </RouterProvider>
  </Provider>,
);
