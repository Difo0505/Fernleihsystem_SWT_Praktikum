import React, { Component } from "react";
import { Input, Collection, CollectionItem } from "react-materialize";
import { Col, Row } from "react-grid-system";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";
class ExtendedSearch extends Component {
  constructor() {
    super();
    this.state = { selection: "Title", results: null };
    this.changeSelection = this.changeSelection.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.saveSelectedSearch = this.saveSelectedSearch.bind(this);
    this.displayResults = this.displayResults.bind(this);
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
      if (this.state.selection === "Author") {
        return (
          <Collection>
            {this.state.results.map(result => {
              return (
                <CollectionItem
                  onClick={this.saveSelectedSearch.bind(null, result)}
                  key={i++}
                >
                  {result.autor.toUpperCase()}
                </CollectionItem>
              );
            })}
          </Collection>
        );
      } else if (this.state.selection === "Title") {
        return (
          <Collection>
            {this.state.results.map(result => {
              return (
                <CollectionItem
                  onClick={this.saveSelectedSearch.bind(null, result)}
                >
                  {result.titel.toUpperCase()}
                </CollectionItem>
              );
            })}
          </Collection>
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
          <Col s={12} m={12} md={8} lg={8}>
            <h4>Search Results</h4>
            {this.displayResults()}
          </Col>
          <Col s={12} m={12} md={4} lg={4}>
            <div>
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
        </Row>
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
