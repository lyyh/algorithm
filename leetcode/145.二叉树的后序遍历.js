/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    if(!root)return []
    var stack = []
    var p = root,r = null
    var res = []
    while(p && stack.length){
        if(!p){
            stack.push(p)
            p = p.left
        }
        p = stack.pop()
        
        // var p = queue.pop()
        // while(p.right){
        //     queue.push(p)
        //     p = p.right
        // }
        // var node = queue.pop()
        // while(node){}
        // queue.push(node.right)
        // queue.push(node.left)
    }
};
// @lc code=end

