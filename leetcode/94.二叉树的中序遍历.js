/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root){
    if(!root)return []
    var result = []
    var stack = []
    var p = root
    while(p || stack.length){
        while(p){
            stack.push(p)
            p = p.left
        }
        var p = stack.pop()
        result.push(p.val)
        p = p.right
    }
    return result
}
// @lc code=end