import React from 'react';
import classes from './History.module.css'
const History = () => {
  return (
    <div>
      <div className="w-[400px] h-auto absolute left-20 top-30 hidden md:block">
        <ul className={classes['location-btn-list']}>
          {' '}
          {/* 歷史紀錄列表 */}
          <li>
            <button className="bg-amber-200 px-5 py-4 rounded-lg shadow-lg">
              基隆市
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default History;
