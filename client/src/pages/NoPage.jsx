import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800">
      <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-2 text-xl">Ups... la página no ha sido encontrada</p>
      <Link to="/" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Volver al inicio</Link>
    </div>
  )
}

export default NoPage