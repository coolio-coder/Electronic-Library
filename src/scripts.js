var myLibrary = [];

const book1 = new books('Harry Potter', 'Jk Rowling', 636, 'read');
const book2 = new books('A Song of Ice and Fire', 'George R. R. Martin', 694, 'not read');
const book3 = new books('Eragon', 'Christopher Paolini', 509, 'read');

function books (title, author, page, read) {
  this.title = title;
  this.author = author; 
  this.page = page;
  this.read = read;

  //This method will add a book to the library
  this.addBook = function () {
    myLibrary.push(this)
    console.log(myLibrary);
  }
  
  //This method will remove a book based on the location of the book
  this.removeBook = function () {
    myLibrary.splice((myLibrary.indexOf(this)),1)
    console.log(myLibrary);
  }
}

book1.addBook();
book2.addBook();
book3.addBook();




function addTriangleUp() {
  const div = document.createElement('div');
  div.className = 'triangle-up';
  document.getElementById('hey').appendChild(div);
}

function addTriangleDown() {
  const div = document.createElement('div');
  div.className = 'triangle-down';
  document.getElementById('hey').appendChild(div);
}