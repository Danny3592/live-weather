import { Link } from 'react-router';
import classes from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={classes.home}>
        <div className="flex items-center flex-col h-screen justify-center relative z-40 ">
          <h2 className="title text-[6rem] mb-[10rem] ">歡迎使用D-weather!</h2>
          <div className="flex gap-[6rem]">
            <Link
              to="/user/weather"
              className="px-10 py-3  bg-[#b0f4fe] font-semibold text-xl rounded-md hover:bg-[#8fc6cf] transition-all duration-300"
            >
              查詢城市天氣
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
