/**
 * @param {string} s
 * @return {string}
 */
var s = "We are happy."
var level_1 = (function () {
    var replaceSpace = function (s) {
        var arr = s.split('')
        var p1 = s.length - 1
        var p0 = s.length - 1;
        for (var i = 0; i < s.length; i++) {
            if (s[i] === ' ') {
                arr = arr.concat([' ', ' '])
                p1 += 2
            }
        }
        for (var j = s.length - 1; j >= 0; j--) {
            if (p1 === p0) break;
            if (arr[j] === ' ') {
                p0--;
                arr[p1--] = '0'
                arr[p1--] = '2'
                arr[p1--] = '%'
            } else {
                arr[p1--] = arr[p0--]
            }
        }
        return arr.join('')
    };
    console.log(replaceSpace(s))
})
// level_1()


var level_2 = (function (s) {
    function replaceSpace(params) {
        var res = ''
        for (var i = 0; i < s.length; i++) {
            if (s[i] === ' ') {
                res += '%20'
            } else {
                res += s[i]
            }
        }
        return res;
    }
    console.log(replaceSpace)
})


// level_2()

var level_3 = (function () {
    function replaceSpace(s) {
        return s.replace(/\s/g,'%20')
    }
    console.log(replaceSpace(s))
})

level_3()