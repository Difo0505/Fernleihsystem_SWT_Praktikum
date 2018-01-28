import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { Navbar, NavItem, Icon } from "react-materialize";

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
          <li>
            <Link to="/collection">Our Collection</Link>
          </li>
          <li>
            <Link to="/cart">
              <Icon>shopping_cart</Icon>
            </Link>
          </li>

          <li>
            <Link to="/orderState">Order State</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </Navbar>
      </div>
    );
  }
}
export default Header;
