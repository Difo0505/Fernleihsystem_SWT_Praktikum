import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import { Col, Card } from "react-materialize";
class userInfos extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }
  submit() {
    // this.props.Order({
    //   orders: this.props.orders.array,
    //   userInfos: this.props.userInfos
    // });
  }
  render() {
    if (this.props.userInfos && this.props.korb) {
      return (
        <div>
          <h3>Please Check if these Informations are correct</h3>
          <br />

          <Card
            className="blue-grey darken-1"
            textClassName="white-text"
            title="Documents"
          >
            {this.props.korb.arr.map(book => {
              return <h6 key={book.dokumentid}>{book.titel}</h6>;
            })}
          </Card>
          <br />
          <h3>userInfos: </h3>
          <Col m={6} s={12}>
            <Card
              className="blue-grey darken-1"
              textClassName="white-text"
              title="User Infos"
            >
              <h6>First Name : {this.props.userInfos.vorname}</h6>
              <h6>Last Name : {this.props.userInfos.nachname}</h6>
              <h6>Email : {this.props.userInfos.email}</h6>
              <h6>Street : {this.props.userInfos.strasse}</h6>
              <h6>House Number : {this.props.userInfos.hausnummer}</h6>
              <h6>Postcode : {this.props.userInfos.plz}</h6>
              <h6>City : {this.props.userInfos.stadt}</h6>
            </Card>
          </Col>
        </div>
      );
    }
    return <div>No Informations</div>;
  }
}

function mapDispatchToPros(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
  return {
    //orders: state.orders,
    userInfos: state.userInfos,
    korb: state.korb
  };
}

export default connect(mapStateToProps, mapDispatchToPros)(userInfos);
