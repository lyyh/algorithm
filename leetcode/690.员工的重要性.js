/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
    var map = new Map()
    for (var i = 0; i < employees.length; i++) {
        var emp = employees[i]
        map.set(emp.id, emp)
    }
    var emp = map.get(id)
    var queue = emp.subordinates;
    var ans = emp.importance
    while (queue.length) {
        var empId = queue.shift()
        var emp = map.get(empId)
        ans += emp.importance
        queue = queue.concat(emp.subordinates)
    }
    return ans
};
// @lc code=end