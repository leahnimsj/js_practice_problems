var palindrome = require('../palindrome');
var chai = require('chai');
var expect = chai.expect;

describe('Palindrome', function() {
    context('when word is poop', function() {
      it('return should be true', function() {
        var result = palindrome("poop");
        expect(result).to.equal(true)
      });
    });

    context('when word is seattle', function() {
        it('return should be false', function() {
          var result = palindrome("seattle");
          expect(result).to.equal(false)
        });
      });

});