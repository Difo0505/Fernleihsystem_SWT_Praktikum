import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";
import { Link } from "react-router-dom";
import { Icon, Button } from "react-materialize";
import Stepper from "react-stepper-horizontal";
import Step0 from "./CartSteps/Step0";
import Step1 from "./CartSteps/Step1";
import Step2 from "./CartSteps/Step2";
import Step3 from "./CartSteps/Step3";
class KorbContainer extends Component {
  constructor() {
    super();
    this.state = { step: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.buttons = this.buttons.bind(this);
  }

  previous() {
    if (this.state.step > 0) {
      this.props.changeStep(this.state.step - 1);
      //  this.setState({ step: this.props.step});
    }
  }
  next() {
    if (this.state.step < 3) {
      this.props.changeStep(this.state.step + 1);
      //  this.setState({ step: this.props.step});
    }
  }
  buttons() {
    if (this.state.step === 0) {
      return (
        <div className="stepperButtons">
          <Button
            waves="light"
            className="btn-floating red disabled"
            onClick={this.previous}
          >
            <Icon>chevron_left</Icon>
          </Button>
          <Button
            waves="light"
            className="btn-floating red"
            onClick={this.next}
          >
            <Icon>chevron_right</Icon>
          </Button>
        </div>
      );
    }
    return (
      <div className="stepperButtons">
        <Button
          waves="light"
          className="btn-floating red"
          onClick={this.previous}
        >
          <Icon>chevron_left</Icon>
        </Button>
        <Button waves="light" className="btn-floating red" onClick={this.next}>
          <Icon>chevron_right</Icon>
        </Button>
      </div>
    );
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.step !== this.state.step) {
      console.log(nextProps.step);
      this.setState({ step: nextProps.step });
    }
  }
  componentDidMount() {
    this.props.changeStep(0);
  }
  render() {
    switch (this.state.step) {
      case 0:
        return (
          <div>
            <div>
              <Stepper
                steps={[
                  { title: "Orders Check" },
                  { title: "Address" },
                  { title: "Last Check" },
                  { title: "Done !" }
                ]}
                activeStep={this.state.step}
                activeColor="#F44336"
                completeColor="#8BC34A"
                activeTitleColor="#F44336"
                completeTitleColor="#8BC34A"
                size={36}
                circleFontSize={18}
              />
            </div>
            {this.buttons()}
            <Step0 />
          </div>
        );
        break;
      case 1:
        return (
          <div>
            <Stepper
              steps={[
                { title: "Orders Check" },
                { title: "Address" },
                { title: "Last Check" },
                { title: "Done !" }
              ]}
              activeStep={this.state.step}
              activeColor="#F44336"
              completeColor="#8BC34A"
              activeTitleColor="#F44336"
              completeTitleColor="#8BC34A"
              size={36}
              circleFontSize={18}
            />
            {this.buttons()}
            <Step1 />
          </div>
        );
        break;
      case 2:
        return (
          <div>
            <div>
              <Stepper
                steps={[
                  { title: "Orders Check" },
                  { title: "Address" },
                  { title: "Last Check" },
                  { title: "Done !" }
                ]}
                activeStep={this.state.step}
                activeColor="#F44336"
                completeColor="#8BC34A"
                activeTitleColor="#F44336"
                completeTitleColor="#8BC34A"
                size={36}
                circleFontSize={18}
              />
            </div>
            {this.buttons()}
            <Step2 />
          </div>
        );
        break;
      case 3:
        return (
          <div>
            <div>
              <Stepper
                steps={[
                  { title: "Orders Check" },
                  { title: "Address" },
                  { title: "Last Check" },
                  { title: "Done !" }
                ]}
                activeStep={this.state.step}
                activeColor="#F44336"
                completeColor="#8BC34A"
                activeTitleColor="#F44336"
                completeTitleColor="#8BC34A"
                size={36}
                circleFontSize={18}
              />
            </div>
            {this.buttons()}
            <Step3 />
          </div>
        );
        break;
    }
  }
}
function mapStateToProps(state) {
  return {
    korb: state.korb,
    step: state.step
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(KorbContainer);
