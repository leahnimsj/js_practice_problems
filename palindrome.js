(function () {

  
  function palindrome(word){

      let arrayWord = word.split("")
      let reversedArrayWord = arrayWord.reverse()
      let reversedWord = reversedArrayWord.join("")
    
      return (word == reversedWord)
  
  }

  module.exports = palindrome;

})()
