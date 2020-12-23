/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    var n = coins.length
    var dp = Array.from({
        length: n + 1
    }, () => new Array(amount + 1).fill(0))
    for (var i = 0; i <= n; i++) {
        dp[i][0] = 1
    }
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= amount; j++) {
            if (j - coins[i - 1] >= 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i-1]]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[n][amount]
}
// @lc code=end