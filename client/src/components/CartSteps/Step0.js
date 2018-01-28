import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { Link } from 'react-router-dom';
class Step0 extends Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
    this.state = { korb: null };
  }
  componentDidMount() {
    this.setState({ korb: this.props.korb });
  }
  componentWillReceiveProps(newKorb) {
    this.setState({ korb: newKorb });
  }
  delete(element) {
    this.props.DeleteFromKorb(element);
  }
  render() {
    console.log(this.props.korb);
    if (this.props.korb.arr.length === 0) {
      return (
        <div className="center">
          <h5>You have no Orders yet</h5>
        </div>
      );
    }

    return (
      <div className="orderContainer">
        <ul className="collection with-header">
          {this.props.korb.arr.map(element => {
            return (
              <li key={element.dokumentid} className="collection-item">
                {element.titel}
                <a
                  style={{ cursor: 'pointer' }}
                  className="secondary-content"
                  onClick={this.delete.bind(null, element)}
                >
                  <i className="material-icons">delete</i>
                </a>
              </li>
            );
          })}
        </ul>
        <Link to="/step1" className="btn red">
          Next
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { korb: state.korb };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Step0);
