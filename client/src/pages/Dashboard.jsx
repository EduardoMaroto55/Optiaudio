import { React, useState, Suspense } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Estadisticas from '../components/dashboard/EstadisticasSection'
import UsuariosSection from '../components/dashboard/UsuariosSection'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    axios.get('http://localhost:3000/getusers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        setErrorMessage('An error occurred.');
      })
  }, [])
  const [users, setUsers] = useState([]);
  const userId = location.state ? location.state.userId : undefined;


  useEffect(() => {
    if (userId === undefined) {
      navigate('/login');
    }
  }, [userId, navigate]);

  const [view, setView] = useState('dashboard');
  const [errorMessage, setErrorMessage] = useState(null);

  const user = users.find(user => Number(user.id) === Number(userId));

  return (
    <section className="flex">
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
              <>
                <UsuariosSection users={users} />
                
              </>
            )}
          </main>
        </div>
      </div>
    </section>
  )
}

export default Dashboard