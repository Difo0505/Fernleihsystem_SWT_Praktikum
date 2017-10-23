import React, { Component } from "react";
import logo from "../uploads/wuppertal.png";
import "../uni.css";
class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="" class="brand-logo">
              Bergische universität Wuppertal logo
            </a>
            <ul id="nav-mobile" class="right  hide-on-med-and-down">
              <li>
                <a href="">etwas</a>
              </li>
              <li>
                <a href="">etwass</a>
              </li>
              <li>
                <a href="">etwas</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
