import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Navbar from './Navbar';

const YearInfo = ({ yearList }) => {
  const { slug } = useParams();
  const currentDate = slug;
  const currentYearInfo = yearList.find((year) => Object.keys(year)[0] === slug);
  const currentYear = currentDate.split('-')[0];
  const currentRevenues = currentYearInfo[currentDate][
    Object.keys(currentYearInfo[currentDate])].Geographical;

  const areas = Object.keys(currentRevenues);
  const revenues = Object.values(currentRevenues);

  return (
    <>
      <Navbar homeButton="&#65308; Home" header={currentYear} />

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

YearInfo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  yearList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
