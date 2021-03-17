/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var max = 0
    for(var i = 0;i < grid.length;i++){
        for(var j = 0;j < grid[0].length;j++){
            if(grid[i][j] === 1){
                max = Math.max(max,dfs(grid,i,j))
            }
        }
    }
    return max
};

var dfs = function (grid,i,j) {
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0){
        return 0
    }
    grid[i][j] = 0
    var count = 1
    count += dfs(grid,i-1,j)
    count += dfs(grid,i+1,j)
    count += dfs(grid,i,j-1)
    count += dfs(grid,i,j+1)
    return count
}
// @lc code=end

