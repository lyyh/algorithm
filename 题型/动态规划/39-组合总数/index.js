/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var candidates = [2, 3, 6, 7],
    target = 7;
var combinationSum = function (candidates, target, d, res = []) {
    return d = (i, t, r) => i < candidates.length && t < target ? (r.push(candidates[i]), d(i, t + candidates[i], r), r.pop(), d(i + 1, t, r)) : t === target && res.push(r.slice()), d(0, 0, []), res
};
console.log(combinationSum(candidates,target))