var myLibrary = [];

const book1 = new books('Harry Potter', 'Jk Rowling', 502, 'read');
const book2 = new books('GOT', 'Tokien', 402, 'not read');
const book3 = new books('Eragon', 'Chris', 422, 'read');

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




function addTriangle() {
  const div = document.createElement('div');
  div.className = 'triangle-up';
  document.getElementById('hey').appendChild(div);
}