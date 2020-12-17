/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    var need = {}
    var window = {}
    for (var char of s1) {
        if (!need[char]) need[char] = 1
        else need[char]++
    }
    var left = 0, right = 0,
        valid = 0
    while (right < s2.length) {
        var char = s2.charAt(right++)
        if (need[char]) {
            if (!window[char]) window[char] = 1
            else window[char]++
            if (window[char] === need[char]) {
                valid++
            }
        }

        while (right - left >= s1.length) {
            if (valid === Reflect.ownKeys(need).length) {
                return true
            }
            var char = s2.charAt(left++)
            if (need[char]) {
                if (window[char] === need[char]) {
                    valid--
                }
                window[char]--
            }
        }
    }
    return false
};
// @lc code=end