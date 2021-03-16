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
// var lengthOfLongestSubstring = function (s) {
//     var left = 0, right = 0
//     var maxLen = 0
//     var window = {}
//     while (right < s.length) {
//         var char = s.charAt(right++)
//         if (!window[char]) window[char] = 1
//         else window[char]++

//         while (window[char] > 1) {
//             var d = s.charAt(left++)
//             window[d]--
//         }
//         maxLen = Math.max(maxLen,right - left)
//     }
//     return maxLen
// };

var lengthOfLongestSubstring = function (s) {
    var n = s.length,ans = 0
    var map = new Map();
    for(var start = 0,end = 0; end < n;end++){
        var target = s.charAt(end)
        if(map.get(target)){
            start = Math.max(map.get(target),start)
        }
        ans = Math.max(ans,end-start+1)
        map.set(s.charAt(end),end + 1)
    }
    return ans
}
// @lc code=end