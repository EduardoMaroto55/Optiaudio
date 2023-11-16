import React from 'react'
import { FaBars } from 'react-icons/fa'
import Logo from "../assets/logo.png"
import { navLinks } from "../constants/index"
import { Link,useLocation } from 'react-router-dom'


const Navbar = ({ navClass, ulClass, divClass, hasLogo }) => {
  const location = useLocation();
  const [navLinksState, setNavLinksState] = React.useState(navLinks);
  const [isNav, setIsNav] = React.useState(false)


  const handleIsNav = () => {
    setIsNav(!isNav)
  }
  const navElements = navLinksState.map(nav => {
    const isExternalLink = nav.link.includes('#' || 'Servicios');
    const isActive = location.pathname.includes(nav.link);
    return (
      <li key={nav.id} id={`navElement-${nav.id}`}>
        {isExternalLink ? (
          <a href={nav.link} title={nav.title} className={`relative w-fit block 
            after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 
            after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-pointer hover:text-white ${isActive ? 'text-white' : ''} `}>
            {nav.title}
          </a>
        ) : (
          <Link  to={nav.link} title={nav.title}  className={`relative w-fit block 
            after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 
            after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-pointer hover:text-white  ${isActive ? "after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-100 after:transition after:duration-300 cursor-pointe text-white " : ''} `}>
            {nav.title}
          </Link>
        )}
      </li>
    );
  });
  const navElementsBurger = navLinksState.map(nav => {
    const isExternalLink = nav.link.includes('#' || 'Servicios');

    return (
      <li key={nav.id} className='text-2x1 py-1 mb-5 z-50'>
        {isExternalLink ? (
          <a href={nav.link} title={nav.title} className="hover:text-white cursor-pointer">
            {nav.title}
          </a>
        ) : (
          <Link to={nav.link} title={nav.title} className="hover:text-white cursor-pointer z-50">
            {nav.title}
          </Link>
        )}
      </li>
    );
  });
  return (
    <nav className={navClass}>
      {hasLogo && (
        <div>
         <img src={Logo} alt='logo Optiaudio' title="logo Optiaudio" className='xl:ml-48 lg:ml-40 w-52' />
        </div>
      )}
      <ul className={ulClass}>
        {navElements}
      </ul>
      <div onClick={handleIsNav} className={divClass}  >
        <FaBars size={20} className={isNav ? `text-white duration-300 mr-4 cursor-pointer` : `text-black mr-4 cursor-pointer`} />
      </div>
      <div className={isNav ? `overflow-y-hidden sm:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col`
        : `absolute top-0 h-screen duration-500 left-[-100%]  ease-in`}>
        <ul className='h-full w-full text-center pt-12 z-50'>
          {navElementsBurger}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
