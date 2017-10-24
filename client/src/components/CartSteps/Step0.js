import React, { Component } from 'react';

class Step0 extends Component {
  render() {
    return (
      <div>
        <div>
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>Your Orders</h4>
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
      </div>
    );
  }
}

export default Step0;
