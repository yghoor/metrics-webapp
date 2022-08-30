import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ homeButton, header }) => (
  <nav>
    <Link to="/">{homeButton}</Link>

    <h2>{header}</h2>

    <button type="button">&#9881;</button>
  </nav>
);

export default Navbar;

Navbar.propTypes = {
  homeButton: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};
