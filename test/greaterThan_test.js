var greaterThan = require('../greaterThan');
var chai = require('chai');
var expect = chai.expect;

describe('Greater Than', function() {
    context('when numbers are 6 and 2', function() {
      it('return should be true - second variable is greater', function() {
        var result = greaterThan(2, 6);
        expect(result).to.equal(true);
      });
    });

    context('when numbers are 105 and 47', function() {
        it('return should be false - first variable is greater', function() {
          var result = greaterThan(105, 47);
          expect(result).to.equal(false);
        });
      });


});