import * as header from './elements.js';
import {books} from '../index.js'; // eslint-disable-line

// Create a Book Class
export default class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  // Method to load added Books
  static addBooks(i) {
    header.library.innerHTML += `<div class="each-book">
    <div class="book-name">${books[i].name}<strong>&nbsp;by&nbsp;</strong></div>
    <div class="book-author">${books[i].author}</div>
    <button class="button">Remove</button>
    </div>`;
  }

  // Method to Refresh Page
  static refreshBook() {
    header.library.innerHTML = '';
    for (let i = 0; i < books.length; i++) { // eslint-disable-line
      header.library.innerHTML += `<div class="each-book">
    <div class="book-name">${books[i].name}<strong>&nbsp;by&nbsp;</strong></div>
    <div class="book-author">${books[i].author}</div>
    <button class="button">Remove</button>
    </div>`;
    }
  }
}
