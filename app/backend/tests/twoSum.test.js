const twoSum = require('../utils/twoSum'); //import path of js file 

describe('twoSum', () => { //describe scenario Two sum
    it('finds the indices of two numbers that sum up to the target', () => { // it (if) finds the indes sums 
        expect(twoSum([2, 3, 5], 8)).toStrictEqual([1, 2]); // Remember indices start from 0
    });
});