import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainHeader from './layout/MainHeader.jsx';
import Home from './pages/Home.jsx';
import WeatherApp from './pages/weatherApp.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/live-weather',
    element: <WeatherApp />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>,
);
