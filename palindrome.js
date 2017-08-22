(function () {

  let word = "racecar"


  let arrayWord = word.split("")
  let reversedArrayWord = arrayWord.reverse()
  let reversedWord = reversedArrayWord.join("")

  if (word == reversedWord) {

    console.log("True")

  }
  else {
    console.log("False");
  }


  // console.log(word);
  // console.log(reversedArrayWord);
  // console.log(reversedWord);

})()
