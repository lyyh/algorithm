/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var numDecodings = function (s) {
//     var len = s.length
//     if(len === 1 && s[0] === '0'){
//         return 0
//     }
//     if(len === 2 && (s[1] === '0' || parseInt(s) > 26)){
//         return 1
//     }
//     console.log(s === '00')
//     if(len === 2 && s === '00'){
//         return 0
//     }
//     var dp = new Array(s.length + 1).fill(0)
//     dp[0] = 0; // s长度为0
//     dp[1] = 1; // s长度为1
//     dp[2] = 2
//     for (let i = 2; i < len; i++) {
//         var pre = s[i - 1]
//         var cur = s[i]
//         if (pre === '0' || pre === '0') {
//             dp[i + 1] = dp[i];
//             continue
//         }
//         var val = pre + cur - '0';
//         dp[i + 1] = dp[i] + (val <= 26 ? dp[i - 1] : 0)
//     }
//     return dp[s.length]
// };

var numDecodings = function (s) {
    var dp = new Array(s.length + 1)
    if (s[0] === '0') return 0;
    dp[-1] = dp[0] = 1
    for (var i = 1; i < s.length; i++) {
        if (s[i] === '0') {
            if (s[i - 1] === '1' || s[i - 2] === '2') {
                dp[i] = dp[i - 2]
            }
            return 0
        } else {
            if (s[i - 1] === '1' || (s[i - 2] === '2' && s[i - 1] >= '1' && s[i - 1] <= '6')) {
                dp[i] = dp[i - 1] + (i - 2 === -1 ? dp["-1"] : dp[i - 2])
            } else {
                dp[i] = dp[i - 1]
            }
        }
    }
    console.log(dp)
    return dp[s.length - 1]
}
// @lc code=end