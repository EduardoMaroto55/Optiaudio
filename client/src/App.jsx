import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, Suspense, lazy } from 'react'
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Service from './pages/Service';
import ScrollTop from './components/ScrollTop';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';




function Main() {

  const location = useLocation();
  useEffect(() => {
    // Send page_view event on each route change
    ReactGA.send('page_view');
  }, [location]);

  const isHomePage = location.pathname === '/' || location.pathname === '/home' || location.hash === '#faq';;
  const LazyServices = lazy(() => import('./pages/Services'));
  const showNavbar = location.pathname !== '/login' && location.pathname !== '/dashboard' && location.pathname !== '*';
  return (
    <>
      <ScrollTop />
      {showNavbar && (isHomePage ?
        <Navbar hasLogo="true" divClass="sm:hidden z-10" ulClass="hidden sm:flex px-4 gap-7 xl:mr-48 lg:mr-40 font-bold" navClass="w-full min-h-[60px] items-center flex justify-between absolute sm:mt-9 text-black z-10 max-w-[1920px] mx-auto px-4 bg-white  sm:bg-transparent" />
        :
        <Navbar divClass="sm:hidden z-50" ulClass="hidden sm:flex gap-16  justify-center" navClass="w-full min-h-[50px] items-center flex sm:justify-center justify-end text-white max-w-[1920px]  bg-[#252525]" />
      )}
     
      <Routes>
      <Route path='/login' element={<Login />} />
        <Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>} />
        <Route index element={<Homepage />} />
        <Route path='/home' element={<Homepage />} />
        <Route path="/servicios" element={<Suspense fallback={<div>Loading...</div>}><LazyServices /></Suspense>} />
        <Route path='/sobreNosotros' element={<AboutUs />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/servicio/:servicioId' element={<Service />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      {(location.pathname !== '/login' && location.pathname !== '/dashboard' && location.pathname !== '*') && <Footer />}
    </>
  );
}


function App() {
  ReactGA.initialize(import.meta.env.REACT_APP_GA_TRACKING_ID);
  return (


    <BrowserRouter>
      <Main />
    </BrowserRouter>

  )
}

export default App
