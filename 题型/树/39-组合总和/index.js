/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var candidates = [2, 3, 6, 7],
    target = 7;
var combinationSum = function (candidates, target) {
    if (!candidates.length) return []
    var res = []
    var path = []
    // 排序
    candidates.sort(function (a, b) {
        return a - b > 0
    })
    dfs(candidates, target, 0, path, res)
    return res;

};
var dfs = function (candidates, target, begin, path, res) {
    // console.log('path',path)
    if (target === 0) {
        res.push(path);
        return;
    }
    // const _target = target
    for (var i = begin; i < candidates.length; i++) {
        if (target < candidates[i]) {
            break;
        }
        path.push(candidates[i])
        dfs(candidates[i], target - candidates[i], i + 1, path, res)
    }
}

console.log(combinationSum(candidates, target))