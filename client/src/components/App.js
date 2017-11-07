import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import '../App.css';
import KorbContainer from './KorbContainer';
import About from './About';
import Collection from './Collection';
import ExtendedSearch from './ExtendedSearch';

import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App ">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={KorbContainer} />
            <Route exact path="/collection" component={Collection} />
            <Route exact path="/about" component={About} />
            <Route exact path="/extendedSearch" component={ExtendedSearch} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
