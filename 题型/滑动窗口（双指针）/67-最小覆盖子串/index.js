/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var s = "ADOBECODEBANC",
    t = "ABC"

var minWindow = function (s, t) {
    if (!s || !t || s.length < t.length) return '';

    var need = new Array(128).fill(0)
    var have = new Array(128).fill(0)

    for (var i = 0; i < t.length; i++) {
        need[t.charCodeAt(i) - 65]++
    }

    var left = 0,
        right = 0,
        min = s.length + 1,
        start = 0,
        count = 0;

    while (right < s.length) {
        var r = s.charCodeAt(right) - 65
        if (need[r] === 0) {
            right++
            continue;
        }
        if (have[r] < need[r]) {
            count++
        }
        have[r]++
        right++
        while (count === t.length) {
            if (right - left < min) {
                min = right - left
                start = left
            }
            var l = s.charCodeAt(left) - 65
            if (need[l] === 0) {
                left++
                continue
            }
            if (have[l] === need[l]) {
                count--
            }
            have[l]--
            left++
        }
    }
    if (min === s.length + 1) {
        return ''
    }
    return s.substring(start, start + min)
};

console.log(minWindow(s, t))