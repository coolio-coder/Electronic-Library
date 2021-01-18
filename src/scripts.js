var myLibrary = [];

const book1 = new Books('Harry Potter', 'Jk Rowling', 636, 'adventure', 'read');
const book2 = new Books('A Song of Ice and Fire', 'George R. R. Martin', 694, 'adventure' ,'not read');
const book3 = new Books('Eragon', 'Christopher Paolini', 509, 'adventure' ,'read');

function Books (title, author, page, genre, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.genre = genre;
  this.read = read;

  //This method will add a book to the library
  this.addToLibrary = function () {
    myLibrary.push(this)
    console.log(myLibrary);
  }

  //This method will remove a book based on the location of the book
  this.removeBook = function () {
    myLibrary.splice((myLibrary.indexOf(this)),1)
    console.log(myLibrary);
  }

  this.aboutBook = function () {
    console.log( `I have ${readState[0].haveRead} ${titleVal}, which is written by ${authorVal}. It has ${pageVal} pages and is considered a ${genreVal} book`);
  }
}

/********************************************ADD BOOK BUTTON***********************************/

function changeSlider() {
  document.querySelector('.slider').style.transform = 'translateX(26px)';
  document.querySelector('.slider').style.webkitTransform = 'translateX(26px)';
  document.querySelector('.slider').style.msTransform = 'translateX(26px)';
  
  document.querySelector('.slider').style.backgroundColor = 'red';

}


// Add to Library //
function getInputVal () {
  var titleVal = document.getElementById('title').value,
      authorVal = document.getElementById('author').value,
      pageVal = document.getElementById('page').value,
      genreVal = document.getElementById('Genre').value;
  //Function to add a div that 

  if(titleVal, authorVal, pageVal === '') {
    alert('Please fill out the required information.')
  } else {
    myLibrary.push(new Books(titleVal, authorVal, pageVal, genreVal, readState[0]))
    addTriangle();
    //Close modal
    modal.style.display = "none";
  }

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('page').value = '';
  document.getElementById('Genre').value = '';

  readState[0] = 'not read';
}

//Function used to determine the read/unread position of the toggle button
var readState = [], sliderPosition = new Object();
readState.push(sliderPosition.haveRead = 'not read');
function haveReadState () {
  return (readState[0] === 'not read') ? readState[0] = 'read' : readState[0] = 'not read';
}


// Add Book frame
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
  if (triangleInfo.length === 0 || triangleInfo[0].isUp === false) {
    addTriangleUp();
    //Set the position of the triangle to be true then push onto the array
    trianglePosition.isUp = true;
    triangleInfo.push(trianglePosition);
  } else {
    addTriangleDown();
    //Set the position of the triangle to be false
    trianglePosition.isUp = false;
  }
  //Add triangle up or down
  //Update the triangle array
}

//Add Bookcover

// function addBookCover () {
//   const div = document.createElement('div');
//   div.className = 'bookcover';
//   document.getElementById('')
// }

//Add Genre

function addGenre () {
  const div = document.createElement('div');
  const p = document.createElement('p');
  //Create new Genre
  div.className = 'genre';
  //Add new Genre to the main body
  document.getElementById('bookshelf').appendChild(div);
  console.log('hello')
}

/*****
 * OPEN MODAL BUTTON
 */

var modal = document.getElementById('myModal');
var btn = document.getElementById('openModal');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  window.addEventListener('scroll', noScroll);
}
span.onclick = function() {
  modal.style.display = "none";
  window.removeEventListener('scroll', noScroll);
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.removeEventListener('scroll', noScroll);
  }
}

//Prevent Scrolling when you open up your modal

function noScroll () {
  window.scrollTo(0,1200);
}
