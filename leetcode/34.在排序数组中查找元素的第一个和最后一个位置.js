/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var binarySearch = function (nums, target, lowest) {
    var left = 0,
        right = nums.length - 1,
        ans = -1
    while (left <= right) {
        var mid = left + ((right - left) >> 1)
        if(nums[mid] === target){
            if(lowest && nums[mid - 1] === target){
                right = mid - 1
            }else if(!lowest && nums[mid + 1] === target){
                left = mid + 1
            }
        }
        if(nums[mid] > target){
            right = mid - 1
        }else if(nums[mid] < target){
            left = mid + 1
        }
    }

    if(lowest && left < nums.length && nums[left] === target)ans = left
    if(!lowest && right >= 0 && nums[right] === target)ans = right
}
var searchRange = function (nums, target) {
    if (!nums.length) return [-1, -1]

    var leftIdx = binarySearch(nums, target, true)
    var rightIdx = binarySearch(nums, target, false)

    return [leftIdx, rightIdx]
}
// @lc code=end