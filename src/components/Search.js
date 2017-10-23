import React, { Component } from "react";
class Search extends Component {
  render() {
    return (
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <i class="material-icons prefix">search</i>
              <input id="icon_prefix" type="text" class="validate" />
              <label for="icon_prefix">Enter a title to search for</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Search;
