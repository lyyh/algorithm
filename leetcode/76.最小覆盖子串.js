/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    var need = new Map()
    for (var i = 0; i < t.length; i++) {
        var char = t.charAt(i)
        var val = need.get(char) || 0
        need.set(char, ++val)
    }
    var window = new Map()
    var left = 0,
        right = 0,
        start = 0
    var valid = 0;
    var len = s.length + 1
    while (right < s.length) {
        var c = s.charAt(right)
        right++
        if (need.get(c)) {
            var val = window.get(c) || 0
            window.set(c, ++val)
            if (need.get(c) === window.get(c)) {
                valid++
            }
        }

        while (valid === need.size) {
            if (right - left < len) {
                start = left
                len = right - left
            }

            var char = s.charAt(left)
            left++

            if (need.get(char)) {
                if (window.get(char) === need.get(char)) {
                    valid--
                }
                var val = window.get(char)
                window.set(char, --val)
            }
        }
    }

    return len === s.length + 1 ? '' : s.substr(start, len)
};
// @lc code=end