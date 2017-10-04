var findTallestMountain = require('../tallestmountain');
var chai = require('chai');
var expect = chai.expect;

describe('Tallest Mountain', function() {
    context('when moutain heights are 500, 400, 3000', function() {
      it('returns tallest mountain = 3000', function() {
        var tallest = findTallestMountain([500, 400, 3000]);
        expect(tallest).to.equal(3000);
      });
    });

    context('when moutain heights are 1000, 400, 500', function() {
      it('returns tallest mountain = 1000', function() {
        var tallest = findTallestMountain([1000, 400, 500]);
        expect(tallest).to.equal(1000);
      });
    });
});