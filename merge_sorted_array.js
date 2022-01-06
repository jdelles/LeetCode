var merge = function (nums1, m, nums2, n) {
    // set pointer to the last index of nums1
    let tail = nums1.length - 1;

    // decrement m and n so they point to the greatest index holding a value in each array
    m--;
    n--;

    // loop so long as there are more values in nums2 to sort
    while (n >= 0) {
        // copy the greater value into the current tail position
        m >= 0 && nums1[m] > nums2[n]
            ? (nums1[tail--] = nums1[m--])
            : (nums1[tail--] = nums2[n--]);
    }
    return nums1;
};

module.exports = merge;
