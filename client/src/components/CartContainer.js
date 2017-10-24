import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'react-materialize';
import Stepper from 'react-stepper-horizontal';
import Step0 from './CartSteps/Step0';
import Step1 from './CartSteps/Step1';
import Step2 from './CartSteps/Step2';
import Step3 from './CartSteps/Step3';
class CartContainer extends Component {
  constructor() {
    super();
    this.state = { step: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.buttons = this.buttons.bind(this);
  }
  previous() {
    if (this.state.step > 0) {
      this.setState({ step: this.state.step - 1 });
    }
  }
  next() {
    if (this.state.step < 3) {
      this.setState({ step: this.state.step + 1 });
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

  render() {
    switch (this.state.step) {
      case 0:
        return (
          <div>
            <div>
              <Stepper
                steps={[
                  { title: 'Orders Check' },
                  { title: 'Address' },
                  { title: 'Last Check' },
                  { title: 'Done !' }
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
                { title: 'Orders Check' },
                { title: 'Address' },
                { title: 'Last Check' },
                { title: 'Done !' }
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
                  { title: 'Orders Check' },
                  { title: 'Address' },
                  { title: 'Last Check' },
                  { title: 'Done !' }
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
                  { title: 'Orders Check' },
                  { title: 'Address' },
                  { title: 'Last Check' },
                  { title: 'Done !' }
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

export default CartContainer;
