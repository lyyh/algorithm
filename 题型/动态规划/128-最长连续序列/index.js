var nums = [100,4,200,1,3,2]
var longestConsecutive = function (nums) {
    var map = new Map();
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            var left = !map.has(nums[i] - 1)? 0 : map.get(nums[i] - 1)
            var right = !map.has(nums[i] + 1)? 0 : map.get(nums[i] + 1)
            var longest = left + right + 1;
            map.set(nums[i], longest)
            map.set(nums[i] - left, longest)
            map.set(nums[i] + right, longest)
            res = Math.max(res, longest)
        }
    }
    return res;
}
console.log(longestConsecutive(nums))