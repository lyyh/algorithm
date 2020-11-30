/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var calcWays = function (n, memo) {
    if (n === 1) return 1
    if (n === 2) return 2
    if (!memo[n]) {
        memo[n] = calcWays(n - 1, memo) + calcWays(n - 2, memo)
    }
    return memo[n]
}
var climbStairs = function (n) {
    var memo = new Array(n + 1)
    return calcWays(n, memo)
};
// @lc code=end