const merge = require("./merge_sorted_array");

arr1 = [1, 2, 2, 0, 0, 0];
arr2 = [2, 5, 6];
arrMerged = [1, 2, 2, 2, 5, 6];

test("Merge Sorted Array: base case", () => {
    expect(merge(arr1, 3, arr2, 3)).toStrictEqual(arrMerged);
});
