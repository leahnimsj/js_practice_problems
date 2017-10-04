(function(){

    function containsVowel(testWord){
        let wordArray = testWord.split("");
        for (var i = 0; i < wordArray.length; i++) {
            if (["a", "e", "i", "o", "u"].includes(wordArray[i])){
                return true
            }
        } 
    
        return false
    }

    module.exports = containsVowel;

})()