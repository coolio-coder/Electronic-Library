function toUpperNoMutate (str) {
  str = str[0].toUpperCase() + str.slice(1);
  return str;
}

var hello = 'hello'
var hello2 = toUpperNoMutate(hello);
console.log(hello)
console.log(hello2)


function toUpperMutate (str) {
    str[0] = str[0].toUpperCase();
    
}

var myStr = 'blah';
toUpperMutate(myStr)
console.log(myStr)