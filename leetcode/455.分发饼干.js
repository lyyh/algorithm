/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort(function (a,b) {
        return a - b
    })
    s.sort(function (a,b) {
        return a - b
    })
    var child = 0
    var cookie = 0
    while (child < g.length && cookie < s.length) {
        if(g[child] <= s[cookie]){
            child++
        }
        cookie++
    }
    return child
};
// @lc code=end

