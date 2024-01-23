function arifmetical (numbers){
    var numbersSum = 0
    var numbersCounter = 0
    for (var num of numbers) {
        if (num > 0){
            numbersSum += num
            numbersCounter++
        }
    }
    var average = numbersSum / numbersCounter
    return average
}
console.log(arifmetical([2, -78, 45,4,-7,-6,-10, 26, 30, 8]).toFixed(2))


function square (numbers){
    var sumNumbers = 0
    for (var el of numbers){
        if (el % 2 === 0){
            sumNumbers += el*el
        }
    }
    return sumNumbers
}
console.log(square([2, 78, 45, 4, 7, 6, 10, 26, 30, 8, 46, 50, 25]))


function strings (array){
    var arr = []
    for (var word of array){
        if (word.includes('a')||word.includes('A')||word.includes('t')||word.includes('T')) {
            arr.push(word)
        }
    }
    return arr
}
var string = ['Apple', 'transport','cinema', 'airplane', 'carrot', 'Tennis', 'fill']

console.log(strings(['Apple', 'transport','cinema', 'airplane', 'carrot', 'Tennis', 'fill']))
