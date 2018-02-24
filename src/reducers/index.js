import { combineReducers } from 'redux';
import BooksReducer from './books.js';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducer
});

export default rootReducer;
