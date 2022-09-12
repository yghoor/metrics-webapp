import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderWithProviders } from '../utils/test-utils';

import filterList from '../logic/filterList';
import YearsList from '../components/YearsList';

const yearListDescending = [
  {
    '2021-09-25': {
      CHINA: 68366000000,
      'Other Countries': 163648000000,
      'UNITED STATES': 133803000000,
      'Americas Segment': 153306000000,
      'Europe Segment': 89307000000,
      'Greater China Segment': 68366000000,
      'Japan Segment': 28482000000,
      'Rest of Asia Pacific Segment': 26356000000,
    },
  }, {
    '2020-09-26': {
      CHINA: 40308000000,
      'Other Countries': 125010000000,
      'UNITED STATES': 109197000000,
      'Americas Segment': 124556000000,
      'Europe Segment': 68640000000,
      'Greater China Segment': 40308000000,
      'Japan Segment': 21418000000,
      'Rest of Asia Pacific Segment': 19593000000,
    },
  }, {
    '2019-09-28': {
      CHINA: 43678000000,
      'Other Countries': 114230000000,
      'UNITED STATES': 102266000000,
      'Americas Segment': 116914000000,
      'Europe Segment': 60288000000,
      'Greater China Segment': 43678000000,
      'Japan Segment': 21506000000,
      'Rest of Asia Pacific Segment': 17788000000,
    },
  },
];

const yearListAscending = [
  {
    '2019-09-28': {
      CHINA: 43678000000,
      'Other Countries': 114230000000,
      'UNITED STATES': 102266000000,
      'Americas Segment': 116914000000,
      'Europe Segment': 60288000000,
      'Greater China Segment': 43678000000,
      'Japan Segment': 21506000000,
      'Rest of Asia Pacific Segment': 17788000000,
    },
  }, {
    '2020-09-26': {
      CHINA: 40308000000,
      'Other Countries': 125010000000,
      'UNITED STATES': 109197000000,
      'Americas Segment': 124556000000,
      'Europe Segment': 68640000000,
      'Greater China Segment': 40308000000,
      'Japan Segment': 21418000000,
      'Rest of Asia Pacific Segment': 19593000000,
    },
  }, {
    '2021-09-25': {
      CHINA: 68366000000,
      'Other Countries': 163648000000,
      'UNITED STATES': 133803000000,
      'Americas Segment': 153306000000,
      'Europe Segment': 89307000000,
      'Greater China Segment': 68366000000,
      'Japan Segment': 28482000000,
      'Rest of Asia Pacific Segment': 26356000000,
    },
  },
];

describe('filterList function', () => {
  test('revenue ascending works', () => {
    const filteredList = filterList(yearListDescending, 'revenueAsc');
    expect(filteredList).toEqual(yearListAscending);
  });

  test('revenue descending works', () => {
    const filteredList = filterList(yearListAscending, 'revenueDesc');
    expect(filteredList).toEqual(yearListDescending);
  });
});

describe('YearsList filtering', () => {
  it('Displays filtered year list correctly', async () => {
    renderWithProviders(
      <Router>
        <YearsList />
      </Router>,
    );

    let yearListItems = await screen.findAllByRole('listitem');

    const filterOptions = screen.getByRole('combobox');
    expect(yearListItems[0][Object.keys(yearListItems[0])[0]].key).toBe('2021');

    userEvent.selectOptions(filterOptions, 'Total Revenue(ascending)');
    yearListItems = screen.getAllByRole('listitem');

    expect(yearListItems[0][Object.keys(yearListItems[0])[0]].key).toBe('2011');
  });
});
