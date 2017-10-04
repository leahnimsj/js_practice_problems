var newPopulation = require('../cherokee_hare');
var chai = require('chai');
var expect = chai.expect;

describe('Cherokee Hare', function() {
    context('when starting population = 200, birthrate = 0.1', function() {
      it('hare population = 322 after 5 weeks', function() {
        var population = newPopulation(200, 0.1, 5);
        expect(population).to.equal("There will be 322 amount of hares in 5 weeks.")
      });
    });

    context('when starting population = 400, birthrate = 0.5', function() {
      it('hare population = 1350 after 3 weeks', function() {
        var population = newPopulation(400, 0.5, 3);
        expect(population).to.equal("There will be 1350 amount of hares in 3 weeks.");
      });
    });

});