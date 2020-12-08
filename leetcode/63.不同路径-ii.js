/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    var m = obstacleGrid.length
    var n = obstacleGrid[0].length
    var dp = new Array(m).fill(new Array(n))

    for (var i = 1; i < n; i++) {
        dp[0][i] = obstacleGrid[0][i] === 1 || dp[0][i - 1] === 0 ? 0 : 1
    }
    for (var j = 1; j < m; j++) {
        dp[j][0] = obstacleGrid[j][0] === 1 || dp[j - 1][0] === 0 ? 0 : 1
    }
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }else{
                dp[i][j] = 0
            }
        }
    }
    return dp[m - 1][n - 1]
};
// @lc code=end