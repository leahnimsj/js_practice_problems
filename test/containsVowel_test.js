var containsVowel = require('../containsVowel');
var chai = require('chai');
var expect = chai.expect;

describe('Contains Vowel', function() {
    context('when word is cheese', function() {
      it('return should be true - there is a vowel', function() {
        var result = containsVowel("cheese");
        expect(result).to.equal(true);
      });
    });

    context('when word is sdklj', function() {
        it('return should be false - there is no vowel', function() {
          var result = containsVowel("sdklj");
          expect(result).to.equal(false);
        });
      });


});