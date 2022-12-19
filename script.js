'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);



function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list'); 

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);

  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));

    let books = document.querySelector(".book-list");
    if (books){ 
      books.addEventListener("mouseover", function(e) {
          if (e.target && e.target.matches("li.book-list__item")) {
              let bookId = e.target.value
              let book = bookList.find(book => book.id === bookId)
              bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', bookDetails(book));
          }
      });
    
    
      /*rutan försvinner när muspekaren är out*/
      books.addEventListener("mouseout", function(e) { 
          let bookDetail = document.querySelector("#bookDetail");
          if(bookDetail)
              bookDetail.remove();
      });
    }


}
