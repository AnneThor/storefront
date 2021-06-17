import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Store/index.js'

import './App.css';
import Cart from './Components/Layout/Cart.js'
import Footer from './Components/Layout/Footer.js'
import Home from './Components/Layout/Home.js'
import Breadcrumb from './Components/Layout/Breadcrumb.js'
import Nav from './Components/Layout/Nav.js'


function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Nav />
          <Breadcrumb />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>

        </Router>
      </div>
    </Provider>
  );
}

export default App;
