/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var swap = function (num,left,right) {
    var tmp = num[left]
    num[left] = num[right]
    num[right] = tmp
}
var partition = function(num,left,right){
    var pivot = num[left];
    var j = left
    for(var i = left+1;i <= right;i++){
        if(num[i] < pivot){
            j++
            swap(num,j,i)
        }
        console.log(num)
    }
    swap(num,j,left)
    return j
}
var findKthLargest = function(nums, k) {
    var left = 0
    var len = nums.length
    var right = len - 1
    var target = len - k
    while(true){
        var index = partition(nums,left,right);
        if(index === target){
            return nums[index]
        }else if(index < target){
            left = index + 1
        }else{
            right = index - 1
        }
    }
};
// @lc code=end

