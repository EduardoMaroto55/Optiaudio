import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children,navbarType }) {
  return (
    <div>
      {navbarType === 'type1' && 
        <Navbar divClass="sm:hidden z-50" ulClass="hidden sm:flex gap-16  justify-center" navClass="w-full min-h-[50px] items-center flex sm:justify-center justify-end text-white max-w-[1920px]  bg-[#252525]" />
      }
      {navbarType === 'type2' && 
        <Navbar hasLogo="true" divClass="sm:hidden z-10" ulClass="hidden sm:flex px-4 gap-7 xl:mr-48 lg:mr-40 font-bold" navClass="w-full min-h-[60px] items-center flex justify-between absolute sm:mt-9 text-black z-10 max-w-[1920px] mx-auto px-4 bg-white  sm:bg-transparent" />
      }
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
