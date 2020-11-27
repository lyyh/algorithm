/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划 dp[i] = Math.max(dp[j]+1,dp[i]) j:0<j<1
 */
var nums = [10,9,2,5,3,7,101,18]
var lengthOfLIS = function (nums) {
    if(!nums.length)return 0
    var maxiumn = 1;
    var dp = new Array(nums.length).fill(0)
    dp[0] = 1
    for (var i = 1; i < nums.length; i++) {
        dp[i] = 1
        for (var j = 0; j < i; j++) {
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        maxiumn = Math.max(dp[i],maxiumn)
    }
    return maxiumn
};

console.log(lengthOfLIS(nums))