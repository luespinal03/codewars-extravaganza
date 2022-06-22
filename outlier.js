let array1 = [2, 4, 0, 100, 4, 11, 2602, 36]
//Should return: 11 (the only odd number)

let array2 = [160, 3, 1719, 19, 11, 13, -21]
//Should return: 160 (the only even number)


function findOutlier(banana) {
    let outlier = 0;
    let isEvenArray = false; 

    let num0 = banana[0];
    let num1 = banana[1];
    let num2 = banana[2];

if (num0 % 2 === 0 && num1 % 2 === 0){
    isEvenArray = true;

} else if (num0 % 2 === 0 && num2 % 2 === 0){
    isEvenArray = true;
}else if (num1 % 2 === 0 && num2 % 2 === 0){
    isEvenArray = true;
}


if( isEvenArray === true){
    // find the odd number
    for(let i = 0; i < banana.length; i++){
        if (banana[i] % 2 !== 0)
        outlier = banana[i];
        
    }
} else if(isEvenArray === false){
    // find the even number
    for(let i = 0; i < banana.length; i++){
        if (banana[i] % 2 === 0)
        outlier = banana[i];
    }
}
    return outlier
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));