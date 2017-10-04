(function() {

  // let word = "cheese";
  // let letter = "s";

  // let wordArray = word.split(letter).length;

  // let result = wordArray - 1;

  hangman("cheese", "s");


  function hangman(searchWord, letterGuess){
    
    let wordArray = searchWord.split(letterGuess).length;

    let result = wordArray - 1;
    
    // console.log(result);
    if (result>0) {
      return "Yes the letter " + letterGuess + " exists " + result + " time(s) in my word"
    } 
    
      return "Nope, the letter " + letterGuess + " does not exist in my word."
  
    }

    module.exports = hangman;


})()
