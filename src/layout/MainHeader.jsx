import { NavLink, Outlet } from 'react-router';

const MainHeader = () => {
  return (
    <>
      <header className=" bg-amber-300">
        <nav>
          <ul className="flex ml-5 py-5 gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 text-[5.5rem]' : 'text-[2.5rem]'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/login"
                className={({ isActive }) =>
                  isActive ? 'text-red-500  text-[2.5rem]' : 'text-[2.5rem]'
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/weather"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 text-[2.5rem]' : 'text-[2.5rem]'
                }
              >
                Weather
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default MainHeader;
