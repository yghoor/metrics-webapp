/* eslint-disable import/prefer-default-export */
import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import revenuesReducer from '../redux/revenues/revenues';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({ reducer: { revenuesReducer }, preloadedState }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
