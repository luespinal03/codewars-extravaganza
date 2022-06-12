 function accum(str) {
     let newStr = "";

     for (let i = 0; i < str.length; i++) {
         newStr = newStr + str[i].toUpperCase();

         // i is our index
         // here is where we need to add the lowercases. after the upperCase charcater, but before the dash
         for (let n = 0; n < i; n++) {
             newStr = newStr + str[i].toLowerCase();
         }
         if (i === str.length - 1) { // if we are in the last index dont add anything
             newStr = newStr + "" // add nothing
         } else {
             newStr = newStr + "-" // if we are not in the last index then add a "-"
         }
     }
     return newStr;
 }
 console.log(accum("abcd"));
 console.log(accum("RqaEzty"));
 console.log(accum("cwAt"));

 //accum("abcd") - > "A-Bb-Ccc-Dddd"
 //accum("RqaEzty") - > "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 //accum("cwAt") - > "C-Ww-Aaa-Tttt"

 /* Notes: 

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
*/