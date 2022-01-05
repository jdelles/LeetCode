const twoSum = require("./two_sum");

const array1 = [2, 7, 11, 15];
const arr1result = [0, 1];

test("base test", () => {
    expect(twoSum(array1, 9)).toStrictEqual(arr1result);
});
