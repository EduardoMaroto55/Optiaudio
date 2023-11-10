import React from 'react'
import Logo from '../../assets/Logo.png'
import { BiSolidDashboard, BiLogOut } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Sidebar = (props) => {
    return (
        <div className="relative flex-shrink-0 items-center p-4 min-h-screen bg-darkColor md:w-60 w-36">
            <Link to="/home"><img src={Logo} alt="Logo de empresa" className="h-14 mt-3 object-contain" /></Link>
            <hr className='w-full mt-5 '></hr>
            <nav className='mt-5 flex flex-col items-center'>
                <button className="flex hover:font-bold text-white text-xl md:text-2xl cursor-pointer mb-5" onClick={() => props.view('dashboard')}>
                    <BiSolidDashboard size={30} className='text-black mr-2 ' />Dashboard
                </button>
                <button className="flex hover:font-bold text-white text-xl md:text-2xl cursor-pointe" onClick={() => props.view('usuarios')}>
                    <FiUsers size={30} className='text-black mr-2' />Usuarios
                </button>
            </nav>
            <div className="fixed bottom-4 left-10 md:left-24 ">
                <Link to='/login'><BiLogOut size={60} /></Link>
            </div>
        </div>
    )
}

export default Sidebar