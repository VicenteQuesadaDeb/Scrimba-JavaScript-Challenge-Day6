function makeArrayConsecutive(nums) {
  //  write code here.
  const numsOrdered = nums.sort();
  console.log(numsOrdered);
  return missingNumbers(numsOrdered);
}

function missingNumbers(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log("actual " + nums[i]);
  console.log("siguiente " + nums[i+1]);
    if (nums[i] * -1 + nums[i+1] >= 1) {
      count += nums[i] * -1 + nums[i+1]-1;
    }
  }
  return count;
}

/**
 * Test Suite
 */
describe("makeArrayConsecutive()", () => {
  it("returns total missing numbers between smallest and largest number", () => {
    // arrange
    const nums = [6, 2, 3, 8];

    // act
    const result = makeArrayConsecutive(nums);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(3);
  });
});
