import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Solo from './Pages/Solo/Solo';
import Multi from './Pages/Multi/Multi';

import './index.css';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/solo">
        <Solo />
      </Route>
      <Route exact path="/multi">
        <Multi />
      </Route>
    </Router>
  );
}

export default App;
