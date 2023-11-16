import { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import { FadeLoader } from 'react-spinners';
import ReactGA from 'react-ga4';
import Layout from './components/Layout';
import ScrollTop from './components/ScrollTop';
//Load pages
import Homepage from './pages/Homepage';
import NoPage from './pages/NoPage';
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const Service = lazy(() => import('./pages/Service'));
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Services = lazy(() => import('./pages/Services'));


const MainContent = () => {
    const location = useLocation();
    useEffect(() => {
       // Send page_view event on each route change
       ReactGA.event({
        category: 'Custom', // Add this line
        action: 'page_view',
        params: {
          page_location: window.location.href,
          page_path: location.pathname,
        },
      });
    }, [location]);
    const fallback = <div className='flex justify-center items-center min-h-screen'><FadeLoader color="#4A90E2" size={150}/><p className='ml-4 text-lg text-gray-500'>Loading...</p></div>;
    return (
      <>
        <ScrollTop />
        <Suspense fallback={fallback}>
        <Routes>
        <Route index element={<Layout navbarType={'type2'}><Homepage /></Layout>} />
        <Route path='/inicio' element={<Layout navbarType={'type2'}><Homepage /></Layout>} />
        <Route path="/servicios" element={<Layout navbarType={'type1'}><Services /></Layout>} />
        <Route path='/sobreNosotros' element={<Layout navbarType={'type1'}><AboutUs /></Layout>} />
        <Route path='/contacto' element={<Layout navbarType={'type1'}><Contact /></Layout>} />
        <Route path='/servicio/:servicioId' element={<Layout navbarType={'type1'}><Service /></Layout>} />
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Suspense>
      </>
    );
}

export default MainContent