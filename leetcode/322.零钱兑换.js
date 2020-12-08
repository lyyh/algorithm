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
    coins = coins.sort((a,b)=> b - a)
    if (amount === 0) return 0
    var ans = Number.MAX_VALUE
    var dfs = function (coins, amount, index, count) {
        if (amount === 0) {
            ans = Math.min(ans, count)
            return
        }
        if (index === coins.length) return
        for (var k = Math.floor(amount / coins[index]); k >= 0 & k + count < ans; k--) {
            dfs(coins, Math.floor(amount - k * coins[index]), index + 1, count + k, ans)
        }
    }
    dfs(coins, amount, 0, 0)
    return ans === Number.MAX_VALUE ? -1 : ans
};
// @lc code=end