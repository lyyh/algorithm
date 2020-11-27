var seq = "(()())"

var level_1 = function () {
    var maxDepthAfterSplit = function (seq) {
        var answer = []
        var maxDepth = -1;
        // 奇偶性
        for (var i = 0; i < seq.length; i++) {
            if (seq[i] === "(") {
                maxDepth++;
                answer.push(maxDepth % 2)
            } else {
                answer.push(maxDepth % 2)
                maxDepth--
            }
        }
        return answer
    };

    console.log(maxDepthAfterSplit(seq))
}

level_1();

var level_2 = function () {
    var maxDepthAfterSplit = function (seq) {
        var ANums = 0;
        var BNums = 0;
        var answers = []
        for (var i = 0; i < seq.length; i++) {
            if (seq[i] === '(') {
                if (ANums <= BNums) {
                    ANums++
                    answers.push(0)
                } else {
                    BNums++
                    answers.push(1)
                }
            } else {
                if (ANums <= BNums) {
                    BNums--
                    answers.push(1)
                } else {
                    ANums--
                    answers.push(0)
                }
            }
        }
        return answers
    }

    console.log(maxDepthAfterSplit(seq))
}

level_2();

// 用两个栈来实现
var level_3 = function () {
    var maxDepthAfterSplit = function (seq) {
        var AStack = [];
        var BStack = [];
        var answers = [];
        for (var i = 0; i < seq.length; i++) {
            if (seq[i] === '(') {
                if (AStack.length <= BStack.length) {
                    AStack.push(seq[i])
                    answers.push(0)
                } else {
                    BStack.push(seq[i])
                    answers.push(1)
                }
            } else {
                if (AStack.length <= BStack.length) {
                    BStack.pop()
                    answers.push(1)
                } else {
                    AStack.pop()
                    answers.push(0)
                }
            }
        }
        return answers
    }

    console.log(maxDepthAfterSplit(seq))
}

level_3();