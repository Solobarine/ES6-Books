// Select Nav contents
export const nav = document.querySelector('#nav-bar');
export const list = document.getElementById('list');
export const add = document.getElementById('add');
export const contact = document.getElementById('contact');

// Select Sections
const listSection = document.querySelector('#book-list');
const addBookSection = document.querySelector('.add-books');
const contactSection = document.querySelector('#contact-us');

// Create Display Functions

// Show Only List of Books page
export const showList = () => {
  listSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
}

// Show Only Add Books page
export const showBooks = () =>  {
  listSection.style.display = 'none';
  addBookSection.style.display = 'block';
  contactSection.style.display = 'none';
}

// Show Contact Us page
export const showContactUs = () => {
  listSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
}
