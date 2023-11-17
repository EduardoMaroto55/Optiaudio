import { React, useState, Suspense, useMemo } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Estadisticas from '../components/dashboard/EstadisticasSection'
import UsuariosSection from '../components/dashboard/UsuariosSection'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state ? location.state.userId : undefined;
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    if (userId === undefined) {
      navigate('/login');
    }
  }, [userId, navigate]);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get('/getusers');
      setUsers(response.data);
    } catch (error) {
      console.log(error);
      setErrorMessage('An error occurred.');
    }
  }
  useEffect(() => {
    fetchUsers();
  }, [])
 

  const [view, updateView] = useState(localStorage.getItem('view') || 'dashboard');
  const setView = (newView) => {
    localStorage.setItem('view', newView);
    updateView(newView);
  };
  const [errorMessage, setErrorMessage] = useState(null);

  const user = users.find(user => Number(user.id) === Number(userId));

  return (
    <section className="flex">
      <Helmet>
        <meta name="robots" content="noindex" /> 
       </Helmet>
      <Sidebar view={setView} />
      <div className="flex flex-col flex-1 relative">
        <header className="flex items-center h-28 bg-slate-800 w-full justify-end p-4 px-6">
          <div className="p-2 bg-gray-200 w-40 rounded-sm text-center">
            <label className='inline-block  whitespace-nowrap'>{user ? user.first_name : 'Loading...'}</label>
          </div>
        </header>
        <div className="flex flex-row h-full">

          <main className="flex-grow">
       
          {view === 'dashboard' && (
          <Suspense fallback={<div>Loading...</div>}>
            <Estadisticas />
          </Suspense>
        )}
        {view === 'usuarios' && (
          <UsuariosSection users={users} />
        )}
          </main>
        </div>
      </div>
    </section>
  )
}

export default Dashboard