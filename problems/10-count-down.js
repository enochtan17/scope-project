/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will 
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it 
returns a string of "Happy New Year!". Look closely at how this function is 
invoked below:

Example 1:
  console.log(countDownTimer(0)); // prints "Happy New Year!"

Example 3:
  let oneDay = countDownTimer(1); // returns a function
  console.log(oneDay()); // prints "Happy New Year!"

Example 3:
  let twoDays = countDownTimer(2); // returns a function
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"

Example 4:
  let threeDays = countDownTimer(3); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // prints "Happy New Year!"

***********************************************************************/

// function countDownTimer(n){
//   let count = n;
//   if (count - n === 0) return "Happy New Year!";
//   // for (let i = 0; i < n; i++){
//   //   if (i < n-1) return function(cb){return cb};
//   //   else if (i === n-1) return "Happy New Year!";
//   // }
//   else{
//     return countDownTimer(n-1);  
//   }


// function hiddenCounter() {
//   let count = 0
//   return function() {
//     // count++
//     return ++count
//   }
// }

// function countDownTimer(n){
//   let count = n;
//   console.log("n's value when called is " + count);
//   if (count === 0) return "Happy New Year!"
//   else {
//     count--;
//     console.log("n is now " + count);
//     return function(){return "The function has been called"}
//   }
// }
  
// }

function countDownTimer(n){
  if (n === 0) return "Happy New Year";
  n--;
 };

console.log(countDownTimer(0)); // prints "Happy New Year!"

let oneDay = countDownTimer(1); // returns a function
console.log(oneDay()); // prints "Happy New Year!"

let twoDays = countDownTimer(2); // returns a function
console.log(twoDays()); // returns a function
console.log(twoDays()); // prints "Happy New Year!"

let threeDays = countDownTimer(3); // returns a function
console.log(threeDays()); // returns a function
console.log(threeDays()); // returns a function
console.log(threeDays()); // prints "Happy New Year!"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = countDownTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
