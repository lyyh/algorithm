/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function (root) {
    var result = [];
    if (!root) return result

    var current = new TreeNode(-1);
    var count = 0;
    var maxCount = 0;

    var dfs = function (root) {
        if (!root) return root
        dfs(root.left)
        if (root.val === current.val) {
            count++
            if (count === maxCount) {
                result.push(current.val)
            }else if(count > maxCount){
                result = [current.val]
                maxCount = count
            }
        } else {
            current = root
            count = 1;
            if(count === maxCount){
                result.push(current.val)
            }
            if (count > maxCount) {
                result = [current.val];
                maxCount = count
            }
        }
        dfs(root.right)
    }
    dfs(root)
    return result
};

// @lc code=end