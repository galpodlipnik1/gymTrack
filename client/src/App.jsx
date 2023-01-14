import React from 'react';
import { HashRouter, Routes as Switch, Route } from 'react-router-dom';
import { Home } from './pages';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </HashRouter>
  );
};

export default App;
