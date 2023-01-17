import React from 'react';
import { HashRouter, Routes as Switch, Route } from 'react-router-dom';
import { Home, Auth } from './pages';

const App = () => {
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
