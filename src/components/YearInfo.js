import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './Navbar';

import '../styles/YearInfo.css';

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
    <section className="year-info-page">
      <Navbar homeButton="&#65308; Home" header={currentYear} filter={false} />

      <div className="year-info">
        <ul className="revenue-list">
          {areas.map((area, i) => (
            <li key={area}>{`${area}: ${revenues[i]}`}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default YearInfo;
