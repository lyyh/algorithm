// 备忘录
var memo = {};
var fib = function (N) {
    if (N === 0) return 0
    if (N === 1) return 1
    if(memo[N])return memo[N]
    memo[N] = fib(N - 1) + fib(N - 2)
    return memo[N]
};

// 状态压缩，把一维度数组大小变成最近的两个值
// 二维数组 => 一维数组
var fib = function (N) {
    if (N < 1) return 0
    if (N === 1 || N === 2) return 1
    var pre1 = pre2 = 1
    var cur
    for (var i = 3; i <= N; i++) {
        cur = pre1 + pre2
        pre2 = pre1
        pre1 = cur
    }
    return cur
};

// 一维数组状态自底向上
var fib = function (N) {
    if (N < 1) return 0
    if (N === 1 || N === 2) return 1
    var dp = new Array(N + 1)
    dp[0] = 0
    dp[1] = dp[2] = 1
    for (var i = 3; i <= N; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[N]
};