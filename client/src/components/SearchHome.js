import React, { Component } from "react";
import { Input, Icon } from "react-materialize";
import { Visible } from "react-grid-system";

class SearchHome extends Component {
  render() {
    return (
      <div>
        <Visible md lg xl>
          <div id="searchHome">
            <form>
              <Input label="Title">
                <Icon>search</Icon>
              </Input>
              <button className="btn red " type="submit">
                Search
              </button>
            </form>
          </div>
        </Visible>
      </div>
    );
  }
}

export default SearchHome;
