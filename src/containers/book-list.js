import React, { Component } from 'react';
import { connect } from 'react-redux';

//A container is just a component that has access to the state via Redux
class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  //Whatever is return will shop up as props inside of BookList
  //We are returning an object in this
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
