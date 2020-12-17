/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var left = 0, right = 0
    var maxLen = 0
    var window = {}
    while (right < s.length) {
        var char = s.charAt(right++)
        if (!window[char]) window[char] = 1
        else window[char]++

        while (window[char] > 1) {
            var d = s.charAt(left++)
            window[d]--
        }
        maxLen = Math.max(maxLen,right - left)
    }
    return maxLen
};
// @lc code=end