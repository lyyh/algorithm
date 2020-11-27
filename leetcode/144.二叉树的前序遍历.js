/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
// var dfs = function (root, path) {
//     if (!root) return root;
//     path.push(root.val)
//     dfs(root.left, path)
//     dfs(root.right, path)
// }
// var preorderTraversal = function (root) {
//     const path = []
//     dfs(root,path)
//     return path
// };

var preorderTraversal = function (root) {
    if (!root) return root
    var p = null
    var result = []
    var stack = [];
    stack.push(root)
    while (stack.length) {
        var p = stack.pop();
        result.push(p.val)
        console.log('result',result)
        if (p.right) {
            stack.push(p.right)
        }
        if (p.left) {
            stack.push(p.left)
        }
    }
    return result
}
// @lc code=end