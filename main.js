function makeArrayConsecutive(nums) {
    //  write code here.
}



/**
* Test Suite 
*/
describe('makeArrayConsecutive()', () => {
    it('returns total missing numbers between smallest and largest number', () => {
        // arrange
        const nums = [6, 2, 3, 8];
        
        // act
        const result = makeArrayConsecutive(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    })
});