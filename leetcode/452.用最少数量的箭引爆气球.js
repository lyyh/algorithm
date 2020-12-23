/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var intervalSchedule = function (intervals) {
    var count = 1
    var end = intervals[0][1]
    for(var i = 0;i < intervals.length;i++){
        var item = intervals[i]
        if(item[0] > end){
            end = item[1]
            count++
        }
    }
    return count
}
var findMinArrowShots = function(points) {
    if(!points.length)return 0
    points = points.sort((a,b)=>{
        return a[1] - b[1]
    })
    return intervalSchedule(points)
};
// @lc code=end

