var canPartition = function (nums) {
    var sums = 0
    for (var i = 0; i < nums.length; i++) {
        sums += nums[i]
    }
    if (sums % 2 !== 0) return false

    var target = sums >> 1
    var memo = new Map()

    var dfs = function (curSum, i) {
        if (curSum === target) return true
        if (curSum > target) return false
        if (i >= nums.length) return false
        var key = "" + curSum + '_' + i
        if (memo.has(key)) {
            return memo.get(key)
        }

        var res = dfs(curSum + nums[i], i + 1) || dfs(curSum, i + 1)
        memo.set(key, res)
        return res
    }
    return dfs(0, 0)
};