var longestWord = require('../longestWord');
var chai = require('chai');
var expect = chai.expect;

describe('Longest Word ', function() {
    context('when string is: I went to the zoo yesterday', function() {
      it('returns yesterday', function() {
        var longWord = longestWord('I went to the zoo yesterday');
        expect(longWord).to.eql(['yesterday']);
      });
    });

    context('when string is: Today is a good day', function() {
        it('returns today', function() {
          var longWord = longestWord('Today is a good day');
          expect(longWord).to.eql(['Today']);
        });
    });

    context('when string is: what is good', function() {
        it('returns what and good', function() {
            var longWord = longestWord('what is good');
            expect(longWord).to.eql(['what', 'good']);
        });
    });


});