// 题目
// 对于一组不同重量、不可分割的物品，我们需要选择一些装入背包，在满足背包最大重量限制的前提下，背包中物品总重量的最大值是多少呢
// 方法一：记忆递归
var weight = [2, 2, 4, 6, 3];
var maxW = 10
var maxRes = 0
var memo = Array.from({
    length: 5
}, () => new Array(10))

var calc = function (curW, num) {
    if (num === weight.length || curW === maxW) {
        maxRes = Math.max(maxRes, curW)
        return
    }
    if (memo[num][curW]) return
    calc(curW, num + 1)
    if (curW + weight[num] <= maxW) {
        calc(curW + weight[num], num + 1)
    }
    memo[num][curW] = true
}
calc(0, 0)
console.log(maxRes)