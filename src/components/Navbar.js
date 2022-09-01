import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ homeButton, header }) => (
  <nav>
    <Link to="/">{homeButton}</Link>

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
