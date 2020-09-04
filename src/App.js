import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import DetailPage from './pages/detail';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/detail" exact component={DetailPage}/>
    </Router>
  );
}

export default App;
