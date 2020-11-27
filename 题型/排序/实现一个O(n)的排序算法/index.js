// 目标：对公司几万名员工进行排序
var people = [1,3,2,20,4,10]
var sortAges = function (ages) {
    var answers = [];
    var oldestAge = 99;
    var timesOfAge = new Array(oldestAge + 1).fill(0)
    for(var i = 1;i < ages.length;i++){
        timesOfAge[ages[i]]++
    }
    for(var i = 0;i < oldestAge + 1;i++){
        var stages = new Array(timesOfAge[i]).fill(i)
        answers = answers.concat(stages)
    }
    return answers
}
console.log(sortAges(people))