import React, { Component } from 'react';
import { Input } from 'react-materialize';
import { Col, Row } from 'react-grid-system';
class ExtendedSearch extends Component {
  constructor() {
    super();
    this.state = { selection: 'Title' };
    this.changeSelection = this.changeSelection.bind(this);
  }

  changeSelection(e) {
    this.setState({ selection: e.target.value });
  }
  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={12} md={8} lg={8}>
            <h4>Search Results</h4>
          </Col>
          <Col s={12} m={12} md={4} lg={4}>
            <div>
              <h5>Searching By : {this.state.selection}</h5>
              <Input label={this.state.selection} />
              <Input
                type="checkbox"
                onChange={this.changeSelection}
                value="Title"
                label="Title"
                defaultChecked="checked"
              />
              <Input
                type="checkbox"
                onChange={this.changeSelection}
                value="Author"
                label="Author"
              />
              <Input
                type="checkbox"
                onChange={this.changeSelection}
                value="Thema"
                label="Thema"
              />

              <h5>Search By Release Date</h5>
              <Input type="date" label="From" />
              <Input type="date" label="To" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ExtendedSearch;
