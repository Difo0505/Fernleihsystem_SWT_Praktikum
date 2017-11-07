import React, { Component } from "react";
import { Row, Col } from "react-grid-system";
import SearchHome from "./SearchHome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";
import { Input, Icon, Collapsible, CollapsibleItem } from "react-materialize";
import "../App.css";
class Collection extends Component {
  async componentWillMount() {
    await this.props.FetchBook();
  }
  render() {
    return (
      <div>
        <div className="center">
          <h3>lala</h3>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.book
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Collection);
//export default Collection;
