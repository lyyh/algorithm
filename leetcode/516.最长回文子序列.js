/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    var dp = Array.from({length:s.length},()=>new Array(s.length))
    return findLPSLengthRecursive(0,s.length-1,dp,s)
};

var findLPSLengthRecursive = function (startIndex,endIndex,dp,str) {
    if(startIndex > endIndex)return 0
    if(startIndex === endIndex)return 1
    if(!dp[startIndex][endIndex]){
        if(str[startIndex] === str[endIndex]){
            dp[startIndex][endIndex] = 2 + findLPSLengthRecursive(startIndex + 1,endIndex -1,dp,str)
        }else{
            var res1 = findLPSLengthRecursive(startIndex + 1,endIndex,dp,str)
            var res2 = findLPSLengthRecursive(startIndex,endIndex-1,dp,str)
            dp[startIndex][endIndex] = Math.max(res1,res2)
        }
    }
    return dp[startIndex][endIndex]
}
// @lc code=end

