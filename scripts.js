var myLibrary = [];
const book1 = new Book('Harry Potter', 'Jk Rowling', 636, 'adventure', 'read');
// const book2 = new Book('A Song of Ice and Fire', 'George R. R. Martin', 694, 'adventure' ,'not read');
// const book3 = new Book('Eragon', 'Christopher Paolini', 509, 'adventure' ,'read');


function Book (title, author, page, genre, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.genre = genre;
  this.read = read;
}

Book.prototype.addToLibrary = function () {
  myLibrary.push(this)
  console.log(myLibrary);
}
Book.prototype.removeBook = function () {
  myLibrary.splice((myLibrary.indexOf(this)),1)
  console.log(myLibrary);
}
Book.prototype.aboutBook = function () {
  console.log( `I have ${readState[0].haveRead} ${titleVal}, which is written by ${authorVal}. It has ${pageVal} pages and is considered a ${genreVal} book`);
}

Book.prototype.addToLibrary1 = function () {
  myLibrary.push(this)
  console.log(myLibrary);
}


const capitalize = str => {
  if(str !== '') {
  var str = str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1));
    if (str.length > 1) {
      return str.join(' ');
    } else {return str[0]}
  } return '';
}


/********************************************ADD BOOK BUTTON***********************************/

//Used to test whether a title or author exists already
function findMatchingName(target, myArray) {
  for (var i=0; i<myArray.length;i++) {
    if(myLibrary[i].title.toLowerCase() === target.toLowerCase()) {
      return true;
    }
  }
}

//Color palatte
var color = ['#ff2975', '#ffd319', '#ff901f', '	#f222ff', '	#8c1eff'];
function randomColor() {
  let randomNum = Math.round(Math.random()*5);
  return color[randomNum];
}


//Reset the Slider
function changeSlider() {
  document.querySelector('.slider').style.transform = 'translateX(26px)';
  document.querySelector('.slider').style.webkitTransform = 'translateX(26px)';
  document.querySelector('.slider').style.msTransform = 'translateX(26px)';
  document.querySelector('.slider').style.backgroundColor = 'red';
}

// Add to Library //    
function submitBook () {
  var titleVal = document.getElementById('title').value,
      authorVal = document.getElementById('author').value,
      pageVal = document.getElementById('page').value
      genreVal = document.getElementById('Genre').value;

  //Capitalize all strings
  console.log(genreVal)
  if(titleVal, authorVal, pageVal === '') {
    alert('Please fill out the required information.');
  } else if (findMatchingName(titleVal,myLibrary) === true) {
    alert("You've entered this book already. Please enter another book!");
  } else {
    titleVal = capitalize(titleVal);
    authorVal = capitalize(authorVal);
    genreVal = capitalize(genreVal);
    //Add the book to the library
    myLibrary.push(new Book(titleVal, authorVal, pageVal, genreVal, readState[0]))
    //Based on the genre that user inputs, this conditional will decide where to put the book
    if(genreList.includes(genreVal)) {
      myLibrary[myLibrary.length - 1].appendBook()
    } else if (genreVal === '') {
      myLibrary[myLibrary.length - 1].appendBook()
    } else if (!genreList.includes(genreVal) || genreVal !== '') {
      addGenre(genreVal);
      myLibrary[myLibrary.length - 1].appendBook()
    }
  }

  //Close modal
  modal.style.display = "none";
  window.removeEventListener('scroll', noScroll);

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('page').value = '';
  document.getElementById('Genre').value = '';
  resetToggle();

  //Reset toggle if it's on read
}

//Function used to determine the read/unread position of the toggle button
var readState = [], sliderPosition = new Object();
readState.push(sliderPosition.haveRead = 'not read');
function haveReadState () {
  return (readState[0] === 'not read') ? readState[0] = 'read' : readState[0] = 'not read';
}

//Reset 
function resetToggle () {
  if (readState[0] == 'read') {
    document.getElementById('slider').click();
  }
}

function findBookName(target, myArray) {
  for (var i=0; i<myArray.length;i++) {
    if(myLibrary[i].title.toLowerCase() === target.toLowerCase()) {
      return i;
    }
  }
}



