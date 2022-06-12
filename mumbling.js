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