/**
 * @param {character[][]} grid
 * @return {number}
 * 方法：深度优先遍历（DFS）
 * 时间复杂度：O(MN)O(MN)，其中 MM 和 NN 分别为行数和列数。
 * 空间复杂度：O(MN)O(MN)，在最坏情况下，整个网格均为陆地，深度优先搜索的深度达到 M NMN。
 */
grid = [
    ["1", "0", "1", "1", "0", "1", "1"]
]

var numIslands = function (grid) {
    var gx = grid.length
    if (!gx) return 0;
    var gy = grid[0].length

    var result = Array.from({
        length: grid.length
    }, () => {
        return Array(grid[0].length).fill(0)
    })

    var islandNum = 0
    for (var i = 0; i < gx; i++)
        for (var j = 0; j < gy; j++) {
            if (grid[i][j] === '1' && result[i][j] === 0) {
                islandNum++
                dfs(grid, i, j, result)
            }
        }
    return islandNum
};

var dfs = function (grid, i, j, result) {
    if (i < 0 ||
        j < 0 ||
        i >= grid.length ||
        j >= grid[0].length ||
        result[i][j] !== 0 ||
        grid[i][j] === '0'
    ) return
    result[i][j] = 1
    dfs(grid, i - 1, j, result)
    dfs(grid, i + 1, j, result)
    dfs(grid, i, j - 1, result)
    dfs(grid, i, j + 1, result)
}

console.log(numIslands(grid))

// TODO 优化方案：
var optimizeFn = (function () {
    var numIslands = function (grid) {
        var gx = grid.length
        if (!gx) return 0;
        var gy = grid[0].length

        var islandNum = 0
        for (var i = 0; i < gx; i++)
            for (var j = 0; j < gy; j++) {
                if (grid[i][j] === '1') {
                    islandNum++
                    dfs(grid, i, j)
                }
            }
        return islandNum
    };

    var dfs = function (grid, i, j) {
        if (i < 0 ||
            j < 0 ||
            i >= grid.length ||
            j >= grid[0].length ||
            grid[i][j] === '0'
        ) return

        grid[i][j] = '0'
        dfs(grid, i - 1, j)
        dfs(grid, i + 1, j)
        dfs(grid, i, j - 1)
        dfs(grid, i, j + 1)
    }

    console.log(numIslands(grid))
})
optimizeFn();