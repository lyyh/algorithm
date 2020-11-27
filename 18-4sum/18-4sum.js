var nums = [1, 0, -1, 0, -2, 2];
var target = 0;

var fourSum = function (nums, target) {
    console.log(222222222)
    var result = []
    for (var i = 0; i < nums.length; i++) {
        var j = i + 1
        // if (j === nums.length - 2) return;
        var t = nums[i] + nums[j] // 确定值

        var right = nums.length - 1
        for (var left = j + 1; left < right; left++) {
            if(t + nums[left] + nums[right] === target){
                result.push([i,j,left,right])
            }
        }
    }
    return result
};

console.log(fourSum(nums,target))