import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Col, Card } from 'react-materialize';
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

          <div id="checkDocumentContainer">
            <h3>Documents</h3>
            {this.props.korb.arr.map(book => {
              return (
                <div key={book.dokumentid} id="checkDocumentElement">
                  <h6>{book.titel}</h6>
                </div>
              );
            })}
          </div>
          <br />

          <Col m={6} s={12}>
            <div id="checkUserInfosContainer">
              <h3>User Informations</h3>
              <div className="checkUserInfosElement">
                <h6>First Name : {this.props.userInfos.vorname}</h6>
              </div>
              <div>
                <div className="checkUserInfosElement">
                  <h6>Last Name : {this.props.userInfos.nachname}</h6>
                </div>
              </div>
              <div className="checkUserInfosElement">
                <h6>Email : {this.props.userInfos.email}</h6>
              </div>
              <div className="checkUserInfosElement">
                <h6>Street : {this.props.userInfos.strasse}</h6>
              </div>
              <div className="checkUserInfosElement">
                <h6>House Number : {this.props.userInfos.hausnummer}</h6>
              </div>
              <div className="checkUserInfosElement">
                <h6>Postcode : {this.props.userInfos.plz}</h6>
              </div>
              <div className="checkUserInfosElement">
                <h6>City : {this.props.userInfos.stadt}</h6>
              </div>
            </div>
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
