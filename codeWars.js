// function positiveSum(arr) {
//     let newStr = 0

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             newStr = newStr + 0
//         } else {
//             newStr = newStr + arr[i]
//         }
//     }
//     return newStr
// }

// console.log(positiveSum([1, -4, 7, 12]))




// function reverseString(str){
//     return str.split("").reverse().join("")
// }

// console.log(reverseString("colin"))
// console.log(reverseString("mesuara"))




/////////////////////////////- HIGH AND LOW -///////////////////////////////////


// function highAndLow(numbers) {
//     let numArray = numbers.split(" ") // splits one array into 5 different arrays
//     let varHigh = Number(numArray[0])
//     let varLow = Number(numArray[0])

//     for (let i = 0; i < numArray.length; i++) {

//         if (varHigh < Number(numArray[i])) { // if varHigh is less than the number we are currently on, then replace it
//             varHigh = Number(numArray[i])
//         } else if (varLow > Number(numArray[i])) { // if varLow is greater than the number we are currently on, then replace it
//             varLow = Number(numArray[i])
//         }

//     }
//     return String(varHigh + " " + varLow)
// }

// console.log(highAndLow("1 2 3 4 5")) // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")) // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")) // return "9 -5"


/////////////////////////////- HIGH AND LOW -///////////////////////////////////








//////////////////////////////////////////////////////////

// function vowels(str) {
//     let newStr = ""

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
//         newStr = newStr + str[i]
//         } else {
//             newStr = newStr + ""
//         }

//     }
//     return newStr
// }

// console.log(vowels("luis espinal"))
// console.log(vowels("quickly"))
// console.log(vowels("peter parker"))





////////////////////////////VERY HARD MUMBLING//////////////////////////////////

// function accum(str) {
//     let newStr = "";

//     for (let i = 0; i < str.length; i++) {
//         newStr = newStr + str[i].toUpperCase();

//         // i is our index
//         // here is where we need to add the lowercases. after the upperCase charcater, but before the dash
//         for (let n = 0; n < i; n++) {
//             newStr = newStr + str[i].toLowerCase();
//         }
//         if (i === str.length - 1) { // if we are in the last index dont add anything
//             newStr = newStr + "" // add nothing
//         } else {
//             newStr = newStr + "-" // if we are not in the last index then add a "-"
//         }
//     }
//     return newStr;
// }
// console.log(accum("abcd"));
// console.log(accum("RqaEzty"));
// console.log(accum("cwAt"));
/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

*/




/*
Notes: 

Step 1: Capitalize all letters first






Parameter: type, String, how many? 1 parameter, str (parameters are separated by commas) 

do i need to go through each character 1 at a time? yes
syntax needed to do that: loop - for loop
things i need:

i for the index 
newStr - empty string to build upon

to control the cae: 
.toUpperCase() a => A, A => A
.toLowerCase() A => a, a => a

let str = "hi"
str.toUpperCase(); => "HI"
let str2 = "Wow";
str2.toLowerCase(); => "wow"


////////////////////////////-VERY HARD MUMBLING-////////////////////////////////
*/

// let str = "hi"
// console.log(str.toUpperCase());
// let str2 = "Wow";
// console.log(str2.toLowerCase());




// capitalize the first letter in our string
// capitalize("headphones") => "Headphones"
// function capitalize(str) {
//     let newStr = ""
//     for (let i = 0; i < str.length; i++) {

//         // str[i] => "h"
//         if (i === 0) { // checks to see if we are at the first index, if we are then do whats inside the brackets
//             newStr = newStr + str[0].toUpperCase(); // 

//             // or this:
//             // let u = str[0].toUpperCase();
//             // newStr = newStr + u; 

//         } else if (i > 0) {
//             newStr = newStr + str[i].toLowerCase();

//         }
//     }
//     return newStr;

// }

// console.log(capitalize("headphones"));
// console.log(capitalize("apple"));


////////////////////////////-VERY HARD MUMBLING-////////////////////////////////






////////////////////////////-HARD SHORTEST WORD-////////////////////////////////

// function findShort(s) {
//     let wordsArray = s.split(" ")
//     let newVar = wordsArray[0]
//     // console.log(wordsArray);
//     for (let i = 0; i < wordsArray.length; i++) {

//         if (newVar.length > wordsArray[i].length) { // if the word on shortWord is smaller than the one on wordsArray then replace the value of
//             newVar = wordsArray[i]
//         }
//     }
//     return (newVar.length)
// }

// console.log(findShort("headphones apple bus"))



//     let numArray = numbers.split(" ") // splits one array into 5 different arrays




////////////////////////////-HARD SHORTEST WORD-////////////////////////////////








///////////////////////////-Medium Vowels Count-////////////////////////////////

// function getCount(str) {
//     //let newStr = str.split(",")
//     let vowelsCount = 0;
//     let newArray = ""
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
//             newStr = newArray;
//             vowelsCount++;
//         }
//     }

//     return vowelsCount;
// }


// console.log(getCount("a,e,i,o,u"));

///////////////////////////-Medium Vowels Count-////////////////////////////////



//////////////////////////-Medium Remove first and last character-/////////////


// function removeChar(str){
//     let wordsArray = str.split(" ")
//     // wordsArray = wordsArray.splice(1,4);
//     wordsArray2 = wordsArray.splice(1,4);

//     return wordsArray;
// }

// console.log(removeChar("Today has been a good day"))


//////////////////////////-Get the middle Character-////////////////////////////


function getMiddle(s){
    let newStr = s;
    let divStr = "";
    

    for (let i = 0; i < s.length; i++) {
       
    }


return divStr;
}

console.log("test");
console.log("testing");
console.log("middle");
console.log("A");
