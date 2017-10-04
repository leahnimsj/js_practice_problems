(function(){


    function longestWord(testString){

        let stringArray = testString.split(" ");
        let lengthOfWord = 0;
        let longestWord;
        for (var i = 0; i < stringArray.length; i++) {
            if (lengthOfWord < stringArray[i].length){
                lengthOfWord = stringArray[i].length;
                longestWord = stringArray[i];
                
            } 
            // this is to handle a sentence that where there are two of the longest words
            else if (lengthOfWord == stringArray[i].length){
                lengthOfWord = stringArray[i].length;
                longestWord = [ longestWord, stringArray[i]];
            }
        }
        // turning the result into an array if it's not to be consistent
        if (!Array.isArray(longestWord)) {
            longestWord = [longestWord];
        }
        return longestWord

    }

    module.exports = longestWord;

})()