/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s === '') return true
    var j = 0;
    for (var i = 0; i < t.length; i++) {
        if (s[j] === t[i]) j++
        if (i <= t.length - 1 && j === s.length) return true
    }
    return false
};
// @lc code=end