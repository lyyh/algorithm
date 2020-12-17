var nums = [1, 2, 2, 3]
// 查左边界
var leftBound = function (nums, target) {
    var left = 0
    var right = nums.length - 1
    while (left <= right) {
        var mid = left + ((right - left) >> 2)
        if (target <= nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    if (left >= nums.length || nums[left] !== target) {
        return -1
    }
    return left
}
// 查右边界
var rightBound = function (nums, target) {
    var left = 0
    var right = nums.length - 1
    while (left <= right) {
        var mid = left + ((right - left) >> 2)
        if (target >= nums[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    if (right < 0 || nums[right] !== target) {
        return -1
    }
    return right
}

console.log(rightBound(nums, 2))