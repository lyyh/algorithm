var numbers = [3, 32, 321]

numbers.sort(function (a, b) {
    var str1 = '' + a + b
    var str2 = '' + b + a
    return str1 - str2
})

var res = parseInt(numbers.join(''))