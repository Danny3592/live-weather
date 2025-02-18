import axios from 'axios';
import { FaCloudRain } from 'react-icons/fa';
import { FaUmbrella } from 'react-icons/fa';

// const mutiInfoUrl =
//   'https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWA-72F6D7B5-B618-428B-8BB8-CC0BF7ACFBAA&format=JSON';
// const rainyInfoUrl =
//   'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-001?Authorization=CWA-72F6D7B5-B618-428B-8BB8-CC0BF7ACFBAA';

// async function getData() {
//   const res = await axios(mutiInfoUrl);
//   const data = res.data;
//   console.log('data = ', data);
//   const records = data.records.Station;
//   console.log('records = ', records);
//   const city = records.filter((item) => item.GeoInfo.CountyName === '基隆市');
//   console.log('city = ', city);
//   const weatherValues = city.map((item) => item.WeatherElement.Weather);
//   console.log(weatherValues);
// }

const WeatherApp = () => {
  // getData();

  return (
    <div className="flex justify-center items-center mt-20 flex-col gap-3 mx-auto max-w-[1200px]">
      <div className="top flex gap-4">
        <div className="left w-[300px] h-[300px] bg-[#83838362] rounded-md flex justify-start items-start p-6 flex-col">
          <h4 className="text-xl mb-3">搜尋地區</h4>
          <input
            type="text"
            placeholder="請輸入地區名稱"
            className="border border-2 bg-white rounded-md py-1 pl-1"
          />
          <h4 className="text-xl mb-3 mt-3">搜尋目的地</h4>
          <input
            type="text"
            placeholder="請輸入要前往的目的地"
            className="border border-2 bg-white rounded-md py-1 pl-1" 
          />
          <button
            className="mt-15 px-5 py-2 bg-[#f6c79c]
          rounded-lg hover:cursor-pointer hover:bg-[#f9eee3]"
          >
            送出
          </button>
        </div>

        <div className="right w-[300px] h-[300px] bg-[#83838362] rounded-md ">
          <div className="flex h-[100%] justify-center">
            <div className="flex flex-col items-center w-100 pt-5 hover:bg-[#83838392]">
              <h4 className="text-md">今晚明晨</h4>
              <p className="text-md  mt-3">18:00~06:00</p>
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
      <div className="bottom flex gap-3 w-[100%] h-100 bg-[#83838362] rounded-md  flex justify-start items-start p-6 "></div>
    </div>
  );
};

export default WeatherApp;
