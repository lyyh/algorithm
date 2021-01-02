/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var palindrome = function (s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--
        r++
    }
    return s.slice(l + 1, r)
}
var longestPalindrome = function (s) {
    var str = ''
    for (var i = 0; i < s.length; i++) {
        var s1 = palindrome(s, i, i)
        var s2 = palindrome(s, i, i + 1)
        str = s1.length > str.length ? s1 : str
        str = s2.length > str.length ? s2 : str
    }
    return str
};
// @lc code=end