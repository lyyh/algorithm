/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (dfs(i, j, 0, board, word)) {
                return true
            }
        }
    }
    return false;
};

function dfs(i, j, index, board, word) {
    if (i >= board.length || j >= board[0].length || i < 0 || j < 0 || board[i][j] !== word[index]) {
        return false;
    }
    if (index === word.length - 1) {
        return true
    }
    var tmp = board[i][j]
    board[i][j] = '.'
    var res = dfs(i + 1, j, index + 1, board, word) || dfs(i, j + 1, index + 1, board, word) || dfs(i - 1, j, index + 1, board, word) || dfs(i, j - 1, index + 1, board, word)
    board[i][j] = tmp;
    return res;
}
// @lc code=end