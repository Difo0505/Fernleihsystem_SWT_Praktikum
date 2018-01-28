import React, { Component } from "react";
import { Row, Col } from "react-grid-system";
import SearchHome from "./SearchHome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import * as actions from "../actions/index";
import {
  Input,
  Icon,
  Collapsible,
  CollapsibleItem,
  Pagination,
  Card
} from "react-materialize";

class Collection extends Component {
  constructor() {
    super();
    this.state = {
      sortBy: "Alphabetical Order",
      books: null
    };
    this.addToCorb = this.addToCorb.bind(this);
    this.changeSortBy = this.changeSortBy.bind(this);
  }
  async changeSortBy(e) {
    var item = e.target.value;
    await this.setState({ sortBy: e.target.value });
    if (item === "Alphabetical Order") {
      this.props.FetchBook();
    }
    if (item === "Publishing Year Ascending") {
      this.props.FetchBooksYearAsc();
    }
    if (item === "Publishing Year Descending") {
      this.props.FetchBooksYearDesc();
    }
  }
  addToCorb(book) {
    this.props.PostToKorb(book);
    toast.error("Added !", { position: toast.POSITION.BOTTOM_RIGHT });
  }
  async componentWillMount() {
    await this.props.FetchBook();
  }
  componentWillReceiveProps(nextProps) {
    if (!this.state.books && nextProps.books) {
      this.setState({ books: nextProps.books });
    } else if (
      this.state.books &&
      JSON.stringify(this.state.books) !== JSON.stringify(nextProps.books)
    ) {
      this.setState({ books: nextProps.books });
    }
  }
  render() {
    if (this.state.books) {
      var key = 0;
      return (
        <div>
          <Col m={6} s={12} className="sort">
            <Card
              className="blue-grey darken-1"
              textClassName="white-text"
              title="Sort By:"
            >
              <Input
                name="group1"
                type="radio"
                value="Publishing Year Ascending"
                label="Publishing Year Ascending"
                onChange={this.changeSortBy}
                className="input1"
              />
              <Input
                name="group1"
                type="radio"
                value="Publishing Year Descending"
                label="Publishing Year Descending"
                onChange={this.changeSortBy}
              />
              <Input
                name="group1"
                type="radio"
                value="Alphabetical Order"
                label="Alphabetical Order"
                onChange={this.changeSortBy}
              />
            </Card>
          </Col>

          <div className="books">
            <Collapsible>
              {this.state.books.map(book => {
                return (
                  <CollapsibleItem
                    className="booksCollection truncate"
                    key={key++}
                    header={book.titel}
                    icon="arrow_drop_down"
                  >
                    <p>
                      <h5>Author :</h5> {book.autor}
                    </p>
                    <div>
                      <h5 style={{ display: "inline" }}>Publishing Year :</h5>
                      {book.jahr}
                    </div>
                    <button
                      className="btn-floating red waves-effect waves-light"
                      style={{ marginLeft: "20px" }}
                      onClick={this.addToCorb.bind(null, book)}
                    >
                      <i className="material-icons">add</i>
                    </button>
                  </CollapsibleItem>
                );
              })}
            </Collapsible>
            <SearchHome />
          </div>
          <Pagination
            items={3}
            activePage={1}
            maxButtons={8}
            className="center"
          />

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
    return <div>waiting</div>;
  }
}

function mapStateToProps(state) {
  return {
    books: state.book
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Collection);
//export default Collection;
