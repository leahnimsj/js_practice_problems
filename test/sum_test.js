var sumCalc = require('../sum');
var chai = require('chai');
var expect = chai.expect;

describe('Sum', function() {
    context('when first number is 4 and second is 22', function() {
      it('return should be 26', function() {
        var result = sumCalc(4, 22);
        expect(result).to.equal(26)
      });
    });

    context('when first number is 101 and second is 101', function() {
        it('return should be 202', function() {
          var result = sumCalc(101, 101);
          expect(result).to.equal(202)
        });
    });


});