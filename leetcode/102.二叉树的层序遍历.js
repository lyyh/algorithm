/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root){
    var res = []
    var nodes = []
    if(!root){
        return nodes
    }
    nodes.push(root)
    while(nodes.length){
        var size = nodes.length
        var list = []
        for(var i = 0;i < size;i++){
            var node = nodes.shift()
            if(!node)continue
            list.push(node.val)
            if(node.left){
                nodes.push(node.left)
            }
            if(node.right){
                nodes.push(node.right)
            }           
        }
        res.push(list)
    }
    return res
}
// @lc code=end