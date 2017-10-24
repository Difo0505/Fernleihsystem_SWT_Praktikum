import React, { Component } from 'react';
import { Input, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

class SearchHome extends Component {
  render() {
    return (
      <div>
        <div id="searchHome">
          <h5>Looking for something ? </h5>
          <form>
            <Input label="Title">
              <Icon>search</Icon>
            </Input>
            <button className="btn red " type="submit">
              Search
            </button>
            <Link to="/extendedSearch" className="btn-floating red">
              <Icon>add</Icon>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchHome;
