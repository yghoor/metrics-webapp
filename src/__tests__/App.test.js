import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../utils/test-utils';

import App from '../App';

describe('App', () => {
  it('renders year list page by default', () => {
    renderWithProviders(<App />);

    const yearListHeader = screen.getByRole('heading', { name: 'Mesmerising Metrics' });

    expect(yearListHeader).toBeInTheDocument();
  });

  it('renders year info page when year is clicked', async () => {
    renderWithProviders(<App />);

    const yearListItem = await screen.findByText('2021');
    userEvent.click(yearListItem);

    const yearInfoHeader = screen.getByRole('heading', { name: '2021' });

    expect(yearInfoHeader).toBeInTheDocument();
  });
});
