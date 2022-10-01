import Book from './modules/bookclass.js'; /* eslint-disable-line*/
import * as elements from './modules/elements.js';
import { DateTime } from './modules/luxon.min.js';
import * as navigation from './modules/navigation.js';

// Create Book Array
const books = [];

// Collect Stored data from Local Storage
const store = JSON.parse(localStorage.getItem('books'));

// Push store into books if store has data
if (store) {
  books.push(...store);
  Book.refreshBook();
}

// Event Listener to Add Books
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', (e) => { /* eslint-disable-line*/
  e.preventDefault();

  if (elements.bookName.value === '' && elements.bookAuthor.value === '') {
    return false;
	} else { /* eslint-disable-line*/
    const nValue = elements.bookName.value;
    const aValue = elements.bookAuthor.value;
    const libro = new Book(nValue, aValue);

    // Push Libro to books
    books.push(libro);
    localStorage.setItem('books', JSON.stringify(books));
    Book.addBooks(books.length - 1);
  }
});

export { books }; // eslint-disable-line

// Remove book from list
elements.library.addEventListener('click', (e) => {
  if (e.target.classList.contains('button')) {
    const bookCard = e.target.parentElement;
    elements.library.removeChild(bookCard);
    const bookIndex = books.findIndex(
      (book) => book.title === bookCard.querySelector('.book-name').innerText,
    );
    books.splice(bookIndex, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
});

// Display Time
const dateNow = DateTime.now();
elements.sayTime.textContent = `${dateNow.toLocaleString(DateTime.DATETIME_MED)}`;

// Event Listener for list
navigation.list.addEventListener('click', navigation.showList);

// Event Listener for add
navigation.add.addEventListener('click', navigation.showBooks);

// Event Listener for contact
navigation.contact.addEventListener('click', navigation.showContactUs);
