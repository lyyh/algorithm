/*
 * @lc app=leetcode.cn id=1111 lang=javascript
 *
 * [1111] 有效括号的嵌套深度
 */

// @lc code=start
/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
    var AStack = [];
    var BStack = [];
    var answers = [];
    for (var i = 0; i < seq.length; i++) {
        if (seq[i] === '(') {
            if (AStack.length <= BStack.length) {
                AStack.push(seq[i])
                answers.push(0)
            } else {
                BStack.push(seq[i])
                answers.push(1)
            }
        } else {
            if (AStack.length <= BStack.length) {
                BStack.pop()
                answers.push(1)
            } else {
                AStack.pop()
                answers.push(0)
            }
        }
    }
    return answers
}
// @lc code=end