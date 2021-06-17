import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Nav from './Components/Layout/Nav.js'
import Footer from './Components/Layout/Footer.js'
import Home from './Components/Layout/Home.js'
import Cart from './Components/Layout/Cart.js'

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
