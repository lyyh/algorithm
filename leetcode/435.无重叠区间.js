/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intervalSchedule = function (intervals) {
    var count = 1
    var end = intervals[0][1]
    for(var i = 0;i < intervals.length;i++){
        var item = intervals[i]
        if(item[0] >= end){
            end = item[1]
            count++
        }
    }
    return count
}
var eraseOverlapIntervals = function(intervals) {
    if(!intervals.length)return 0
    intervals = intervals.sort((a,b)=>{
        return a[1] - b[1]
    })
    var n = intervalSchedule(intervals)
    return intervals.length - n
};
// @lc code=end

