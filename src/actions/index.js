export function selectBook(book) {
  // console.log('A book has been selected:', book.title);
  // selectBook is an ActionCreators, it needs to return an action,
  //an object with a type property.
  //An action always contains a type and sometimes (most of the times)
  //contains a payload.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
