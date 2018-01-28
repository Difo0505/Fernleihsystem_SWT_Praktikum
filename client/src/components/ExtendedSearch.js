import React, { Component } from "react";
import {
  Input,
  Collection,
  CollectionItem,
  Icon,
  Collapsible,
  CollapsibleItem,
  Button
} from "react-materialize";
import { Col, Row } from "react-grid-system";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
class ExtendedSearch extends Component {
  constructor() {
    super();
    this.state = { selection: "Title", results: null };
    this.changeSelection = this.changeSelection.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.saveSelectedSearch = this.saveSelectedSearch.bind(this);
    this.displayResults = this.displayResults.bind(this);
    this.addToCorb = this.addToCorb.bind(this);
  }

  async addToCorb(book) {
    console.log(book);
    await this.props.PostToKorb(book);
    toast.error("Added !", { position: toast.POSITION.BOTTOM_RIGHT });
  }

  handleTextChange(e) {
    console.log(e.target);
    if (e.target.value !== "") {
      if (this.state.selection === "Author") {
        this.props.FetchSearchByAuthor({ value: e.target.value });
      } else {
        this.props.FetchSearchByTitle({ value: e.target.value });
      }
    } else if (e === "") {
      this.setState({ results: null });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!this.state.results && nextProps.search) {
      this.setState({ results: nextProps.search });
    } else if (
      this.state.results &&
      JSON.stringify(this.state.results) !== JSON.stringify(nextProps.search)
    ) {
      this.setState({ results: nextProps.search });
    }
  }

  saveSelectedSearch(result) {
    this.props.SaveSelectedSearch(result);
  }
  displayResults() {
    var i = 0;
    if (this.state.results) {
      console.log(this.state.results);
      if (this.state.selection === "Author") {
        var i = 0;
        return (
          <div>
            {" "}
            <h5>{this.state.results.length} documents found:</h5>
            <Collapsible>
              {this.state.results.map(result => {
                return (
                  <CollapsibleItem header={<div>{result.autor}</div>} key={i++}>
                    Autor: {result.autor}
                    <br />
                    Book: {result.titel}
                    <br />
                    Year: {result.jahr}
                    <br />
                    <Button
                      className="btn-floating red"
                      onClick={this.addToCorb.bind(null, result)}
                    >
                      <Icon>add</Icon>
                    </Button>
                  </CollapsibleItem>
                );
              })}
            </Collapsible>
          </div>
        );
      } else if (this.state.selection === "Title") {
        var i = 0;
        return (
          <div>
            {" "}
            <h5>{this.state.results.length} documents found:</h5>{" "}
            <Collapsible>
              {this.state.results.map(result => {
                return (
                  <CollapsibleItem header={<div>{result.titel}</div>} key={i++}>
                    Book: {result.titel}
                    <br />
                    Autor :{result.autor}
                    <br />
                    Year: {result.jahr}
                    <br />
                    <Button
                      onClick={this.addToCorb.bind(null, result)}
                      className="btn-floating red"
                    >
                      <Icon>add</Icon>
                    </Button>
                  </CollapsibleItem>
                );
              })}
            </Collapsible>
          </div>
        );
      }
    }
  }

  changeSelection(e) {
    this.setState({ selection: e.target.value });
  }
  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={12} md={4} lg={4} className="searching">
            <div className="srch">
              <h5>Searching By : {this.state.selection}</h5>
              <Input
                label={this.state.selection}
                onChange={this.handleTextChange}
              />
              <Input
                type="radio"
                name="search"
                onChange={this.changeSelection}
                value="Title"
                label="Title"
                defaultChecked="checked"
              />
              <Input
                type="radio"
                name="search"
                onChange={this.changeSelection}
                value="Author"
                label="Author"
              />
            </div>
          </Col>
          <Col s={12} m={12} md={8} lg={8}>
            <h4>Search Results</h4>
            {this.displayResults()}
          </Col>
        </Row>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.book,
    search: state.search
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ExtendedSearch);
