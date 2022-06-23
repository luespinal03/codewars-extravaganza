/*

1 parameter = birds array (array of strings)

let resultArray = arrayToFilter.filter(function(x){
    return condition // if x meets condition, and it to result array. if not, skip it
})

// indexOf
array = [1,3,5]
array.indexOf(5) = returns the index of 5 
in this case it returns 2 because 5 is at index 2
returns -1 if it cant find that item

array.indexOf(6) -> returns -1 if it cant find the item

returning an array with the geese in it

if item (x) is not in geese array, add it to result array return geese.indexOf(x) !== -1 // if not equal to -1, then the item must NOT be in the geese array, so we can add it to our output

*/


// items to be removed
// let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]


// let x = '';
// x = 'Pilgrim'
// console.log(geese.indexOf(x)); // 




function gooseFilter(birds) {

    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(function (x) {
        //console.log("x: " + x)
        //console.log("index: " + geese.indexOf(x))// we want to take stuff out of birds array
        return geese.indexOf(x) === -1 // go through each bird index, and if its not in the geese array filter it out
    })

    // if item in birds array is NOT in geese array, add to final array
}
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))




// function invert(array) {
//     let resultArray = []; 

//     resultArray = array.map(function(banana){
//         return banana * -1
//     })
//     return resultArray
// }

// console.log(invert([1, 2, 3, 4, 5]))
// console.log(invert([1, -2, 3, -4, 5]))
// console.log([])



// let myArray = ['cat', 'dog', 'fish']
// console.log(myArray.indexOf('cat'))// 0 