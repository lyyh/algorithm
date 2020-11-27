/**
 * @param {number[]} nums
 * @return {number[]}
 * nums = [8,1,2,2,3]
 */
// var nums = [8, 1, 2, 2, 3]
var nums = [7,7,7,7]
var smallerNumbersThanCurrent = function (nums) {
    var s = Array.from(nums)
    s.sort(function (a, b) {
        return a - b;
    });
    var map = {}
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = i
        }
    }
    return nums.map(item => {
        return map[item]
    })
};
console.log(smallerNumbersThanCurrent(nums))