/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    var strAry1 = text1.split('')
    var strAry2 = text2.split('')
    var len1 = strAry1.length
    var len2 = strAry2.length
    var dp = Array.from({
        length: len1 + 1
    },()=>new Array(len2+1).fill(0))

    for(var i = 1; i < len1 + 1;i++){
        for(var j = 1 ; j < len2 + 1;j++){
            if(strAry1[i - 1 ] === strAry2[j-1] ){
                dp[i][j] = 1 + dp[i-1][j-1]
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[len1][len2]
};
// @lc code=end