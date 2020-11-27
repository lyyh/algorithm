/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root.val === p.val || root.val === q.val)return root;
    var left = lowestCommonAncestor(root.left,p,q)
    var right = lowestCommonAncestor(root.right,p,q)
    if(!left && !right)return null
    if(!left)return right
    if(!right)return left
    return root
};
// @lc code=end

