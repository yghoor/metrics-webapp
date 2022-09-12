import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

import { renderWithProviders } from '../utils/test-utils';
import Navbar from '../components/Navbar';

describe('Renders Navbar according to props', () => {
  it('Can render Navbar with filter options', () => {
    renderWithProviders(
      <Router>
        <Navbar homeButton="Home" header="Mesmerising Metrics" filter />
      </Router>,
    );

    const link = screen.getByRole('link', { name: 'Home' });
    const header = screen.getByRole('heading', { name: 'Mesmerising Metrics' });
    const filterOptions = screen.getByRole('combobox');

    expect(link).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(filterOptions).toBeInTheDocument();
  });

  it('Can render Navbar without filter options', () => {
    renderWithProviders(
      <Router>
        <Navbar homeButton="Home" header="Mesmerising Metrics" filter={false} />
      </Router>,
    );

    const link = screen.getByRole('link', { name: 'Home' });
    const header = screen.getByRole('heading', { name: 'Mesmerising Metrics' });
    const filterOptions = screen.queryByRole('combobox');

    expect(link).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(filterOptions).not.toBeInTheDocument();
  });
});

describe('Filter options work correctly', () => {
  it('Can filter year list', async () => {
    renderWithProviders(
      <Router>
        <Navbar homeButton="Home" header="Mesmerising Metrics" filter />
      </Router>,
    );

    const filterOptions = screen.getByRole('combobox');

    expect(filterOptions.value).toBe('revenueDesc');

    userEvent.selectOptions(filterOptions, 'revenueAsc');

    expect(filterOptions.value).toBe('revenueAsc');
  });
});
