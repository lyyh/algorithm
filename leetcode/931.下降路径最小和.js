/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function (A) {
    var len = A.length;
    var bottom = A[len - 1]
    var dp = [];
    for (var i = 0; i < bottom.length; i++) {
        dp[i] = bottom[i]
    }


    for (var j = bottom.length - 2; j >= 0; j--) {
        for (var i = 0; i < A[j].length; i++) {
            if (j - 1 >= 0) {
                dp[j] = Math.min(dp[j], dp[j + 1], dp[j - 1]) + A[j][i]
            } else {
                dp[j] = Math.min(dp[j], dp[j + 1]) + A[j][i]
            }
        }
    }
    return dp[0]
};
// @lc code=end