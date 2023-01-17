import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/auth">Auth</Link>
    </>
  );
};

export default Home;
