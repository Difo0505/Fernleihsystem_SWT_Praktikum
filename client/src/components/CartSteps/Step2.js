import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { Col, Card, Button } from "react-materialize";
import UserInfos from "../userInfos";
import { Redirect, Link } from "react-router-dom";
class Step2 extends Component {
  constructor() {
    super();
    this.state = { redirect: false };
    this.submit = this.submit.bind(this);
  }
  async submit() {
    await this.props.Order({
      orders: this.props.korb.arr,
      userInfos: this.props.userInfos
    });
    this.setState({ redirect: true });
  }
  render() {
    if (this.state.redirect) {
      return (
        <div>
          <Redirect to="/orderReceived" />
        </div>
      );
    }
    return (
      <div>
        <UserInfos />
        <Button
          waves="light"
          id="submitBtn"
          className="red center"
          onClick={this.submit}
        >
          Submit
        </Button>
        <Link to="/step1" className="btn red">
          Previous
        </Link>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToPros)(Step2);
