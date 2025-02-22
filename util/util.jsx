import moment from 'moment';

import { FaCloudRain } from 'react-icons/fa';
import { FaCloudSun } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa';

export function getTime(weatherData) {
  if (!weatherData) return;
  const startTime = weatherData.map((item) =>
    moment(item.startTime).format('HH:mm'),
  );
  const endTime = weatherData.map((item) =>
    moment(item.endTime).format('HH:mm'),
  );
  const startDate = weatherData.map((item) =>
    moment(item.startTime).format('MM/DD'),
  );
  const endDate = weatherData.map((item) =>
    moment(item.endTime).format('MM/DD'),
  );
  return { startTime, endTime, startDate, endDate };
}

export function getPara(conditions) {
  const conditionsData = conditions.map((item) => {
    return item.parameter.parameterName;
  });
  return conditionsData;
}

export function getWeatherIcon(weatherConditions) {
  const weatherType = {
    sunny: {
      conditions: ['多雲時晴', '多雲'],
      icon: <FaCloudSun className="text-[3rem] mt-3" />,
    },
    cloudy: {
      conditions: ['陰天', '多雲時陰'],
      icon: <FaCloud className="text-[3rem] mt-3" />,
    },
    rainy: {
      conditions: [
        '陰短暫雨',
        '陰時多雲短暫雨',
        '多雲短暫雨',
        '多雲時陰短暫雨',
      ],
      icon: <FaCloudRain className="text-[3rem] mt-3" />,
    },
  };
  const matchWeatherIcon = weatherConditions.map((condition) => {
    const match = Object.values(weatherType).find((type) => {
      return type.conditions.includes(condition);
    });
    return match ? match.icon : null;
  });
  return matchWeatherIcon;
}
