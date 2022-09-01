import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import filterList from '../logic/filterList';
import { returnFiltered } from '../redux/revenues/revenues';

const Navbar = ({ homeButton, header, filter }) => {
  const dispatch = useDispatch();
  const yearList = useSelector((state) => state.revenuesReducer);

  const onChange = (e) => {
    const filteredList = filterList(yearList, e.target.value);
    dispatch(returnFiltered(filteredList));
  };

  return (
    <nav>
      <Link to="/">{homeButton}</Link>

      <h2>{header}</h2>

      {filter
        ? (
          <select placeholder="Filter" onChange={onChange}>
            <option value="revenueDesc">Total Revenue(descending)</option>
            <option value="revenueAsc">Total Revenue(ascending)</option>
          </select>
        )
        : null}
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  homeButton: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  filter: PropTypes.bool.isRequired,
};
