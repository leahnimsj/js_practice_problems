(function() {

  let word = "cheese";
  let letter = "s";

  let wordArray = word.split(letter).length;

  let result = wordArray - 1;

  if (result>0) {
    var text = "Yeah, the letter " + letter + " exists " +result +" time(s) in my word"
  } else {
      var text = "Nope, that letter doesn't exist in my word."

  }

  // console.log(wordArray);
  // console.log(result);
  // console.log(yes);
  console.log(text);

})()
