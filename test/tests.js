const add = require('../add.js');

describe('Learning Testing', function() {

    /** ONLY MOCHA **/
    describe('Part1(Mocha): simple statement', function() {
        it("Testing anything", function () {
            var a = 5;
            if(a !== 5 ){
                throw new Error("a should be = 5");
            }
        });
    });

    /** MOCHA + ASSERT NATIVE **/
    const assert = require('assert');
    describe('Part2(Assert): indexOf', function() {
        it('#indexOf(): should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });

    /** MOCHA + CHAI **/
    const { expect } = require('chai');
    describe('Part3(Mocha + Chai): add', function() {
        it('should return the sum of two positive numbers', function() {
          expect(add(2, 4)).to.equal(6);
        });
      
        it('should return the sum of two negative numbers', function() {
          expect(add(-2, -4)).to.equal(-6);
        });
      
        it('should return the sum of an array of numbers', function() {
          expect(add([1,2,3,4,5])).to.equal(15);
        });
    });


});

