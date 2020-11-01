import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Solo from './Pages/Solo/Solo';
import Multi from './Pages/Multi/Multi';
import Connection from './Pages/Connection/Connection';
import Register from './Pages/Register/Register';

import './index.css';

function App() {
  return (
    <Router>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/solo">
        <Solo />
      </Route>
      <Route exact path="/multi">
        <Multi />
      </Route>
      <Route exact path="/">
        <Connection />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </Router>
  );
}

export default App;
