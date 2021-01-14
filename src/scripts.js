var myLibrary = [];

const book1 = new Books('Harry Potter', 'Jk Rowling', 636, 'read');
const book2 = new Books('A Song of Ice and Fire', 'George R. R. Martin', 694, 'not read');
const book3 = new Books('Eragon', 'Christopher Paolini', 509, 'read');

function Books (title, author, page, read) {
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

/***************
 * ADD BOOK BUTTON
 */

var triangleInfo = []
var trianglePosition = new Object();

function addTriangleUp() {
  const div = document.createElement('div');
  div.className = 'triangle up';
  document.getElementById('unsorted').appendChild(div);
}

function addTriangleDown() {
  const div = document.createElement('div');
  div.className = 'triangle down';
  document.getElementById('unsorted').appendChild(div);
}

function addTriangle () {
  //Use triangle array to detect the triangle position
  if (triangleInfo.length === 0) {
    addTriangleUp();
    //Set the position of the triangle to be true then push onto the array
    trianglePosition.isUp = true;
    triangleInfo.push(trianglePosition);
  } else if (triangleInfo[0]['isUp'] === true) {
    addTriangleDown();
    //Set the position of the triangle to be false
    trianglePosition.isUp = false;
  } else {
    addTriangleUp();
    trianglePosition.isUp = true;
  }
  //Add triangle up or down
  //Update the triangle array
}

/*****
 * OPEN MODAL BUTTON
 */

var modal = document.getElementById('myModal');
var btn = document.getElementById('openModal');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}