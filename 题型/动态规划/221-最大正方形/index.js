/**
 * @param {character[][]} matrix
 * @return {number}
 * 转移方程式：dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1
 * 边界：二维数组边界 matrix === null || !matrix.length || !matrix[0].length
 * 一维下标 0 ，二维下标 0，maxSize 为 1
 * 每次遍历 maxSize = Math.max(maxSize, dp[i][j])
 */
var matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]
var level_1 = (function () {
    var maximalSquare = function (matrix) {
        var maxSize = 0
        if (matrix === null || !matrix.length || !matrix[0].length) {
            return maxSize;
        }
        var rows = matrix.length
        var columns = matrix[0].length
        var dp = Array.from({
            length: matrix.length
        }, () => {
            return new Array(matrix[0].length).fill(0)
        })
        for (var i = 0; i < rows; i++)
            for (var j = 0; j < columns; j++) {
                if (matrix[i][j] === '1') {
                    if (i === 0 || j === 0) {
                        dp[i][j] = 1
                    } else {
                        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                    }
                }
                maxSize = Math.max(maxSize, dp[i][j])
            }

        return maxSize * maxSize;
    };
    console.log(maximalSquare(matrix))
})

level_1();