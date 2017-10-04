var bonusCalc = require('../bonus');
var chai = require('chai');
var expect = chai.expect;

describe('Tip', function() {
    context('when meal costs $22', function() {
      it('return should be $5 dollar tip', function() {
        var tip = bonusCalc(22);
        expect(tip).to.equal(5)
      });
    });

    context('when meal costs $87.32', function() {
        it('return should be $18 dollar tip', function() {
          var tip = bonusCalc(87.32);
          expect(tip).to.equal(18)
        });
      });

});