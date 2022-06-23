// let invert1 = ([1, 2, 3, 4, 5]) //== [-1,-2,-3,-4,-5]
// let invert2 = ([1, -2, 3, -4, 5]) //== [-1,2,-3,4,-5]
// let invert3 = ([]) //== []


function invert(array) {
    let resultArray = []; 

    resultArray = array.map(function(banana){
        return banana * -1
    })
    return resultArray
}

console.log(invert([1, 2, 3, 4, 5]))
console.log(invert([1, -2, 3, -4, 5]))
console.log([])




// let invertToMap = invert1.map(function (banana) {
//     return banana * -1
// })

// let invertToMap2 = invert2.map(function (banana) {
//     return banana * -1
// })

// let invertToMap3 = invert3.map(function (banana) {
//     return banana * -1
// })
// console.log(invertToMap)
// console.log(invertToMap2)
// console.log(invertToMap3)