import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import SearchHome from './SearchHome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as actions from '../actions/index';
import {
  Input,
  Icon,
  Collapsible,
  CollapsibleItem,
  Pagination
} from 'react-materialize';

class Collection extends Component {
  constructor() {
    super();
    this.addToCorb = this.addToCorb.bind(this);
  }
  addToCorb(book) {
    this.props.PostToKorb(book);
    toast.error('Added !', { position: toast.POSITION.BOTTOM_RIGHT });
  }
  async componentWillMount() {
    await this.props.FetchBook();
  }
  render() {
    if (this.props.books) {
      return (
        <div>
          <div style={{ padding: '50px' }}>
            <Collapsible>
              {this.props.books.map(book => {
                return (
                  <CollapsibleItem
                    className="booksCollection truncate"
                    key={book.id}
                    header={book.text}
                    icon="arrow_drop_down"
                  >
                    Year : {book.year}
                    <button
                      className="btn-floating red waves-effect waves-light"
                      style={{ marginLeft: '20px' }}
                      onClick={this.addToCorb.bind(null, book)}
                    >
                      <i className="material-icons">add</i>
                    </button>
                  </CollapsibleItem>
                );
              })}
            </Collapsible>
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
