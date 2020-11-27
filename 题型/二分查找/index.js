var nums = [5, 7, 7, 8, 8, 10]
var target = 10

var bsearch = function (target, nums) {
    var mid = 0
    var left = 0
    var right = nums.length
    while (left < right) {
        mid = (left + right) >> 1
        if (nums[mid] >= target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    var first = bsearch(target, nums)
    var end = bsearch(target + 1, nums)
    if (first === nums.length || nums[first] !== target) {
        return [-1, -1]
    }
    return [first, end - 1]
};

console.log(searchRange(nums,target))