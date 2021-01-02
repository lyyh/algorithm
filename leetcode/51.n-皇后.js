/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var isValid = function (board, row, col) {
    var n = board.length

    for (var i = 0; i < n; i++) {
        if (board[i][col] === 'Q') return false
    }

    for (var i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') return false
    }

    for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false
    }

    return true
}
var solveNQueens = function (n) {
    var str = ''
    for(var i = 0;i < n;i++){
        str += '.'
    }
    var board = new Array(n).fill(str)
    var res = []
    var backtrack = function (board, row) {
        if (row === board.length) {
            res.push([...board])
            return
        }

        var n = board[row].length
        for (var col = 0; col < n; col++) {
            if (!isValid(board, row, col)) continue
            var _arr = board[row].split('')
            _arr[col] = 'Q'
            board[row] = _arr.join('')
            backtrack(board, row + 1)
            var _arr = board[row].split('')
            _arr[col] = '.'
            board[row] = _arr.join('')
        }
    }
    backtrack(board, 0)
    return res
};
// @lc code=end