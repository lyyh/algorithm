/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    if (N < 1) return 0
    if (N === 1 || N === 2) return 1
    var dp = new Array(N + 1)
    dp[0] = 0
    dp[1] = dp[2] = 1
    for (var i = 3; i <= N; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[N]
};
// @lc code=end