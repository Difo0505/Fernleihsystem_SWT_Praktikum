import React, { Component } from "react";
import { Link } from "react-router-dom";
class Cart extends Component {
  render() {
    return (
      <div>
        <div>
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>Cart</h4>
            </li>
            <li className="collection-item">
              <div>
                book1<a href="#!" class="secondary-content">
                  <i className="material-icons">delete</i>
                </a>
              </div>
            </li>
            <li className="collection-item">
              <div>
                book2<a href="#!" className="secondary-content">
                  <i className="material-icons">delete</i>
                </a>
              </div>
            </li>
            <li className="collection-item">
              <div>
                book3<a href="#!" className="secondary-content">
                  <i className="material-icons">delete</i>
                </a>
              </div>
            </li>
            <li class="collection-item">
              <div>
                book4<a href="#!" className="secondary-content">
                  <i className="material-icons">delete</i>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="center">
          <Link to="/cart/user" className="waves-effect waves-light btn ">
            <i class="material-icons left">cloud</i>Checkout
          </Link>
        </div>
      </div>
    );
  }
}

export default Cart;
