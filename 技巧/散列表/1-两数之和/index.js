/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var nums = [2, 7, 11, 15],
    target = 9;
var twoSum = function (nums, target) {
    var hash = {}
    for (var i = 0; i < nums.length; i++) {
        if (typeof hash[nums[i]] !== 'undefined') {
            return [hash[nums[i]], i]
        }
        var other = target - nums[i];
        hash[other] = i;
    }
};
console.log(twoSum(nums, target))