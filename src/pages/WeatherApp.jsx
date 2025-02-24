// 把區域部分修掉

import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
//ICON
import { FaUmbrella } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

//REDUX
import {
  get_cityData,
  setCity,
  setWeatherOfCity,


} from '../store/Reducers/dataReducer';

//UTILITIES
import { getPara, getTime, getWeatherIcon } from '../../util/util';

//COMPONENT
import Loading from '../components/Loading';

//CSS
import classes from './WeatherApp.module.css';


const WeatherApp = () => {
  const dispatch = useDispatch();
  const {
    loading,
    city,
    cityData,
    locations,
    weatherDataOfCity, //最後要輸出的值
  } = useSelector((state) => state.data);

  //初始化資料
  useEffect(() => {
    dispatch(get_cityData('臺北市'));
  }, []);
  //取得城市天氣預報
  useEffect(() => {
    if (cityData?.records) {
      const detailData = cityData?.records?.location?.filter((item) => {
        return item.locationName === city;
      })[0]?.weatherElement;
      if (detailData) {
        const dataElement = detailData.slice(0, 5).map((item) => item?.time);
        const [
          weatherCondition,
          rainProbability,
          minTemperature,
          comfortIndex,
          maxTemperature,
        ] = dataElement;

        // console.log('weatherCondition = ', weatherCondition);
        // console.log('rainProbability = ', rainProbability);
        // console.log('minTemperature = ', minTemperature);
        // console.log('comfortIndex = ', comfortIndex);
        // console.log('maxTemperature = ', maxTemperature);

        //================================================
        const weatherOfCity = {
          currentCity: city,
          weatherCondition: getPara(weatherCondition),
          weatherConditionIcon: getWeatherIcon(getPara(weatherCondition)),
          rainProbability: getPara(rainProbability),
          minTemperature: getPara(minTemperature),
          maxTemperature: getPara(maxTemperature),
          comfortIndex: getPara(comfortIndex),
          time: getTime(weatherCondition),
        };
        // console.log(weatherOfCity);
        dispatch(setWeatherOfCity(weatherOfCity));
        // dispatch()
      }
    }
  }, [city, cityData]);

  return (
    <>
      {loading ||
      !weatherDataOfCity?.time ||
      !locations?.cities ? (
        <Loading />
      ) : (
        <div className="flex justify-center items-center mt-20 flex-col gap-3 mx-auto max-w-[1000px]">
          <div className="top flex gap-4">
            <div className="left w-[300px] h-[300px] bg-[#83838362] rounded-md flex justify-center items-start p-6 flex-col">
              <h4 className="text-xl mb-3 font-bold">搜尋地區</h4>
              <div className="font-bold text-xl relative">
                <div className=" absolute top-1 pointer-events-none   right-2">
                  <MdOutlineKeyboardArrowDown className="text-[2.5rem]" />
                </div>
                <label htmlFor="cities">選擇縣市</label>
                <select
                  name="cities"
                  id="cities"
                  className="bg-[#dedc55] px-5 py-3 pr-15 rounded-md ml-5 hover:cursor-pointer"
                  onChange={(e) => dispatch(setCity(e.target.value))}
                  value={city}
                >
                  {locations.cities?.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="right w-[600px] h-[300px] bg-[#83838362] rounded-md ">
              <div className="flex h-[100%] justify-center">
                {cityData
                  ? Array(3)
                      .fill(null)
                      .map((_, index) => {
                        return (
                          <div
                            key={index}
                            className={`${classes['weather-col']} flex flex-col  text-center justify-center items-center w-100  hover:bg-[#83838392]`}
                          >
                            <div>
                              <h4 className="text-md">
                                {weatherDataOfCity?.time?.startDate?.[index] &&
                                weatherDataOfCity?.time?.endDate?.[index]
                                  ? weatherDataOfCity?.time?.startDate[
                                      index
                                    ] === weatherDataOfCity.time.endDate[index]
                                    ? weatherDataOfCity.time.startDate[index]
                                    : `${weatherDataOfCity.time.startDate[index]} ~ ${weatherDataOfCity.time.endDate[index]}`
                                  : '尚未有資料'}
                              </h4>
                              <p className="text-md mt-3">
                                {weatherDataOfCity?.time?.startTime?.[index] &&
                                weatherDataOfCity?.time?.endTime?.[index]
                                  ? `${weatherDataOfCity?.time?.startTime[index]} ~ ${weatherDataOfCity?.time?.endTime[index]}`
                                  : '尚未有資料'}
                              </p>
                              <div className="flex justify-center">
                                {/* 修正 weatherConditionIcon 的顯示 */}
                                {weatherDataOfCity.weatherConditionIcon?.[
                                  index
                                ] || <FaCloud className="text-[3rem] mt-3" />}
                              </div>
                              <div className="flex justify-center">
                                <p className="mt-8">
                                  {weatherDataOfCity.minTemperature?.[index]}° -{' '}
                                  {weatherDataOfCity.maxTemperature?.[index]}°
                                </p>
                              </div>
                              <div className="flex mt-6 items-center justify-center">
                                <FaUmbrella className="mr-3" />
                                {weatherDataOfCity.rainProbability?.[index] ||
                                  0}
                                %
                              </div>
                            </div>
                          </div>
                        );
                      })
                  : '沒有資料'}
              </div>
            </div>
          </div>
          <div className="bottom flex w-[100%] h-100 bg-[#83838362] rounded-md items-center mb-10  justify-around gap-10">
            <div className="left flex flex-col gap-5 w-1/3 justify-center items-start pl-20">
              <div>
                <h4 className="text-[2rem] inline-block">選擇縣市:</h4>
                <p className="text-[2rem] inline-block font-bold">
                  {weatherDataOfCity?.currentCity}
                </p>
              </div>
              <div>
                <h4 className="text-[2rem] inline-block">目前舒適度:</h4>
                <p className="text-[2rem] inline-block font-bold">
                  {weatherDataOfCity?.comfortIndex[0]}
                </p>
              </div>
              <div>
                <h4 className="text-[2rem] inline-block">目前天氣:</h4>
                <p className="text-[2rem] inline-block font-bold">
                  {weatherDataOfCity?.weatherCondition[0]}
                </p>
              </div>
            </div>

            <div className="right  flex flex-col gap-5  w-2/3 justify-center items-center h-full pt-5">
              <div className='w-[450px]  rounded-md border border-[#bc5555] border-[15px] overflow-hidden'>
                <img
                  src={`../../public/images/${city}.jpg`}
                  alt=""
                  className="w-full h-full rounded-md" 
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherApp;
