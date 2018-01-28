import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
class Step3 extends Component {
  render() {
    if (this.props.userInfos) {
      console.log(this.props.userInfos);
      return (
        <div>
          <h3>
            Your order has been received. An email has been sent to <br />
            {this.props.userInfos.email} !
          </h3>
        </div>
      );
    }
  }
}

function mapDispatchToPros(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
  return {
    userInfos: state.userInfos,
    korb: state.korb,
    step: state.step
  };
}

export default connect(mapStateToProps, mapDispatchToPros)(Step3);
