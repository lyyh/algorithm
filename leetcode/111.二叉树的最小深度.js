/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
    if(!root)return 0
    var step = 1
    var queue = [root]
    while (queue.length) {
        var size = queue.length
        for(var i = 0;i < size;i++){
            var node = queue.shift()
            if(!node.left || !node.right)return step
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        step++
    }
    return step
}
// @lc code=end