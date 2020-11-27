/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1
    var a = 0;
    var b = 1;
    var c = 1;
    var res = 0
    for (var i = 3; i <= n; i++) {
        res = a + b + c;
        a = b;
        b = c;
        c = res
    }
    return res
};
// @lc code=end