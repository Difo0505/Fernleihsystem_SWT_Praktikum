import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import "../App.css";
import KorbContainer from "./KorbContainer2";
import Korb from "./Korb";
import About from "./About";
import Collection from "./Collection";
import ExtendedSearch from "./ExtendedSearch";
import Step1 from "./CartSteps/Step1";
import Step2 from "./CartSteps/Step2";
import Step3 from "./CartSteps/Step3";
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App ">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Korb} />
            {/* <Route exact path="/cart" component={KorbContainer} /> */}
            <Route exact path="/collection" component={Collection} />
            <Route exact path="/about" component={About} />
            <Route exact path="/extendedSearch" component={ExtendedSearch} />
            <Route exact path="/step1" component={Step1} />
            <Route exact path="/confirmation" component={Step2} />
            <Route exact path="/orderReceived" component={Step3} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
