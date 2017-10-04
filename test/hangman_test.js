var hangman = require('../hangman');
var chai = require('chai');
var expect = chai.expect;

describe('Hangman ', function() {
    context('when word is cheese and guess is letter s', function() {
      it('returns true, s appears 1 time in the word', function() {
        var result = hangman('cheese', 's');
        console.log(result);
        expect(result).to.equal("Yes the letter s exists 1 time(s) in my word");
      });
    });

    context('when word is cheese and guess is letter l', function() {
      it('returns false, l does not appear in the word', function() {
        var result = hangman('cheese', 'l');
        console.log(result);
        expect(result).to.equal("Nope, the letter l does not exist in my word.");
      });
    });

    context('when word is cheese and guess is letter e', function() {
        it('returns true, e appears 3 time in the word', function() {
          var result = hangman('cheese', 'e');
          console.log(result);
          expect(result).to.equal("Yes the letter e exists 3 time(s) in my word");
        });
      });
});