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

    <h2>{header}</h2>

          <select placeholder="Filter" onChange={onChange}>
            <option value="revenueDesc">Revenue (descending)</option>
            <option value="revenueAsc">Revenue (ascending)</option>
          </select>

export default Navbar;

Navbar.propTypes = {
  homeButton: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};
