import { combineReducers } from 'redux';
import BooksReducer from './books.js';
import ActiveBook from './active_book.js';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducer,
  //remember that any key in combineReducers is a key in the global state
  activeBook: ActiveBook
});

export default rootReducer;
