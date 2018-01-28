import React, { Component } from "react";
import { Input, Icon, Button, Row, Col } from "react-materialize";
import { Zoom } from "react-reveal";
import validator from "validator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect, Link } from "react-router-dom";
import * as actions from "../../actions/index";
import Step2 from "./Step2";
class Step1 extends Component {
  constructor() {
    super();
    this.state = {
      vorname: "",
      nachname: "",
      strasse: "",
      hausnummer: "",
      plz: "",
      stadt: "",
      email: "",
      grund: "",
      redirect: false
    };
    this.handelVorname = this.handelVorname.bind(this);
    this.handelNachname = this.handelNachname.bind(this);
    this.handelStrasse = this.handelStrasse.bind(this);
    this.handelHausnummer = this.handelHausnummer.bind(this);
    this.handelPlz = this.handelPlz.bind(this);
    this.handelStadt = this.handelStadt.bind(this);
    this.handelEmail = this.handelEmail.bind(this);
    this.handelGrund = this.handelGrund.bind(this);
    this.submit = this.submit.bind(this);
    this.delete = this.delete.bind(this);
  }
  handelVorname(e) {
    this.setState({ vorname: e.target.value });
  }
  handelNachname(e) {
    this.setState({ nachname: e.target.value });
  }
  handelEmail(e) {
    this.setState({ email: e.target.value });
  }
  handelStrasse(e) {
    this.setState({ strasse: e.target.value });
  }
  handelHausnummer(e) {
    this.setState({ hausnummer: e.target.value });
  }
  handelPlz(e) {
    this.setState({ plz: e.target.value });
  }
  handelStadt(e) {
    this.setState({ stadt: e.target.value });
  }
  handelGrund(e) {
    this.setState({ grund: e.target.value });
  }
  async submit(e) {
    e.preventDefault();
    if (
      this.state.vorname !== "" &&
      this.state.nachname !== "" &&
      this.state.email !== "" &&
      this.state.strasse !== "" &&
      this.state.hausnummer !== "" &&
      this.state.plz !== "" &&
      this.state.stadt !== ""
    ) {
      if (!validator.isEmail(this.state.email)) {
        return alert("Please write a correct Email");
      } else if (!validator.isInt(this.state.hausnummer)) {
        return alert("Please write a correct House Number");
      } else if (!validator.isInt(this.state.plz)) {
        return alert("Please write a correct Postcode");
      } else {
        await this.props.SaveUserInfos(this.state);
        console.log("submit");
        this.setState({ redirect: true });
      }
    } else alert("Please write down all your Informations");
  }
  delete() {
    this.setState({
      vorname: "",
      nachname: "",
      strasse: "",
      plz: "",
      stadt: "",
      hausnummer: "",
      email: ""
    });
  }
  async componentDidMount() {
    if (this.props.userInfos) {
      await this.setState({
        vorname: this.props.userInfos.vorname,
        nachname: this.props.userInfos.nachname,
        strasse: this.props.userInfos.strasse,
        plz: this.props.userInfos.plz,
        stadt: this.props.userInfos.stadt,
        hausnummer: this.props.userInfos.hausnummer,
        email: this.props.userInfos.email
      });
    }
  }
  render() {
    if (this.state.redirect) {
      return (
        <div>
          <Redirect to="/confirmation" />
        </div>
      );
    }
    return (
      <div className="loginContainer ">
        {/* <Zoom> */}
        <div className="loginFormContainer center-align">
          <form onSubmit={this.submit}>
            <Row>
              <Input
                s={12}
                l={6}
                label={this.state.vorname === "" ? " First Name*" : ""}
                validate
                onChange={this.handelVorname}
                value={this.state.vorname}
              >
                <Icon>account_circle</Icon>
              </Input>
              <Input
                s={12}
                l={6}
                label={this.state.nachname === "" ? " Last Name*" : ""}
                validate
                onChange={this.handelNachname}
                value={this.state.nachname}
              >
                <Icon>account_circle</Icon>
              </Input>
              <Input
                s={12}
                label={this.state.email === "" ? " Email*" : ""}
                onChange={this.handelEmail}
                value={this.state.email}
              >
                <Icon>email</Icon>
              </Input>
              <Input
                s={12}
                l={6}
                label={this.state.strasse === "" ? " Street*" : ""}
                onChange={this.handelStrasse}
                value={this.state.strasse}
              >
                <Icon>home</Icon>
              </Input>
              <Input
                s={12}
                l={6}
                label={this.state.hausnummer === "" ? " House Number*" : ""}
                onChange={this.handelHausnummer}
                value={this.state.hausnummer}
              >
                <Icon>home</Icon>
              </Input>
              <Input
                s={12}
                label={this.state.plz === "" ? " Zip Code*" : ""}
                onChange={this.handelPlz}
                value={this.state.plz}
              >
                <Icon>gps_fixed</Icon>
              </Input>
              <Input
                s={12}
                label={this.state.stadt === "" ? " City*" : ""}
                onChange={this.handelStadt}
                value={this.state.stadt}
              >
                <Icon>location_city</Icon>
              </Input>
            </Row>
            <Row id="submitForm">
              <Button
                waves="light"
                id="submitBtn"
                className="red center"
                type="submit"
              >
                Submit<Icon right>done</Icon>
              </Button>
              <Button
                waves="light"
                id="deleteBtn"
                className="red center"
                onClick={this.delete}
              >
                Delete<Icon right>delete</Icon>
              </Button>
              <Link to="/cart" className="btn red">
                Previous
              </Link>
            </Row>
          </form>
        </div>
        {/* </Zoom> */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    books: state.book,
    search: state.search,
    userInfos: state.userInfos
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Step1);
