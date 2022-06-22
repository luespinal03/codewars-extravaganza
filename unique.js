// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

/*
1 parameter (iterable)

iterable can be a string or an array numbers/characters

finalArray variable

for loop to go through iterable

conditional to check if letter is the same as following indexs

no need to check for case

return finalArray

AAAABBBCCDAABBB

if(iterable[i] !== iterable[i + 1]){
    finalArray.push(iterable[i])

} else if(iterable[i] !== iterable[i + 1])




    // keep checking until whichever character in iterable[i]

*/


var uniqueInOrder = function uniqueInOrder(iterable){
    let finalArray = [];
    for(let i = 0; i < iterable.length; i++){
        if(iterable[i] !== iterable[i + 1]){
            finalArray.push(iterable[i])
    } else if(iterable[i + 1 === undefined]){
        finalArray.push(iterable[i])
    }
}
return finalArray
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1,2,2,3,3]))