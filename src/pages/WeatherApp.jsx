import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//ICON
import { FaCloudRain } from 'react-icons/fa';
import { FaUmbrella } from 'react-icons/fa';
//REDUX
import { get_data } from '../store/Reducers/dataReducer';
//UTILITIES
import { alertError } from '../../util/sweetAlert';
//COMPONENT
import Loading from '../components/Loading';

const WeatherApp = () => {
  const dispatch = useDispatch();
  const { data, loading, successMsg, errorMsg } = useSelector(
    (state) => state.data,
  );

  //天氣資訊 state
  const [weatherData, setWeatherData] = useState({});

  //輸入地區資料state
  const [address, setAddress] = useState('臺北市');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (!data.records) {
      dispatch(get_data());
    }
  }, [dispatch, data?.records]);

  useEffect(() => {
    console.log(locations);
    console.log(`目前的選擇是 ${address}`);
    console.log('weatherData = ', weatherData);
  }, [weatherData]);

  function handleSubmit() {
    if (data?.records) {
      //取得台灣每個地點

      const locationSet = data.records.location.map(
        (item) => item.locationName,
      );
      if (!locationSet.includes(address)) {
        alertError('請輸入正確的城市名稱');
        setAddress('');
        return;
      }

      const detailData = data.records.location.filter(
        (item) => item.locationName === address,
      )[0]?.weatherElement;

      if (detailData) {
        console.log('detailData = ',detailData);

        const dataElement = detailData.slice(0, 5).map((item) => item?.time);
        const [
          weatherCondition,
          rainProbability,
          minTemperature,
          maxTemperature,
          comfortIndex,
        ] = dataElement;

        console.log('weatherCondition = ', weatherCondition);
        console.log('rainProbability = ', rainProbability);
        console.log('minTemperature = ', minTemperature);
        console.log('maxTemperature = ', maxTemperature);
        console.log('comfortIndex = ', comfortIndex);

        

        setLocations(locationSet);
        // setWeatherData({
        //   weatherConditionSet,
        //   rainProbabilitySet,
        //   minTemperatureSet,
        //   maxTemperatureSet,
        //   comfortIndexSet,
        // });
      }
    }
  }

  return (
    <>
      {loading && <Loading />}

      <div className="flex justify-center items-center mt-20 flex-col gap-3 mx-auto max-w-[1000px]">
        <div className="top flex gap-4">
          <div className="left w-[300px] h-[300px] bg-[#83838362] rounded-md flex justify-center items-start p-6 flex-col">
            <h4 className="text-xl mb-3">搜尋地區</h4>
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              type="text"
              name="address"
              placeholder="請輸入地區名稱"
              className="border border-2 bg-white rounded-md py-1 pl-1"
            />

            <button
              onClick={handleSubmit}
              className="mt-15 px-5 py-2 bg-[#f6c79c]
          rounded-lg hover:cursor-pointer hover:bg-[#f9eee3]"
            >
              送出
            </button>
          </div>

          <div className="right w-[600px] h-[300px] bg-[#83838362] rounded-md ">
            <div className="flex h-[100%] justify-center">
              <div className="flex flex-col items-center w-100 pt-5 hover:bg-[#83838392]">
                <h4 className="text-md">今日白天</h4>
                <p className="text-md  mt-3">6:00~18:00</p>
                <FaCloudRain className="text-[3rem] mt-3" />
                <p className="mt-8">14°-16°</p>
                <div className="flex mt-6">
                  <FaUmbrella className="mr-3" />
                  120%
                </div>
              </div>

              <div className="h-[100%] w-[1px] bg-white"></div>

              <div className="flex flex-col items-center w-100 pt-5 hover:bg-[#83838392]">
                <h4 className="text-md">今晚明晨</h4>
                <p className="text-md mt-3">18:00~6:00</p>
                <FaCloudRain className="text-[3rem] mt-3" />
                <p className="mt-8">14°-16°</p>
                <div className="flex mt-6">
                  <FaUmbrella className="mr-3" />
                  120%
                </div>
              </div>
              <div className="h-[100%] w-[1px] bg-white"></div>

              <div className="flex flex-col items-center w-100 pt-5 hover:bg-[#83838392]">
                <h4 className="text-md">明日白天</h4>
                <p className="text-md mt-3">6:00~18:00</p>
                <FaCloudRain className="text-[3rem] mt-3" />
                <p className="mt-8">14°-16°</p>
                <div className="flex mt-6">
                  <FaUmbrella className="mr-3" />
                  120%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom flex gap-3 w-[100%] h-100 bg-[#83838362] rounded-md  flex justify-start items-start p-6 ">
          <div className="left">
            <div>
              <h4 className="text-[2rem] inline-block">選擇地區:</h4>
              <p className="text-[2rem] inline-block font-bold">臺北市</p>
            </div>
            <div>
              <h4 className="text-[2rem] inline-block">當前溫度:</h4>
              <p className="text-[2rem] inline-block font-bold">臺北市</p>
            </div>
            <div>
              <h4 className="text-[2rem] inline-block">選擇地區:</h4>
              <p className="text-[2rem] inline-block font-bold">臺北市</p>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
