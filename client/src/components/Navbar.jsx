import React from 'react'
import { FaBars } from 'react-icons/fa'
import Logo from "../assets/logo.png"
import { navLinks } from "../constants/index"
import { Link } from 'react-router-dom'

const Navbar = ({ navClass, ulClass, divClass, hasLogo }) => {

  const [navLinksState, setNavLinksState] = React.useState(navLinks);
  const [isNav, setIsNav] = React.useState(false)


  const handleIsNav = () => {
    setIsNav(!isNav)
  }
  const navElements = navLinksState.map(nav => {
    const isExternalLink = nav.link.includes('#' || 'Servicios');
    return (
      <li key={nav.id}>
        {isExternalLink ? (
          <a href={nav.link} className="relative w-fit block 
            after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 
            after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-pointer hover:text-white">
            {nav.title}
          </a>
        ) : (
          <Link to={nav.link} className="relative w-fit block 
            after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 
            after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-pointer hover:text-white">
            {nav.title}
          </Link>
        )}
      </li>
    );
  });
  const navElementsBurger = navLinksState.map(nav => {
    const isExternalLink = nav.link.includes('#' || 'Servicios');

    return (
      <li key={nav.id} className='text-2x1 py-1'>
        {isExternalLink ? (
          <a href={nav.link} className="hover:text-white cursor-pointer">
            {nav.title}
          </a>
        ) : (
          <Link to={nav.link} className="hover:text-white cursor-pointer">
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
          <Link to='/home'><img src={Logo} alt='logo Optiaudio' className='xl:ml-48 lg:ml-40 w-52' /></Link>
        </div>
      )}
      <ul className={ulClass}>
        {navElements}
      </ul>
      <div onClick={handleIsNav} className={divClass}  >
        <FaBars size={20} className={isNav ? `text-white duration-300 mr-4 cursor-pointer` : `text-black mr-4 cursor-pointer`} />
      </div>
      <div className={isNav ? `overflow-y-hidden sm:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col`
        : `absolute top-0 h-screen duration-500 left-[-100%] ease-in`}>
        <ul className='h-full w-full text-center pt-12'>
          {navElementsBurger}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
