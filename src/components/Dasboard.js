import React from 'react';
import { Link } from 'react-router-dom';

const Dasboard = () => {
  return (
    <>
      <Link to="/todo">
        <p className="text-center text-2xl text-blue-500">Go to Todo App</p>
      </Link>
      <Link to="/multiplex">
        <p className="text-center text-2xl text-blue-500 my-3">Go to Multiplex</p>
      </Link>
    </>
  )
}

export default Dasboard