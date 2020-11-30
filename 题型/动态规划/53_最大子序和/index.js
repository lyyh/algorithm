// 解一：
var level_1 = (function () {
    var maxSubArray = function (nums) {
        var dp = new Array(nums.length).fill(0);
        dp[0] = nums[0]
        var max = dp[0]
        for (var i = 1; i < nums.length; i++) {
            if (dp[i - 1] + nums[i] > 0) {
                dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
            } else {
                dp[i] = nums[i]
            }
            max = Math.max(max, dp[i])
        }
        return max;
    };
    var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    console.log(maxSubArray(nums))
})

level_1()

// 解二：
var level_2 = (function () {
    var maxSubArray = function (nums) {
        var sum = 0
        var res = nums[0]
        for (var i = 0; i < nums.length; i++) {
            if (sum > 0) {
                sum += nums[i]
            } else {
                sum = nums[i]
            }
            res = Math.max(res, sum)
        }
        return res
    };
    var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    console.log(maxSubArray(nums))
})

level_2()