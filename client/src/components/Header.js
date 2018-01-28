import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { Navbar, NavItem, Icon } from 'react-materialize';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          options={{
            menuWidth: 200,
            closeOnClick: true,
            draggable: true
          }}
          brand={
            <Link to="/">
              <img src={logo} id="logo" alt="" />
            </Link>
          }
          right
        >
          <NavItem>
            <Link to="/collection">Our Collection</Link>
          </NavItem>
          <NavItem>
            <Link to="/cart">
              <Icon>shopping_cart</Icon>
            </Link>
          </NavItem>

          <NavItem>
            <Link to="/orderState">Order State</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
        </Navbar>
      </div>
    );
  }
}
export default Header;
