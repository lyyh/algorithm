/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    var dp = Array.from({
        length: amount + 1
    }, () => amount + 1)
    dp[0] = 0
    for (var i = 0; i <= amount; i++) {
        for (var j = 0; j < coins.length; j++) {
            if (i < coins[j]) continue
            dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i])
        }
    }
    return (dp[amount] === amount + 1) ? -1 : dp[amount]
}
// @lc code=end