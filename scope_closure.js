// practice with the instructor
// scope
// Answer the question where our variables and functions are available
// Global variables
// var school = "Gabi school";
// var can be replaced
// can be redeclare
// let
// let can not be redeclare
// let can be updated / reassign
// const 
// const can not be redeclare
// let can not be updated / reassign
// function scope 
// when a variable is created inside a function it is only available inside that function
const group = "BB1";
function cohort(group) {
  let members = "term 1";
  console.log(group);
};
// scope function
let answer;
if(1 === 1) {
  answer = "Answer is true ?"
}
// console.log(answer);
// console.log(members);
for(var i = 0; i< 10; i++) {
  // console.log(i);
}
// console.log(i);
// Function can be scoped
// function are like variables in scope
const student = "Feisal";
// function callStudent(student){
//   console.log(student);
// }
// function student2() {

//   return console.log(student);
// }
// student2();
// funtion within function 
// function sayHi(name) {
//   function yell(){
//     console.log(name.toUpperCase());

//   }
//   yell();
// }
// sayHi("mohamed");
// Hoisting
// Hoisting allow us to access  function/variable before they have created
// function declaraton and variable declaration acn be hoisted.
// working()
// function working(){
//   console.log("it's working")
// }
// closures
// closures give us the ability to put functions together
// the ability to access functions from a parent level scope in child level scope
// even after the parent function has been terminated/returned
// lexical scope an inside function can access outer variable
// function country(countryname) {
//   const lang1 = "Arabic";
//   const lang2 = "Somali";
//   console.log(`${lang1} and ${lang2} are official language in ${countryname}`);
//   function state(statename) {
//     console.log(`${lang1} and ${lang2} are official language in ${countryname} --- state`)
//   }
//   state("Banadir");
// }
// country("somalia");
// ----------------------------
// function game(sport) {
//   let score = 0;
//   return function win(){
//     score ++; // incrementing score by 1
//     return `Your ${sport} game score is ${score}`;
//   }
// }
// private variables
// const football = game("football");
// console.log(football());
// console.log(football());

// const basketball = game("basketball");
// console.log(basketball());
// console.log(basketball());

// callback and higher orders function
// higher order functions  receive other functions as parameters
// callback functions are passed into higher function as arguments

// kitchen is a higher order function
// 'chef' = callback function
// const kitchen = function(item1, item2, chef) {
//   return chef(item1, item2);
// }

// // callback function
// const pizzaChef = function(item1, item2) {
//   return `i took ${item1} and i took ${item2} and i made it pizza`;
// }
// console.log(kitchen("souce", "dough", pizzaChef));



///// M V P ///////

/******************************************************************************\
	Task 1: `counterMaker`
\******************************************************************************/
/****** INSTRUCTIONS TASK 1 ******/
//  Study the code below for counter1 and counter2. Answer the questions below.
 
//  1. What is the difference between counter1 and counter2?
// * counter1 variable was declared inside the function scope while counter2
//  variable was declared outside the function scope.
//   2. Which of the two uses a closure? How can you tell?
//  * Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data
//   This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.
//  * a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.



//   3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
//   * counter1 when you want A function to access all variables defined inside the function.
//   * counter2 when you want A function to access variables defined outside the function,

// // counter1 code
// function counterMaker() {
//   let count = 0;
//   return function counter() {
//     count++;
//   }
// }

// const counter1 = counterMaker();

// // counter2 code
// let count = 0;

// function counter2() {
//   return count++;
// }


/******************************************************************************\
	Task 2: Get Motivated
\******************************************************************************/

/****** INSTRUCTIONS TASK 2 ******/
/* Inside the motivation function create another function called message that
will return 'You're doing awesome, keep it up firstname lastname.' */

// function motivation(firstname, lastname) {

//   function message() {
//  return `'You're doing awesome, keep it up ${firstname} ${lastname}`;
//   } ;

//   // code message function here.


//   //Uncommment this to return the value of your invoked message function
//   return message();

// };

// console.log(motivation('Mohamed', 'Ali')); // 'You're doing awesome keep it up Mohamed Ali.


/******************************************************************************\
 Task 3: Find Your Friends
 \******************************************************************************/

/****** INSTRUCTIONS PROBLEM 3 ******/
/* Here we are given three arrays: an array of friends, an array of second-level
friends (friends of friends), and an array of all users. These arrays may share
users. Write a function that takes in our existing friends and returns
a function that will tell us if a given user is not already a friend. */

let friends = ["Ahmed", "Khadijo", "Farah"];
let secondLevelFriends = ["Mahad", "Farah", "Mohamed"];
let allUsers = ["Ahmed", "Khadijo", "Farah", "Mahad", "Mohamed", "Bashir", "Ali"];

// function findPotentialFriends(existingFriends) {
//   return function(x) {
//     return existingFriends.map(function(elem) {
//    if(elem === x) return false;
//       else return true;
//      })
//     // for(var i = 0; i < existingFriends.length; i++) {
//      //  if(existingFriends[i] === x) return false;
//       // else return true;
//      //}
//    }
// }
// var isNotAFriend = findPotentialFriends(friends); {

// console.log(isNotAFriend(allUsers[0])); // false
// isNotAFriend(secondLevelFriends[2]); // true

// }
/******************************************************************************\
	Task 4: Keep a log
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 4 ******/
/* Here we have a for loop that will iterate as long as i is less than or equal
to 5. What we need to do is console.log(i) so that it logs like so:
 0 second after call - log 0
 1 seconds after call - log 1
 2 seconds after call - log 2
 3 seconds after call - log 3
 4 seconds after call - log 4
 5 seconds after call - log 5
 However, because each call to console.log occurs after the loop has finished,
 the value of i has changed before the console.log executes. We'll need to use
 a closure to preserve a reference to i at the time of execution.
 Fix the code below to log the desired output.
 */

function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(function() {
    	console.log(i)
	}, i * 1000)
  }
}
timeOutCounter("0 second after call - log 0");
console.log(timeOutCounter);


/******************************************************************************\
	Task 5: Check if name exists
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 5 ******/
/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
  };
  // Example usage: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  
  // ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
  
  let increment = 0;
  let decrement = 0;
  return {
    more: function () {
      return ++increment;
    },
    less: function () {
      return --decrement;
    }
  }
};
