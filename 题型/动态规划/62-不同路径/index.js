/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 转移方程式：dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * https://leetcode-cn.com/problems/unique-paths/solution/dong-tai-gui-hua-by-powcai-2/
 */
var m = 7
var n = 3
var level_1 = (function name() {
    // 时间复杂度O(m*n)，空间复杂度O(n)，变一维数组
    var uniquePaths = function (m, n) {
        var cur = new Array(n).fill(1)
        for (var i = 1; i < m; i++) {
            for (var j = 1; j < n; j++) {
                cur[j] += cur[j - 1]
            }
        }
        return cur[n - 1]
    };

    console.log(uniquePaths(m, n))
})

// level_1()

// 严格按照转移方程式：dp[i][j] = dp[i-1][j] + dp[i][j-1]来执行
var level_2 = (function name() {
    var uniquePaths = function (m, n) {
        var dp = new Array(n).fill(new Array(m).fill(0))
        for (var i = 0; i < n; i++) {
            dp[i][0] = 1;
        }
        for (var j = 0; j < m; j++) {
            dp[0][j] = 1
        }
        for (var i = 1; i < n; i++) {
            for (var j = 1; j < m; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
        return dp[n - 1][m - 1]
    };

    console.log(uniquePaths(m, n))
})

// level_2()

var level_3 = (function name() {
    var uniquePaths = function (m, n) {
        
        // var dp = new Array(n).fill(new Array(m).fill(0))
        // for (var i = 0; i < n; i++) {
        //     dp[i][0] = 1;
        // }
        // for (var j = 0; j < m; j++) {
        //     dp[0][j] = 1
        // }
        // for (var i = 1; i < n; i++) {
        //     for (var j = 1; j < m; j++) {
        //         dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        //     }
        // }
        // return dp[n - 1][m - 1]
    };

    console.log(uniquePaths(m, n))
})