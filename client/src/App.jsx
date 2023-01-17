import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Routes as Switch, Route } from 'react-router-dom';
import { Home, Auth } from './pages';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem('profile'));
    if (storageUser) {
      dispatch({ type: 'AUTH', data: storageUser });
    }
  }, [dispatch]);

  return (
    <HashRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Switch>
    </HashRouter>
  );
};

export default App;
