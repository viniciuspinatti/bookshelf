// Add a new book
export const ADD_BOOK = (state, payload) => {
  state.allBooks.push(payload);
};

// Set lend state to a book
export const LEND_BOOK = (state, payload) => {
  state.allBooks.forEach((book, index) => {
    if (book.id == payload.id) {
      state.allBooks[index] = payload;
    }
  });
};
