import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { retrieveRevenues } from '../redux/revenues/revenues';

import Navbar from './Navbar';

const YearsList = () => {
  const dispatch = useDispatch();
  const yearList = useSelector((state) => state.revenuesReducer);

  useEffect(() => {
    dispatch(retrieveRevenues());
  }, []);

  return (
    <>
      <Navbar homeButton="Home" header="Mesmerising Metrics" />

      <ul className="years-list">
        {yearList.map((year) => {
          const date = Object.keys(year)[0];
          const yearNumber = date.split('-')[0];
          const revenues = year[date];

          return (
            <li key={yearNumber}>
              <Link to={date}>
                <small className="year">{yearNumber}</small>
                <small className="total-revenue">
                  {`Total: ${Object.values(revenues).reduce((a, b) => a + b)}`}
                </small>
              </Link>
            </li>
          );
        })}
      </ul>

      <Outlet />
    </>
  );
};

export default YearsList;
