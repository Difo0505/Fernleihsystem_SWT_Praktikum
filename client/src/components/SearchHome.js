import React, { Component } from "react";
import { Input, Icon } from "react-materialize";
import { Link } from "react-router-dom";

class SearchHome extends Component {
  render() {
    return (
      <div>
        <div id="searchHome">
          <h5>Looking for something ? </h5>
          <form>
            <Link to="/extendedSearch" className="btn red">
              <Icon>search</Icon> Search
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchHome;
