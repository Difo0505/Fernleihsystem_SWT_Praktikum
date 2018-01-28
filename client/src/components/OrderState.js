import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';
import * as actions from '../actions/index';

class OrderState extends Component {
  constructor() {
    super();
    this.state = { id: '', orderState: null };
    this.onIdChange = this.onIdChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.orderState = this.orderState.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(date) {
    // var temp = date.splite('T');
    // var temp2 = temp[0].split('-');
    // var year = temp2[0];
    // var month = temp2[1];
    // var day = temp2[2];
    // console.log(year, '/', month, '/', day);
    var temp = new Date(date);
    var year = temp.getFullYear();
    var month = temp.getMonth();
    var day = temp.getUTCDate();
    console.log(year, '/', month, '/', day);
    return year + '/' + month + 1 + '/' + day;
  }
  onIdChange(e) {
    this.setState({ id: e.currentTarget.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.GetOrderState(this.state.id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.orderState !== this.state.orderState) {
      console.log('order state wsel', nextProps.orderState);
      this.setState({ orderState: nextProps.orderState });
    }
  }
  orderState() {
    if (this.state.orderState) {
      if (this.state.orderState === 'not found') {
        return <div className="orderState">Sorry Your Order's ID is wrong</div>;
      } else {
        return (
          <div className="orderState">
            <p>Order ID : {this.state.orderState.bestellungid}</p>
            <p>
              Order Date : {this.formatDate(this.state.orderState.bestelldatum)}
            </p>
            <p>Order State : {this.state.orderState.bearbeitungsstatus}</p>
          </div>
        );
      }
    } else {
      return <div />;
    }
  }
  render() {
    return (
      <div className="checkOrderStateContainer">
        <h5>To Check Your Order's State please write down your order's ID</h5>
        <form onSubmit={this.onSubmit}>
          <Input
            type="text"
            label="Order ID"
            value={this.state.id}
            onChange={this.onIdChange}
          />
          <button className="btn  light-blue darken-2" type="Submit">
            Submit
          </button>
        </form>
        {this.orderState()}
      </div>
    );
  }
}

function mapDispatchToPros(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
  return {
    orderState: state.orderState
  };
}

export default connect(mapStateToProps, mapDispatchToPros)(OrderState);
