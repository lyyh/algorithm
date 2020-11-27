/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var judgeIpSegment = function (s, left, right) {
    const len = right - left + 1
    if (len > 1 && s.charAt(left) === '0') {
        return -1
    }

    var res = 0;
    for (var i = left; i <= right; i++) {
        res = res * 10 + (+s.charAt(i));
    }
    if (res > 255) return -1;
    return res;
}
var dfs = function (s, len, path, res, split, begin) {
    if (begin === len) {
        if (split === 4) {
            res.push(path.join('.'))
        }
        return
    }
    // 剪枝
    if (len - begin < (4 - split) || len - begin > 3 * (4 - split)) {
        return
    }
    for (var size = 0; size < 3; size++) {
        if (begin + size >= len) {
            break;
        }
        var segment = judgeIpSegment(s, begin, size + begin)
        if (segment !== -1) {
            path.push(segment + '')
            dfs(s, len, path, res, split + 1, begin + size + 1)
            path.pop();
        }
    }
}
var restoreIpAddresses = function (s) {
    var res = [],
        path = [],
        splitTimes = 0;
    var len = s.length
    // 如果长度不够，不搜索
    if (len < 4 || len > 12) {
        return res;
    }
    dfs(s, len, path, res, splitTimes, 0);
    return res;
};
s = "25525511135"
console.log(restoreIpAddresses(s))
// @lc code=end