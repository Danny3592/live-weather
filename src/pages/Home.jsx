import React from 'react';
import { Link } from 'react-router';
import classes from './Home.module.css';

const Home = () => {
  return (
    <>
      <div></div>
      <div
        className={`${classes.home} flex items-center justify-center flex-col h-[100vh]`}
      >
        <h2 className="title text-[6rem] mb-[10rem]">歡迎使用D-weather!</h2>
        <div className="flex gap-[6rem]">
          <Link
            to="/live-weather"
            className="px-10 py-3  bg-[#b0f4fe] font-semibold text-xl rounded-md"
          >
            查詢城市天氣
          </Link>
          <Link
            to="/"
            className="px-10 py-3  bg-[#b0f4fe] font-semibold text-xl rounded-md"
          >
            登入
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
