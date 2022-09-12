import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderWithProviders } from '../utils/test-utils';

import YearsList from '../components/YearsList';

it('Renders Navbar correctly', () => {
  renderWithProviders(
    <Router>
      <YearsList />
    </Router>,
  );

  const homeLink = screen.getByRole('link', { name: 'Home' });
  const pageHeader = screen.getByRole('heading', { name: 'Mesmerising Metrics' });
  const filterOptions = screen.getByRole('combobox');

  expect(homeLink).toBeInTheDocument();
  expect(pageHeader).toBeInTheDocument();
  expect(filterOptions).toBeInTheDocument();
});

it('Renders year list correctly', async () => {
  renderWithProviders(
    <Router>
      <YearsList />
    </Router>,
  );

  const yearListItems = await screen.findAllByRole('listitem');

  expect(yearListItems.length).toBe(11);
});