// Add Book frame
Book.prototype.appendBook = function (genre='unsorted') {
  //Add Book Class
  const div = document.createElement('div');
  const pTitle = document.createElement('p');
  const pAuthor = document.createElement('p');
  const pPages = document.createElement('p');
  const linebreak = document.createElement('br');
  const aElement = document.createElement('a');

  //Create a book element for each book submitted
  div.className = 'book';
  div.id = `${this.title}_book`;
  if(this.genre === '') {
    document.getElementById(`unsorted_shelf`).appendChild(div);
  } else {
    console.log('hello');
    document.getElementById(`${this.genre}_shelf`).appendChild(div);
  }

  //Append each info to the book cover 
  pTitle.className = 'title';
  pTitle.id = this.title;
  console.log(pTitle)
  pAuthor.className = 'author';
  pAuthor.id = `${this.title}_${this.author}`;
  pPages.className = 'pages';
  pPages.id = `${this.title}_${this.author}_${this.page}`;
  aElement.className = 'exit-button';
  aElement.id = `${this.title}_exitButton`
  
  //Title of the book
  document.getElementById(`${this.title}_book`).appendChild(pTitle);
  document.getElementById(`${this.title}`).innerHTML = `${this.title}`;
  
  //Insert Linebreak
  document.getElementById(`${this.title}_book`).appendChild(linebreak);
  
  //insert author, page number, and exit button
  document.getElementById(`${this.title}_book`).appendChild(pAuthor);
  document.getElementById(`${this.title}_${this.author}`).innerHTML = `By ${this.author}`;
  document.getElementById(`${this.title}_book`).appendChild(pPages);
  document.getElementById(`${this.title}_${this.author}_${this.page}`).innerHTML = `${this.page} pages`;
  document.getElementById(`${this.title}_book`).appendChild(linebreak);
  document.getElementById(`${this.title}_book`).appendChild(aElement);
  document.getElementById(`${this.title}_exitButton`).innerHTML = '✖';

  aElement.addEventListener('click', function(event) {
    console.log(event);
    let bookParent = document.getElementById(event.srcElement.parentNode.id);
    //Remove from myLibrary Array
      //Find the name of the book that we're removing
      var tempTitle = bookParent.id.split('_')[0].toString();
      //Find the index of the title in myLibrary
      myLibrary.splice(findBookName(tempTitle, myLibrary),1);
    //Remove from the DOM
    bookParent.remove();
  }) 
  

  document.getElementById(`${this.title}_book`).style.backgroundColor = randomColor();
}

//Finds which index the target genre is located at
function searchLibrary (target, myArray) {
  for (var i=0; i < myArray.length; i++) {
    if (Object.keys(myArray[i])[0] === target) {
      return i;
    }
  }
  return -1;
}

//Add Genre (Genre div, genre name, bookframe)

var genreList = ['Unsorted'];

function addGenre (newGenre = 'unsorted') {
  genreList.push(newGenre);
  const div = document.createElement('div');

  const containerDiv = document.createElement('div');
  const p = document.createElement('p');

  //Create new genre div, 1) genre title & 2) triangle container for book covers and id for book covers
  div.className = 'genre';

  div.id = `${newGenre}_Genre`;

  p.className = 'genre-name';
  p.id = `${newGenre}_title`
  containerDiv.className = 'triangle_container';
  containerDiv.id = `${newGenre}_shelf`;

  //Add new items to the main body
  document.getElementById('bookshelf').appendChild(div);

  //For the genre row
  document.getElementById(`${newGenre}_Genre`).appendChild(p);
  document.getElementById(`${newGenre}_Genre`).classList.add('card');
  document.getElementById(`${newGenre}_Genre`).classList.add('open');
  //For the container for the books within the genre row
  document.getElementById(`${newGenre}_Genre`).appendChild(containerDiv);
  document.getElementById(`${newGenre}_shelf`).classList.add('hidden');
  document.getElementById(`${newGenre}_title`).innerHTML = `${newGenre}`


  console.log(backgroundColor[newGenre])
  if(backgroundColor.hasOwnProperty(newGenre) === true) {
    console.log('hey')
    console.log(backgroundColor[newGenre])
  document.getElementById(`${newGenre}_Genre`).style.backgroundImage = `url(${backgroundColor[newGenre]})`;
  } else if (backgroundColor.hasOwnProperty(newGenre) === 'unsorted') {}
  else {document.getElementById(`${newGenre}_Genre`).style.backgroundImage = `url(src/synthwave.png)`}

  //to add clickability to the new genre row
  // old = $('.card').get(0);
  $('.card').click(toggleFlex)
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

/********************************DICTIONARY OF COMMON GENRE AND COOL BACKGROUNDS *****************************/

backgroundColor = {
  Action: 'https://i.vimeocdn.com/video/487821347_1280x720.jpg',
  Adventure: 'https://www.slrlounge.com/wp-content/uploads/2020/06/best-landscape-photographers-to-follow-in-2020-1200x675.jpg',
  Horror: 'https://i.pinimg.com/originals/b1/5d/1b/b15d1b822a2654448b7dfc04962bd096.png',
  Crime: 'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/03/1*rICHr5C8WAws-9B0IdytmQ.jpeg',
  Fantasy: 'https://i.pinimg.com/originals/4c/55/c7/4c55c70c4b14371a9e3d483744849a50.jpg',
  Mystery: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT16Fm1Gq8r9G0NutsxsPgLZmU0zSgnDHWDzg&usqp=CAU',
  'Fairy Tale': 'https://www.stuckinthelibrary.org/uploads/2/7/4/1/27415253/published/693145-widescreen-fairy-tale-wallpaper-1920x1080-pictures.jpg?1550451276',
  Comedy: 'http://hd.wallpaperswide.com/thumbs/funny-t2.jpg',
  Philosophical: 'https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTU3ODc5MDg2NDMzNTEwNzI5%2Fdeath-of-socrates.jpg',
  'Science Fiction': 'https://wallpaperaccess.com/full/158905.jpg',
  Western: 'https://www.wallpapertip.com/wmimgs/52-522788_cowboy-background-images-cowboy-background-sm-western-theme.jpg',
  Urban: 'https://i.ytimg.com/vi/HIaPhJSmgrw/hqdefault.jpg'
}

/********************************FLEX BOX CODE *****************************/

let old = $('.card').get(0);
$('.card').click(toggleFlex)

function toggleFlex () {
  if(old !=null && $(old).hasClass('open'))
    $(old).toggleClass('open');
    $(this).toggleClass('open');
    old = this;
}