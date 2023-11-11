import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import MainContent from './MainContent';
import ReactGA from 'react-ga4';

function App() {
  ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>

  )
}

export default App
