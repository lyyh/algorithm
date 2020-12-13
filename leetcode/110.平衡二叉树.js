/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var recur = function (root) {
    if (!root) return 0
    var left = recur(root.left)
    if (left === -1) return -1
    var right = recur(root.right)
    if (right === -1) return -1
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1
}
var isBalanced = function (root) {
    return recur(root) !== -1
};
// @lc code=end