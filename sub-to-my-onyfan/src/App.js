import React from 'react';
import Home from './Pages/Home/home'
import Solo from './Pages/Solo/solo'
import Multi from './Pages/Multi/multi'
import './index.css';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

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
