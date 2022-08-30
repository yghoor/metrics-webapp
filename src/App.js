import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import YearsList from './components/YearsList';
import YearInfo from './components/YearInfo';

const yearList = [
  {
    '2021-09-25': {
      'Revenue from Contract with Customer, Excluding Assessed Tax': {
        Geographical: {
          CHINA: 68366000000,
          'Other Countries': 163648000000,
          'UNITED STATES': 133803000000,
        },
      },
    },
  }, {
    '2020-09-26': {
      'Revenue from Contract with Customer, Excluding Assessed Tax': {
        Geographical: {
          CHINA: 40308000000,
          'Other Countries': 125010000000,
          'UNITED STATES': 109197000000,
        },
      },
    },
  }, {
    '2019-09-28': {
      'Revenue from Contract with Customer, Excluding Assessed Tax': {
        Geographical: {
          CHINA: 43678000000,
          'Other Countries': 114230000000,
          'UNITED STATES': 102266000000,
        },
      },
    },
  },
];

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<YearsList yearList={yearList} />} />
        <Route path=":slug" element={<YearInfo yearList={yearList} />} />
      </Routes>
    </Router>
  </>
);

export default App;
