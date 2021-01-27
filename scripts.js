var myLibrary = [];

// const book1 = new Books('Harry Potter', 'Jk Rowling', 636, 'adventure', 'read');
// const book2 = new Books('A Song of Ice and Fire', 'George R. R. Martin', 694, 'adventure' ,'not read');
// const book3 = new Books('Eragon', 'Christopher Paolini', 509, 'adventure' ,'read');

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

const capitalize = str => {
  if(str !== '') {
  var str = str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1));
    if (str.length > 1) {
      return str.join(' ');
    } else {return str[0]}
  } return '';
}

/********************************************ADD BOOK BUTTON***********************************/

//Reset the Slider
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
      pageVal = document.getElementById('page').value
      genreVal = document.getElementById('Genre').value;

  //Capitalize all strings
  console.log(genreVal)
  if(titleVal, authorVal, pageVal === '') {
    alert('Please fill out the required information.')
  } else {
    titleVal = capitalize(titleVal);
    authorVal = capitalize(authorVal);
    genreVal = capitalize(genreVal);
    //Add the book to the library
    myLibrary.push(new Books(titleVal, authorVal, pageVal, genreVal, readState[0]))
    //Based on the genre that user inputs, this conditional will decide where to put the book
    if(genreList.includes(genreVal)) {
      console.log('waht')
      addTriangle(genreVal);
    } else if (!genreList.includes(genreVal) || genreVal !== '') {
      console.log(genreVal)
      addGenre(genreVal);
      addTriangle(genreVal);
    } else {
      addTriangle('unsorted')
    }
  }
  console.log(genreVal)
  console.log(titleVal)
  console.log(genreVal)

  //Close modal
  modal.style.display = "none";
  window.removeEventListener('scroll', noScroll);

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

function addTriangleUp(genreVal) {
  const div = document.createElement('div');
  div.className = 'triangle up';
  console.log(document.getElementById(`${genreVal}_shelf`))
  document.getElementById(`${genreVal}_shelf`).appendChild(div);
}
function addTriangleDown(genreVal) {
  const div = document.createElement('div');
  div.className = 'triangle down';
  document.getElementById(`${genreVal}_shelf`).appendChild(div);
}

// var bookshelf = [];
// function addNewGenre (genre) {
//   const newGenre =  {
//     [genre]: {
//       genre: genre,
//       isUp: false
//     }
//   };
//   bookshelf.push(newGenre);
// }
// addNewGenre('Romance');
// addNewGenre('Action');
// addNewGenre('Adventure');

//Finds which index the target genre is located at
function searchTriangleInfo (target, myArray) {
  for (var i=0; i < myArray.length; i++) {
    if (Object.keys(myArray[i])[0] === target) {
      return i;
    }
  }
  return -1;
}

function addTriangle (genreVal = 'unsorted') {
  let genreIndex = searchTriangleInfo(genreVal, triangleInfo);
  //Test if triangle info array does not contain the genre, then we create a new obj in the array
  if (genreIndex === -1) {
    const newGenre =  {
      [genreVal]: {
        genre: genreVal,
        isUp: false
      }
    };
    triangleInfo.push(newGenre);
  }
  //updates triangleInfo if a new genre is pushed onto the array
  genreIndex = searchTriangleInfo(genreVal, triangleInfo);
  //Use triangle array to detect the triangle position
  if (triangleInfo[genreIndex][genreVal].isUp === false) {
    addTriangleUp(genreVal);
    //Set the position of the triangle to be true then push onto the array
    triangleInfo[genreIndex][genreVal].isUp = true;
  } else {
    addTriangleDown(genreVal);
    //Set the position of the triangle to be false
    triangleInfo[genreIndex][genreVal].isUp = false;
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


//Add Genre (Genre div, genre name, bookframe)

var genreList = [];

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

  document.getElementById(`${newGenre}_Genre`).appendChild(p);
  document.getElementById(`${newGenre}_Genre`).appendChild(containerDiv);
  document.getElementById(`${newGenre}_title`).innerHTML = `${newGenre}`
  console.log(backgroundColor[newGenre])
  if(backgroundColor.hasOwnProperty(newGenre) === true) {
    console.log('hey')
    console.log(backgroundColor[newGenre])
  document.getElementById(`${newGenre}_Genre`).style.backgroundImage = `url(${backgroundColor[newGenre]})`;
  } else if (backgroundColor.hasOwnProperty(newGenre) === 'unsorted') {}
  else {document.getElementById(`${newGenre}_Genre`).style.backgroundImage = `url(src/synthwave.png)`}
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
  'Fairy Tale': 'https://www.stuckinthelibrary.org/uploads/2/7/4/1/27415253/published/693145-widescreen-fairy-tale-wallpaper-1920x1080-pictures.jpg?1550451276'
}

/********************************FLEX BOX CODE *****************************/

var genreBox = $('div.genre');

function toggleAccordion() {
  genreBox.removeClass('active');
  $(this).addClass('active');
}

genreBox.on('click', toggleAccordion)