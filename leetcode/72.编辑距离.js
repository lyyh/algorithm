/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var min = function (a, b, c) {
    return Math.min(a, Math.min(b, c))
}
var minDistance = function (word1, word2) {
    var len1 = word1.length
    var len2 = word2.length
    var dp = Array.from({
        length: len1 + 1
    }, () => {
        return new Array(len2 + 1).fill(0)
    })

    for (var i = 0; i <= len1; i++) {
        dp[i][0] = i
    }
    for (var j = 0; j <= len2; j++) {
        dp[0][j] = j
    }

    for (var i = 1; i <= len1; i++) {
        for (var j = 1; j <= len2; j++) {
            if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + 1
                )
            }
        }
    }
    return dp[len1][len2]
};
// @lc code=end