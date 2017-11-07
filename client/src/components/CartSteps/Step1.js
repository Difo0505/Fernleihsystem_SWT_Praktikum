import React, { Component } from 'react';
import { Input, Icon, Button, Row, Col } from 'react-materialize';
import { Zoom } from 'react-reveal';

class Step1 extends Component {
  render() {
    return (
      <div className="loginContainer ">
        {/* <Zoom> */}
        <div className="loginFormContainer center-align">
          <Row>
            <Input s={12} l={6} label=" Name" validate>
              <Icon>account_circle</Icon>
            </Input>
            <Input s={12} l={6} label="Telephone" validate type="tel">
              <Icon>phone</Icon>
            </Input>
            <Input s={12} label="Email">
              <Icon>email</Icon>
            </Input>
            <Input s={12} l={6} label="Address">
              <Icon>home</Icon>
            </Input>
            <Input s={12} l={6} label="City">
              <Icon>location_city</Icon>
            </Input>
            <Input s={12} label="Email">
              <Icon>email</Icon>
            </Input>
            <Input s={12} label="Profession">
              <Icon>work</Icon>
            </Input>
          </Row>
          <Row id="submitForm">
            <Button waves="light" id="submitBtn" className="red center">
              Submit<Icon right>done</Icon>
            </Button>
            <Button waves="light" id="deleteBtn" className="red center">
              Delete<Icon right>delete</Icon>
            </Button>
          </Row>
        </div>
        {/* </Zoom> */}
      </div>
    );
  }
}

export default Step1;
