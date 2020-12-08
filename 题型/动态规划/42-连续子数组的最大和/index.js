var maxSubArray = function (nums) {
    var max_sum = nums[0]
    var max = max_sum
    if (nums.length === 1) return max_sum

    for (var i = 1; i < nums.length; i++) {
        var max_sum = Math.max(nums[i], max_sum + nums[i])
        var max = Math.max(max_sum, max)
    }
    return max
};
var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))