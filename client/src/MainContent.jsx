import { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Service from './pages/Service';
import ScrollTop from './components/ScrollTop';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ReactGA from 'react-ga4';
import Layout from './components/Layout';
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
    const LazyServices = lazy(() => import('./pages/Services'));
    return (
      <>
        <ScrollTop />
        <Routes>
        <Route path='/login' element={<Login />} />
          <Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>} />
          <Route index element={<Layout navbarType={'type2'}><Homepage /></Layout>} />
          <Route path='/inicio' element={<Layout navbarType={'type2'}><Homepage /></Layout>} />
          <Route path="/servicios" element={<Suspense fallback={<div>Loading...</div>}><Layout navbarType={'type1'}><LazyServices /></Layout></Suspense>} />
          <Route path='/sobreNosotros' element={<Layout navbarType={'type1'}><AboutUs /></Layout>} />
          <Route path='/contacto' element={<Layout navbarType={'type1'}><Contact /></Layout>} />
          <Route path='/servicio/:servicioId' element={<Layout navbarType={'type1'}><Service /></Layout>} />
          <Route path='*' element={<NoPage />} />
        </Routes>
       
      </>
    );
}

export default MainContent