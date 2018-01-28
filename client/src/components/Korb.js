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
    //  this.next = this.next.bind(this);
    //this.previous = this.previous.bind(this);
    //  this.buttons = this.buttons.bind(this);
  }

  // previous() {
  //   if (this.state.step > 0) {
  //     this.setState({ step: this.state.step - 1 });
  //     this.props.changeStep(this.state.step - 1);
  //   }
  // }
  // next() {
  //   if (this.state.step < 3) {
  //     this.setState({ step: this.state.step + 1 });
  //     this.props.changeStep(this.state.step + 1);
  //   }
  // }
  // buttons() {
  //   if (this.state.step === 0) {
  //     return (
  //       <div className="stepperButtons">
  //         <Button
  //           waves="light"
  //           className="btn-floating red disabled"
  //           onClick={this.previous}
  //         >
  //           <Icon>chevron_left</Icon>
  //         </Button>
  //         <Button
  //           waves="light"
  //           className="btn-floating red"
  //           onClick={this.next}
  //         >
  //           <Icon>chevron_right</Icon>
  //         </Button>
  //       </div>
  //     );
  //   }
  //   return (
  //     <div className="stepperButtons">
  //       <Button
  //         waves="light"
  //         className="btn-floating red"
  //         onClick={this.previous}
  //       >
  //         <Icon>chevron_left</Icon>
  //       </Button>
  //       <Button waves="light" className="btn-floating red" onClick={this.next}>
  //         <Icon>chevron_right</Icon>
  //       </Button>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <Step0 />
      </div>
    );
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
