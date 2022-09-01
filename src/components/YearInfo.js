import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './Navbar';

const YearInfo = () => {
  const yearList = useSelector((state) => state.revenuesReducer);

  const { slug } = useParams();
  const currentDate = slug;
  const currentYearInfo = yearList.find((year) => Object.keys(year)[0] === slug);
  const currentYear = currentDate.split('-')[0];
  const currentRevenues = currentYearInfo[currentDate];
  const areas = Object.keys(currentRevenues);
  const revenues = Object.values(currentRevenues);

  return (
    <>
      <Navbar homeButton="&#65308; Home" header={currentYear} filter={false} />

      <div className="year-info">
        <ul className="revenue-list">
          {areas.map((area, i) => (
            <li key={area}>{`${area}: ${revenues[i]}`}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default YearInfo;
