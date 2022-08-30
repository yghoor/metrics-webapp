import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

import Navbar from './Navbar';

const YearsList = ({ yearList }) => (
  <>
    <Navbar homeButton="Home" header="Mesmerising Metrics" />

    <ul className="years-list">
      {yearList.map((year) => {
        const date = Object.keys(year)[0];
        const yearNumber = date.split('-')[0];
        const revenues = year[date][Object.keys(year[date])].Geographical;

        return (
          <>
            <li key={yearNumber}>
              <Link to={date}>
                <small className="year">{yearNumber}</small>
                <small className="total-revenue">
                  {`Total: ${Object.values(revenues).reduce((a, b) => a + b)}`}
                </small>
              </Link>
            </li>
          </>
        );
      })}
    </ul>

    <Outlet />
  </>
);

export default YearsList;
