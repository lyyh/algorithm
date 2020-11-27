/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var nums1 = [2, 0],
    m = 1
var nums2 = [1],
    n = 1

var merge = function (nums1, m, nums2, n) {
    var p1 = 0,
        p2 = 0,
        p = 0;

    var nums1_copy = [...nums1]

    while (p1 < m && p2 < n) {
        if (nums1_copy[p1] <= nums2[p2]) {
            nums1[p++] = nums1_copy[p1++]
        } else {
            nums1[p++] = nums2[p2++]
        }
    }
    if (p1 < m) {
        nums1.splice.apply(nums1, [p1 + n, m - p1, ...nums1_copy.slice(p1, m)])
    }
    if (p2 < n) {
        nums1.splice.apply(nums1, [p2 + m, n - p2, ...nums2.slice(p2, n)])
    }
    return nums1
};

console.log(merge(nums1, m, nums2, n))