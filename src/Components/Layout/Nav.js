import { Component } from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {

  return (
    <div id="header">
      <h1><Link to="/">Virtual Storefront</Link></h1>
      <ul>
        <li><Link data-testid="home" to="/">Home</Link></li>
        <li><Link to="/cart">Shopping Cart</Link></li>
      </ul>
    </div>
  )

}

export default Nav;
