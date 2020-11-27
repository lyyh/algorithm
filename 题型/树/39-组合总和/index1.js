var candidates = [2,7,6,3,5,1],
    target = 9;
var combinationSum = function (candidates, target) {
    if (!candidates.length) return []
    var res = []
    // 排序
    candidates.sort(function (a, b) {
        return a - b > 0
    })

    var dfs = function (start, path, remain, candidates) {
        for (var i = start; i < candidates.length; i++) {
            if (remain === candidates[i]) {
                path = path.concat(candidates[i])
                res.push(path)
                return
            }
            if (remain > candidates[i]) {
                path = path.concat(candidates[i])
               
                dfs(i, path, remain - candidates[i], candidates, res)
                path.pop();
            }
        }
    }

    dfs(0, [], target, candidates)
    return res;

};

console.log(combinationSum(candidates, target))