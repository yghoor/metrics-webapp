import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../utils/test-utils';

import App from '../App';

it('Renders year info correctly', async () => {
  renderWithProviders(<App />);

  const yearListItem = await screen.findByText('2020');
  userEvent.click(yearListItem);

  const homeLink = screen.getByRole('link', { name: '＜ Home' });
  const pageHeader = screen.getByRole('heading', { name: '2020' });
  const yearInfoList = screen.getAllByRole('listitem');

  expect(homeLink).toBeInTheDocument();
  expect(pageHeader).toBeInTheDocument();
  expect(yearInfoList.length).toBe(8);
});
