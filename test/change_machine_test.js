var changeMachine = require('../change_machine');
var chai = require('chai');
var expect = chai.expect;

describe('Change Machine', function() {
    context('when starting amount is $72', function() {
      it('return should be 3 twenties, 1 ten, and 2 dollar bills', function() {
        var change = changeMachine(72);
        expect(change).to.eql([3, 1, 0, 2])
      });
    });

    context('when starting amount is $118', function() {
        it('return should be 5 twenties, 1 ten, 1 five, and 3 dollar bills', function() {
        var change = changeMachine(118);
        expect(change).to.eql([5, 1, 1, 3])
        });
    });

});