import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom'
const MainContent = lazy(()=> import('./MainContent'));
import ReactGA from 'react-ga4';
import { FadeLoader } from 'react-spinners';
function App() {


  useEffect(() => {
    const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaMeasurementId) {
      ReactGA.initialize(gaMeasurementId);
    } else {
      console.warn('Google Analytics Measurement ID is not defined');
    }
  }, []);
  const fallback = <div className='flex justify-center items-center min-h-screen'><FadeLoader color="#4A90E2" size={150}/><p className='ml-4 text-lg text-gray-500'>Loading...</p></div>;
  return (
    <BrowserRouter>
        <Suspense fallback={fallback}>
        <MainContent />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
