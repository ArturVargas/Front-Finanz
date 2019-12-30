import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.slim.min.js'
import 'popper.js'
import './App.css';
import { Route, Switch } from 'react-router-dom';

//Components
import Navbar from './Components/Shared/Navbar'

//Pages
import Login from './Pages/Login'
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
