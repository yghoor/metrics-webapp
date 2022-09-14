import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import YearsList from './components/YearsList';
import YearInfo from './components/YearInfo';

import './App.css';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<YearsList />} />
        <Route path=":slug" element={<YearInfo />} />
      </Routes>
    </Router>
  </>
);

export default App;
